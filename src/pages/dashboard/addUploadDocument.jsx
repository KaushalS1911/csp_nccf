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

export default function UploadDocument({ container }) {
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

    for (let file of files) {
      try {
        formData.append('file', file);
      } catch (error) {
        console.error('Error compressing file:', error);
        formData.append('file', file);
      }
    }
  });
  const otherOption = [
    { label: 'Aadhar', key: 'Aadhar' },
    { label: 'Certificates', key: 'certificates' },
    { label: 'Gst Number', key: 'gst_number' },
    { label: 'Pan Number', key: 'pan_number' },
  ];
  const Cooperatives = [
    {
      label: 'Company profile with ownership details (list of Directors/ partners etc.)',
      key: 'Company_profile_with_ownership_details',
    },
    {
      label: 'Proposal letter from the firm/Expression of interest ( On letter Head)',
      key: 'Proposal_letter_from_the_firm/Expression_of_interest',
    },
    { label: 'Registration Certificate', key: 'registration_certificate' },
    {
      label: 'Affidavit in the prescribed format ( 100 Rs Stamp)',
      key: 'Affidavit_in_the_prescribed_format',
    },
    {
      label: 'Audited Accounts for the last 3 years',
      key: 'Audited_accounts_for_the_last_3_years',
    },
    {
      label: 'Income Tax Return for last financial year',
      key: 'Income_tax_return_for_last_financial_year',
    },
    { label: 'Copy of PAN', key: 'Copy_of_PAN' },
    {
      label: 'Copy of G.S.T./VAT/ Sales Tax Registration Certificate',
      key: 'Copy_of_G.S.T./VAT/_Sales_Tax_Registration_Certificate',
    },
    { label: 'Copy of Latest Trade License', key: 'Copy_of_Latest_Trade_License' },
    {
      label: 'Municipal/Property Tax Receipt ( If Any)',
      key: 'Municipal/Property_Tax_Receipt_( If Any)',
    },
    { label: 'FSSAI license', key: 'FSSAI_license' },
    {
      label: 'Undertaking in prescribed format ( On letter Head )',
      key: 'Undertaking_in_prescribed_format_( On letter Head )',
    },
    {
      label: 'CSP agreement in prescribed format(1000 Rs Stamp)',
      key: 'CSP_agreement_in_prescribed_format(1000 Rs Stamp)',
    },
    {
      label: 'Distributors/Retail outlets details ( Hard copy / Excel Format)',
      key: 'Distributors/Retail_outlets_details_( Hard copy / Excel Format)',
    },
    { label: 'Cancelled Cheque', key: 'Cancelled_Cheque' },
  ];
  const docTypeOption =
    vendor?.mil_dis_sub_roles === 'cooperative_rent_mill' ? Cooperatives : otherOption;

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
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };

    // const formDataList = await Promise.all(
    //   data.map((value) => {
    //     const formData = new FormData();
    //     formData.append('file', value?.image);
    //     formData.append('doc_type', value?.type);
    //     formData.append('csp_code', vendor?.csp_code);
    //     return formData;
    //   })
    //   );
    const formDataList = await Promise.all(
      data.map(async (value) => {
        const formData = new FormData();
        const compressedFile = await imageCompression(value?.image, options);
        console.log(compressedFile, 'fileCompress');
        formData.append('file', compressedFile);
        // formData.append('file', value?.image);
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
        setLoading(false);
      } else {
        enqueueSnackbar('Failed to Upload');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      enqueueSnackbar('Failed to Upload');
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
                md: container ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
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
                accept={{
                  'image/jpeg': [],
                  'image/jpg': [],
                  'image/png': [],
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
      {container ? (
        <>
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '80vh',
              }}
            >
              <LoadingScreen sx={{ margin: 'auto' }} />
            </Box>
          ) : (
            <>
              {!container && <Typography variant="h4">Upload Documents</Typography>}
              <Box
                sx={{
                  mt: 0,
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
                    container={container}
                    handleDeleteRow={handleDeleteRow}
                    handleAllSubmit={handleAllSubmit}
                  />
                )}
              </Box>
            </>
          )}
        </>
      ) : (
        <>
          <Container maxWidth={settings.themeStretch ? false : 'xl'}>
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '80vh',
                }}
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
      )}
    </>
  );
}
