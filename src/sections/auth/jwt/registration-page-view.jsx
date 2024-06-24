import axios from 'axios';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box, Grid, Radio, Button, Typography, RadioGroup, FormControlLabel } from '@mui/material';

import FormProvider from 'src/components/hook-form/form-provider';
import { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import { paths } from '../../../routes/paths';
import { useRouter } from '../../../routes/hooks';

const RegistrationForm = ({ vendor_category }) => {
  const router = useRouter();
  const [stateOptions, setStateOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  const data1 = stateOptions.find((data) => data?.state_name === selectedState);
  const handleStateChange = (event, newValue) => {
    setSelectedState(newValue);
    methods.setValue('state', newValue);
  };
  const firmOptions = ['Partnership', 'Proprietary ', 'LLP', 'Public Limited', 'Other'];
  const modes = ['Retail outlet', 'Mobile van'];
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

  const millingTypeOptions = ['Dry', 'Wet', 'Both'];
  // const districtOptions = ['Amreli', 'Bhavanagar'];

  // const NewBlogSchema = Yup.object().shape({
  //   address: Yup.string().required('Society is required'),
  //   contact_person: Yup.string().required('Contact is required'),
  //   confirm_password: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .required('Confirm password is required'),
  //   password: Yup.string()
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .required('Confirm password is required'),
  //   // district: Yup.string().required('District is required'),
  //   gst_number: Yup.string().required('GST Number is required'),
  //   milling_type: Yup.string().required('Milling Type is required'),
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string().required('Email is required'),
  //   state: Yup.string().required('State is required'),
  //   branch: Yup.string().required('Branch is required'),
  //   pan_number: Yup.string().required('Pan Number is required'),
  //   pincode: Yup.string().required('Pincode is required'),
  //   phone_number: Yup.string().max(10).required('Phone Number is required'),
  // });

  const defaultValues = {
    name: '',
    category: '',
    milling_type: '',
    mil_dis_sub_roles: '',
    type_of_firm: '',
    contact_person: '',
    phone_number: '',
    email: '',
    password: '',
    confirm_password: '',
    address: '',
    state: '',
    district: '',
    procurement_area: '',
    branch: '',
    pincode: '',
    pan_number: '',
    gst_number: '',
    mode: '',
  };

  const methods = useForm({
    // resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (values) => {
    alert("hiiii")
    const payload = {
      name: values.name || '',
      category: vendor_category || '',
      milling_type: values.milling_type || '',
      mil_dis_sub_roles: values.mil_dis_sub_roles || '',
      type_of_firm: values.type_of_firm || '',
      contact_person: values.contact_person || '',
      phone_number: values.phone_number || '',
      email: values.email || '',
      password: values.password || '',
      confirm_password: values.confirm_password || '',
      address: values.address || '',
      state: values.state || '',
      district: values.district || '',
      procurement_area: values.procurement_area || '',
      branch: values.branch || '',
      pincode: values.pincode || '',
      pan_number: values.pan_number || '',
      gst_number: values.gst_number || '',
      mode: '',
    };
    
    console.log(payload, 'payload');
    axios
      .post(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp`, payload)
      .then((res) => {
        router.push(paths.auth.jwt.login);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Box p={5} className="registerForm" sx={{ backgroundColor: 'white', borderRadius: '10px' }}>
      <Typography variant="h5" gutterBottom className="heading">
        Basic Information
      </Typography>
      <FormProvider onSubmit={onSubmit} methods={methods}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField
              name="name"
              label={
                vendor_category === 'distributor' || vendor_category === 'miller_distributor'
                  ? 'Distributor Name'
                  : vendor_category === 'miller'
                    ? 'Milling Unit Name'
                    : 'Society Name'
              }
            />
          </Grid>
          {vendor_category === 'miller' && (
            <Grid item xs={12} sm={6} md={3}>
              <RHFAutocomplete
                name="milling_type"
                type="milling_type"
                label="Milling Type"
                placeholder="Choose Milling Type"
                fullWidth
                options={millingTypeOptions.map((option) => option)}
                getOptionLabel={(option) => option}
              />
            </Grid>
          )}

          {vendor_category !== 'society_cooperative' && (
            <Grid item xs={12} sm={3}>
              <RHFAutocomplete
                name="type_of_firm"
                label="Type of Firm"
                placeholder="Choose Your firm"
                fullWidth
                options={firmOptions.map((option) => option)}
                getOptionLabel={(option) => option}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField name="contact_person" label="Contact Person" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField name="phone_number" label="Phone Number" type="number" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField name="email" label="Email" type="email" />
          </Grid>
          {(vendor_category === 'distributor' || vendor_category === 'miller_distributor') && (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <RHFTextField name="area_of_Opration" label="Area of Opration" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <RHFTextField name="capacity" label="Capacity /day (MT)" />
              </Grid>

              <Grid item xs={12} sm={3}>
                <RHFAutocomplete
                  name="mode"
                  label="Mode of Sale"
                  placeholder="Choose mode of sale"
                  fullWidth
                  options={modes.map((option) => option)}
                  getOptionLabel={(option) => option}
                />
              </Grid>
            </>
          )}

          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField name="pan_number" label="PAN Number" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <RHFTextField name="gst_number" label="GST Number" />
          </Grid>
          {vendor_category === 'society_cooperative' && (
            <Grid item xs={12}>
              <RadioGroup row aria-label="vendor" name="mil_dis_sub_roles">
                <FormControlLabel
                  value="own_distribution_own_mill"
                  control={<Radio />}
                  label="Own Mill and Distribution"
                />
                <FormControlLabel
                  value="own_distribution_rent_mill"
                  control={<Radio />}
                  label="Own Distribution and Rent Mill"
                />
                <FormControlLabel
                  value="cooperative_rent_mill"
                  control={<Radio />}
                  label="Co-operative (Rent Mill)"
                />
              </RadioGroup>
            </Grid>
          )}
        </Grid>
        <Typography variant="h5" gutterBottom className="heading" mt={2}>
          {` ${
            vendor_category === 'distributor' || vendor_category === 'miller_distributor'
              ? 'Address of Proposed Distributor Premises'
              : vendor_category === 'miller'
                ? 'Address of Proposed Milling Unit Premises'
                : 'Address Information'
          }`}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RHFTextField name="address" label="Address" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RHFAutocomplete
              name="state"
              label="State"
              placeholder="Choose Your State"
              fullWidth
              options={stateOptions.map((option) => option?.state_name)}
              getOptionLabel={(option) => option}
              onChange={handleStateChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RHFAutocomplete
              name="district"
              label="District"
              placeholder="Choose Your District"
              fullWidth
              options={districtOptions.map((option) => option?.district)}
              getOptionLabel={(option) => option}
              disabled={!data1}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RHFTextField name="pincode" label="Pin Code" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RHFAutocomplete
              name="branch"
              label="Branch"
              placeholder="Choose Your Branch"
              fullWidth
              options={branchOptions.map((option) => option?.branch_name)}
              getOptionLabel={(option) => option}
              disabled={!data1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RHFTextField name="procurement_area" label="Procurement area" />
          </Grid>
        </Grid>
        <Typography variant="h5" gutterBottom className="heading" mt={2}>
          Password
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <RHFTextField type="password" name="password" label="Password" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <RHFTextField type="password" name="confirm_password" label="Confirm Password" />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button type="submit" variant="contained" color="primary">
            SUBMIT
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default RegistrationForm;
