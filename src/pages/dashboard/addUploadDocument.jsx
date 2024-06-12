import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSettingsContext } from 'src/components/settings';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import FormProvider from 'src/components/hook-form/form-provider';
import axios from 'axios';
import { Upload } from 'src/components/upload';
import { Helmet } from 'react-helmet-async';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import imageCompression from 'browser-image-compression';
// ----------------------------------------------------------------------
export default function UploadDocument() {
  const settings = useSettingsContext();
  const [vendorCode, setVendorCode] = useState('');
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const notify = () => toast.success('Documents Uploaded');
  const notifyError = () => toast.error('Failed to Upload');
  const defaultValues = useMemo(
    () => ({
      doc_type: '',
      csp_code: '',
    }),
    []
  );
  const methods = useForm({
    defaultValues,
  });
  const { handleSubmit, control } = methods;
  const storedVendorCode = sessionStorage.getItem('vendor');
  useEffect(() => {
    setVendorCode(storedVendorCode || '');
  }, []);
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('doc_type', data.doc_type);
    formData.append('csp_code', vendorCode);
    files.forEach((file) => {
      formData.append('file', file);
    });
    try {
      const response = await axios.post(
        'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response) {
        enqueueSnackbar('Documents Added successfully!');
        router.push(paths.dashboard.document.document_list);
      } else {
        console.log('Error');
        enqueueSnackbar('Documents Not Added!');
      }
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  });
  const docTypeOption = [
    { label: 'Aadhar', key: 'aadhar' },
    { label: 'Certificates', key: 'certificates' },
    { label: 'Gst Number', key: 'gst_number' },
    { label: 'Pan Number', key: 'pan_number' },
  ];
  // const handleDropMultiFile = useCallback(
  //   async (acceptedFiles) => {
  //     const compressedFiles = await Promise.all(
  //       acceptedFiles.map(async (file) => {
  //         const options = {
  //           maxSizeMB: 1,
  //           maxWidthOrHeight: 1200,
  //           useWebWorker: true,
  //         };
  //         try {
  //           const compressedFile = await imageCompression(file, options);
  //           compressedFile.preview = URL.createObjectURL(compressedFile);
  //           return compressedFile;
  //         } catch (error) {
  //           console.error('Error compressing file:', error);
  //           return file;
  //         }
  //       })
  //     );
  //     setFiles([...files, ...compressedFiles]);
  //   },
  //   [files]
  // );
// const handleDropMultiFile = useCallback(
//   (acceptedFiles) => {
//     setFiles([
//       ...files,
//       ...acceptedFiles.map((newFile) =>
//         Object.assign(newFile, {
//           preview: URL.createObjectURL(newFile),
//         })
//       ),
//     ]);
//     console.log("Files : ",files);
//   },
//   [files]
//   );
  const handleDropMultiFile = useCallback(
    async (acceptedFiles) => {
      try {
        const options = {
          maxSizeMB: 0.3,
          maxWidthOrHeight: 1200,
          useWebWorker: true,
        };
        const compressedFiles = await Promise.all(
          acceptedFiles.map(async (file) => {
            try {
              return await imageCompression(file, options);
            } catch (compressionError) {
              console.error('Error compressing file:', compressionError);
              return file;
            }
          })
        );
        const updatedFiles = [
          ...files,
          ...compressedFiles.map((compressedFile) => ({
            ...compressedFile,
            preview: URL.createObjectURL(compressedFile),
          })),
        ];
        setFiles(updatedFiles);
      } catch (error) {
        console.error('Error processing files:', error);
      }
    },
    [files, setFiles]
  );
  const handleRemoveFile = (inputFile) => {
    const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
    setFiles(filesFiltered);
  };
  const handleRemoveAllFiles = () => {
    setFiles([]);
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
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel>Document Type</InputLabel>
                    <Select {...field} label="Document Type">
                      {docTypeOption.map((option) => (
                        <MenuItem key={option.key} value={option.key}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </Box>
            <Typography variant="subtitle2" sx={{ my: '10px' }}>
              Upload Your Document
            </Typography>
            {/* {files.length !== 0 && console.log('raam')} */}
            <Upload
              multiple
              accept={{
                'image/jpeg': [],
                'image/jpg': [],
                'image/png': [],
              }}
              thumbnail={true}
              files={files}
              onDrop={handleDropMultiFile}
              onRemove={handleRemoveFile}
              onRemoveAll={handleRemoveAllFiles}
              onUpload={onSubmit}
            />
          </Stack>
        </Stack>
      </Card>
    </>
  );
  return (
    <>
      <ToastContainer />
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
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
        </Box>
      </Container>
    </>
  );
}
