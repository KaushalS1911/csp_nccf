import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from 'src/components/settings';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import axios from 'axios';
import { SingleFilePreview, Upload } from 'src/components/upload';
import { Helmet } from 'react-helmet-async';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import imageCompression from 'browser-image-compression';
import { UploadDocumentListView } from 'src/sections/add-upload/view';
import FileThumbnail from 'src/components/file-thumbnail';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { error } from 'src/theme/palette';
import { useAuthContext } from 'src/auth/hooks';
import { LoadingScreen } from 'src/components/loading-screen';

const validationSchema = yup.object().shape({
  doc_type: yup.string().required('Document type is required'),
});

export default function UploadDocument() {
  const settings = useSettingsContext();
  const router = useRouter();
  const { vendor } = useAuthContext();
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultValues = useMemo(
    () => ({
      doc_type: '',
      csp_code: '',
    }),
    []
  );

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control, setValue, watch } = methods;

  const onSubmit = handleSubmit(async (data) => {
    if (!files[0]?.preview) {
      enqueueSnackbar('Please Select Image', { variant: 'error' });
      return false;
    }
    const payload = {
      type: data.doc_type,
      image: files[0],
      id: Date.now(),
    };

    setSelected((prevSelected) => [...prevSelected, payload]);
    setFiles([]);

    const formData = new FormData();
    formData.append('doc_type', data.doc_type);
    formData.append('csp_code', vendor);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };

    for (let file of files) {
      try {
        const compressedFile = await imageCompression(file, options);
        formData.append('file', compressedFile);
      } catch (error) {
        console.error('Error compressing file:', error);
        formData.append('file', file);
      }
    }
  });

  const docTypeOption = [
    { label: 'Milling Unit Photo', key: 'milling_unit_photo' },
    { label: 'Milling Unit Video', key: 'milling_unit_video' },
  ];
  files[0]?.preview ? onSubmit() : null;
  const handleDropMultiFile = useCallback(
    (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((newFile) =>
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        ),
      ]);
    },
    [files]
  );

  const handleRemoveFile = (inputFile) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };
  const handleAllSubmit = useCallback(async (data) => {
    setLoading(true);
    const formDataList = await Promise.all(
      data.map((value) => {
        const formData = new FormData();
        formData.append('file', value?.image);
        formData.append('doc_type', value?.type);
        formData.append('csp_code', vendor?.csp_code);
        return formData;
      })
    );
    try {
      const responses = await Promise.all(
        formDataList.map((formData) =>
          axios.post(
            'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
        )
      );
      if (responses) {
        enqueueSnackbar('Your Document Uploaded');
        router.push(paths.dashboard.document.document_list);
      } else {
        enqueueSnackbar('Failed to Upload',{variant:"error"});
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      enqueueSnackbar('Failed to Upload',{variant:"error"});
    }
  }, []);
  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = selected.filter((row) => row.id !== id);
      enqueueSnackbar('Delete success!');
      setSelected(deleteRow);
    },
    [enqueueSnackbar, selected]
  );
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  };

  const renderDetails = (
    <>
      <Helmet>
        <title>Dashboard | Upload Documents</title>
      </Helmet>
      <Card>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Stack>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <Controller
                name="doc_type"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl fullWidth error={!!fieldState.error}>
                    <InputLabel>Document Type</InputLabel>
                    <Select {...field} label="Document Type" disabled={selected.length >= 5}>
                      {docTypeOption.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {fieldState.error && (
                      <Typography variant="caption" color="error">
                        {fieldState.error.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Box>

            <Box sx={{ position: 'relative' }}>
              <Upload
                sx={{
                  height: '100px',
                  width: '100px',
                  position: 'absolute',
                  right: '0%',
                  zIndex: '200',
                  opacity: '0',
                }}
                disabled={selected.length >= 5}
                multiple
                onDrop={handleDropMultiFile}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '20px' }}>
                <Button style={{ cursor: 'pointer', maxWidth: '200px' }} variant="contained">
                  Choose File
                </Button>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </>
  );

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        {loading ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}
          >
            <LoadingScreen sx={{ margin: 'auto' }} />
          </Box>
        ) : (
          <>
            <Typography variant="h4">Upload Documents</Typography>
            <Box
              sx={{
                mt: 5,
                width: 1,
                height: 320,
                borderRadius: 2,
              }}
            >
              <FormProvider methods={methods} onSubmit={onSubmit}>
                {renderDetails}
              </FormProvider>
              {selected[0]?.type && (
                <UploadDocumentListView
                  data={selected}
                  handleDeleteRow={handleDeleteRow}
                  handleAllSubmit={handleAllSubmit}
                />
              )}
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
