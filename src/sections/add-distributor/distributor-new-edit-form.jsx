import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useEffect, useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import axios from 'axios';
import { paths } from '../../routes/paths';
import { useRouter } from '../../routes/hooks';
import log from 'eslint-plugin-react/lib/util/log';
import { useAuthContext } from '../../auth/hooks';
import { useResponsive } from '../../hooks/use-responsive';

// ----------------------------------------------------------------------

export default function DistributorNewEditForm({ currentProduct }) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const {vendor} = useAuthContext()

  const [stateOptions, setStateOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  const data1 = stateOptions.find((data) => data?.state_name === selectedState);
  const mdUp = useResponsive('up', 'md');

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
    contact_person: Yup.string().required('Contact person is required'),
    phone_number: Yup.string().required('Phone number is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email'),
    pan_number: Yup.string().required('PAN number is required'),
    gst_number: Yup.string().required('GST number is required'),
    type_of_firm: Yup.string().required('Type of firm is required'),
    address: Yup.string().required('Address is required'),
    procurement_area: Yup.string().required('Procurement area is required'),
    state: Yup.string().required('State is required'),
    branch: Yup.string().required('Branch is required'),
    district: Yup.string().required('District is required'),
    pincode: Yup.string().required('Pincode is required').matches(/^[0-9]{6}$/, 'Pincode must be 6 digits'),
  });

  const defaultValues = useMemo(
    () => ({
      name: currentProduct?.name || '',
      contact_person: currentProduct?.contact_person || '',
      phone_number: currentProduct?.phone_number || '',
      email: currentProduct?.email || '',
      pan_number: currentProduct?.pan_number || '',
      gst_number: currentProduct?.gst_number || '',
      type_of_firm: currentProduct?.type_of_firm || '',
      address: currentProduct?.address || '',
      state: currentProduct?.state || '',
      branch: currentProduct?.branch || '',
      district: currentProduct?.district || '',
      procurement_area: currentProduct?.procurement_area || '',
      pincode: currentProduct?.pincode || '',
    }),
    [currentProduct],
  );

  const methods = useForm({
    resolver: yupResolver(NewProductSchema),
    defaultValues,
  });

  const { reset, watch, setValue, handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      axios
          .post(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/partner_onboarding`, { ...data,onboarder_csp_code:vendor?.csp_code ,category:vendor?.category,mode:"test"})
          .then((res) => {
            if (res?.data?.status == '201') {
              router.push(paths.dashboard.distributor.distributor_list);
              enqueueSnackbar('Distributor added successfully');
            }
          })
    }catch (err){
      console.log(err);
        enqueueSnackbar('Something went wrong', { variant: 'error' });

    }

  })

  const renderProperties = (
    <>
      {mdUp && (
        <Grid md={4}>
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            Personal
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Title, short description, image...
          </Typography>
        </Grid>
      )}
      <Grid xs={12} md={8}>
        <Card>
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
              <RHFTextField name="name" label="Distributor Name" />
              <RHFAutocomplete
                name="type_of_firm"
                label="Type of Firm"
                placeholder="Choose Your Firm"
                fullWidth
                options={['Partnership', 'Property', 'LLP', 'Public Limited', 'Other']}
                getOptionLabel={(option) => option}
              />
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
          Address Information
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Address,state,district...
          </Typography>
        </Grid>
      )}
      <Grid xs={12} md={8}>
        <Card>
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
              <RHFTextField name="procurement_area" label="Procurement Area" />
              <RHFTextField name="pincode" label="Pin Code" />
            </Box>
          </Stack>
        </Card>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderProperties}
        {addressInfo}
        <Grid xs={12}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained" type="submit">Submit</Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

DistributorNewEditForm.propTypes = {
  currentProduct: PropTypes.object,
};
