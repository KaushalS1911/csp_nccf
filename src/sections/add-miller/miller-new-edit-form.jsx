import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import {
  _tags,
  PRODUCT_SIZE_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_COLOR_NAME_OPTIONS,
  PRODUCT_CATEGORY_GROUP_OPTIONS,
} from 'src/_mock';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, {
  RHFSelect,
  RHFEditor,
  RHFUpload,
  RHFSwitch,
  RHFTextField,
  RHFMultiSelect,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from 'src/components/hook-form';
import axios from 'axios';
import UploadDocument from 'src/pages/dashboard/addUploadDocument';

// ----------------------------------------------------------------------

export default function MillerNewEditForm({ currentProduct }) {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { enqueueSnackbar } = useSnackbar();

  const [includeTaxes, setIncludeTaxes] = useState(false);
  const millingTypeOptions = ['Dry', 'Wet', 'Both'];
  const firmOptions = ['Partnership', 'Property', 'LLP', 'Public Limited', 'Other'];
  const modes = ['Retail outlet', 'Mobile van'];

  const [stateOptions, setStateOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const mil_dis_sub_roles = 'Own Distribution and Rent Mill';
  const data1 = stateOptions.find((data) => data?.state_name === selectedState);
  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue);
    methods.setValue('state', newValue);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (data1 && data1.state_id) {
      fetchBranches(data1.state_id);
      fetchDistrict(data1.state_id);
    }
  }, [data1]);

  function fetchStates() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state`).then((res) => {
      setStateOptions(res?.data?.data);
    });
  }

  function fetchBranches(stateId) {
    axios
      .get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${stateId}/branch`)
      .then((res) => {
        setBranchOptions(res?.data?.data);
      });
  }
  function fetchDistrict(stateId) {
    axios
      .get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/state/${stateId}/district`)
      .then((res) => {
        setDistrictOptions(res?.data?.data);
      });
  }
  const NewProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    images: Yup.array().min(1, 'Images is required'),
    tags: Yup.array().min(2, 'Must have at least 2 tags'),
    category: Yup.string().required('Category is required'),
    price: Yup.number().moreThan(0, 'Price should not be $0.00'),
    description: Yup.string().required('Description is required'),
    // not required
    taxes: Yup.number(),
    newLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
    saleLabel: Yup.object().shape({
      enabled: Yup.boolean(),
      content: Yup.string(),
    }),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      description: currentProduct?.description || '',
      subDescription: currentProduct?.subDescription || '',
      images: currentProduct?.images || [],
      //
      code: currentProduct?.code || '',
      sku: currentProduct?.sku || '',
      price: currentProduct?.price || 0,
      quantity: currentProduct?.quantity || 0,
      priceSale: currentProduct?.priceSale || 0,
      tags: currentProduct?.tags || [],
      taxes: currentProduct?.taxes || 0,
      gender: currentProduct?.gender || '',
      category: currentProduct?.category || '',
      colors: currentProduct?.colors || [],
      sizes: currentProduct?.sizes || [],
      newLabel: currentProduct?.newLabel || { enabled: false, content: '' },
      saleLabel: currentProduct?.saleLabel || { enabled: false, content: '' },
    }),
    [currentProduct]
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (currentProduct) {
      reset(defaultValues);
    }
  }, [currentProduct, defaultValues, reset]);

  useEffect(() => {
    if (includeTaxes) {
      setValue('taxes', 0);
    } else {
      setValue('taxes', currentProduct?.taxes || 0);
    }
  }, [currentProduct?.taxes, includeTaxes, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentProduct ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.product.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const files = values.images || [];

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      setValue('images', [...files, ...newFiles], { shouldValidate: true });
    },
    [setValue, values.images]
  );

  const handleRemoveFile = useCallback(
    (inputFile) => {
      const filtered = values.images && values.images?.filter((file) => file !== inputFile);
      setValue('images', filtered);
    },
    [setValue, values.images]
  );

  const handleRemoveAllFiles = useCallback(() => {
    setValue('images', []);
  }, [setValue]);

  const handleChangeIncludeTaxes = useCallback((event) => {
    setIncludeTaxes(event.target.checked);
  }, []);

  const renderDetails = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Details" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="name" label="Product Name" />

            <RHFTextField name="subDescription" label="Sub Description" multiline rows={4} />

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Content</Typography>
              <RHFEditor simple name="description" />
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="subtitle2">Images</Typography>
              <RHFUpload
                multiple
                thumbnail
                name="images"
                maxSize={3145728}
                onDrop={handleDrop}
                onRemove={handleRemoveFile}
                onRemoveAll={handleRemoveAllFiles}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {mil_dis_sub_roles == 'Own Mill and Distriubution'
              ? 'Miller '
              : mil_dis_sub_roles == 'Own Distribution and Rent Mill'
                ? `Distributor's `
                : 'Society '}
            Personal Info
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional functions and attributes...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField
                name="name"
                label={
                  mil_dis_sub_roles == 'Own Distribution and Rent Mill'
                    ? 'Distributor Name'
                    : mil_dis_sub_roles == 'Own Mill and Distriubution'
                      ? 'Milling Unit Name'
                      : 'Society Name'
                }
              />
              {mil_dis_sub_roles === 'Own Mill and Distriubution' && (
                <RHFAutocomplete
                  name="milling_type"
                  type="milling_type"
                  label="Milling Type"
                  placeholder="Choose Milling Type"
                  fullWidth
                  options={millingTypeOptions.map((option) => option)}
                  getOptionLabel={(option) => option}
                />
              )}

              {mil_dis_sub_roles != 'Co-operative (Rent Mill)' && (
                <>
                  <RHFTextField name="code" label="Procurement area" />
                  <RHFAutocomplete
                    name="type_of_firm"
                    label="Type of Firm"
                    placeholder="Choose Your firm"
                    fullWidth
                    options={firmOptions.map((option) => option)}
                    getOptionLabel={(option) => option}
                  />
                </>
              )}
              {mil_dis_sub_roles === 'Own Distribution and Rent Mill' && (
                <>
                  <RHFTextField name="contact_person" label="Area of opration " />
                  <RHFTextField name="contact_person" label="Capacity /day (MT)" />
                  <RHFAutocomplete
                    name="mode_of_sale"
                    label="Mode of Sale"
                    placeholder="Choose mode of sale"
                    fullWidth
                    options={modes.map((option) => option)}
                    getOptionLabel={(option) => option}
                  />
                </>
              )}
              <RHFTextField name="contact_person" label="Contact Person" />
              <RHFTextField name="phone_number" label="Phone Number" />
              <RHFTextField name="email" label="Email" />
              <RHFTextField name="pan_number" label="PAN Number" />
              <RHFTextField name="gst_number" label="GST Number" />
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );
  const addressInfo = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {mil_dis_sub_roles == 'Own Mill and Distriubution'
              ? 'Miller '
              : mil_dis_sub_roles == 'Own Distribution and Rent Mill'
                ? 'Distribution '
                : 'Society '}
            Address
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Additional address information...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <Card>
          {!mdUp && <CardHeader title="Properties" />}

          <Stack spacing={3} sx={{ p: 3 }}>
            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <RHFTextField name="address" label="Address" />

              <RHFAutocomplete
                name="state"
                label="State"
                placeholder="Choose Your State"
                fullWidth
                options={stateOptions.map((option) => option?.state_name)}
                getOptionLabel={(option) => option}
                onChange={handleStateChange}
              />
              <RHFAutocomplete
                name="branch"
                label="Branch"
                placeholder="Choose Your Branch"
                fullWidth
                options={branchOptions.map((option) => option?.branch_name)}
                getOptionLabel={(option) => option}
                disabled={!data1}
              />
              <RHFAutocomplete
                name="district"
                label="District"
                placeholder="Choose Your District"
                fullWidth
                options={districtOptions.map((option) => option?.district)}
                getOptionLabel={(option) => option}
                disabled={!data1}
              />
              <RHFTextField name="pincode" label="Pin Code" />
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );
  const uploadDocument = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Upload Document
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Upload document information...
          </Typography>
        </Grid>
      )}

      <Grid xs={12} md={8}>
        <UploadDocument container={true} />
      </Grid>
    </>
  );

  // const renderPricing = (
  //   <>
  //     {mdUp && (
  //       <Grid md={4}>
  //         <Typography variant="h6" sx={{ mb: 0.5 }}>
  //           Pricing
  //         </Typography>
  //         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //           Price related inputs
  //         </Typography>
  //       </Grid>
  //     )}

  //     <Grid xs={12} md={8}>
  //       <Card>
  //         {!mdUp && <CardHeader title="Pricing" />}

  //         <Stack spacing={3} sx={{ p: 3 }}>
  //           <RHFTextField
  //             name="price"
  //             label="Regular Price"
  //             placeholder="0.00"
  //             type="number"
  //             InputLabelProps={{ shrink: true }}
  //             InputProps={{
  //               startAdornment: (
  //                 <InputAdornment position="start">
  //                   <Box component="span" sx={{ color: 'text.disabled' }}>
  //                     $
  //                   </Box>
  //                 </InputAdornment>
  //               ),
  //             }}
  //           />

  //           <RHFTextField
  //             name="priceSale"
  //             label="Sale Price"
  //             placeholder="0.00"
  //             type="number"
  //             InputLabelProps={{ shrink: true }}
  //             InputProps={{
  //               startAdornment: (
  //                 <InputAdornment position="start">
  //                   <Box component="span" sx={{ color: 'text.disabled' }}>
  //                     $
  //                   </Box>
  //                 </InputAdornment>
  //               ),
  //             }}
  //           />

  //           <FormControlLabel
  //             control={<Switch checked={includeTaxes} onChange={handleChangeIncludeTaxes} />}
  //             label="Price includes taxes"
  //           />

  //           {!includeTaxes && (
  //             <RHFTextField
  //               name="taxes"
  //               label="Tax (%)"
  //               placeholder="0.00"
  //               type="number"
  //               InputLabelProps={{ shrink: true }}
  //               InputProps={{
  //                 startAdornment: (
  //                   <InputAdornment position="start">
  //                     <Box component="span" sx={{ color: 'text.disabled' }}>
  //                       %
  //                     </Box>
  //                   </InputAdornment>
  //                 ),
  //               }}
  //             />
  //           )}
  //         </Stack>
  //       </Card>
  //     </Grid>
  //   </>
  // );

  // const renderActions = (
  //   <>
  //     {mdUp && <Grid md={4} />}
  //     <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
  //       <FormControlLabel
  //         control={<Switch defaultChecked />}
  //         label="Publish"
  //         sx={{ flexGrow: 1, pl: 3 }}
  //       />

  //       <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
  //         {!currentProduct ? 'Create Product' : 'Save Changes'}
  //       </LoadingButton>
  //     </Grid>
  //   </>
  // );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* {renderDetails} */}
        {renderProperties}
        {addressInfo}
        {uploadDocument}
        {/* {renderPricing} */}
        {/* {renderActions} */}
      </Grid>
    </FormProvider>
  );
}

MillerNewEditForm.propTypes = {
  currentProduct: PropTypes.object,
};
