import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  Container,
  Card,
  CardContent,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../assets/images/header/logo1@4x.png';
import Link from '@mui/material/Link';
import { RouterLink } from '../../../routes/components';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useAuthContext } from '../../../auth/hooks';
import { useRouter, useSearchParams } from '../../../routes/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH_AFTER_LOGIN } from '../../../config-global';
import { paths } from '../../../routes/paths';
import { RHFTextField, RHFRadioGroup, RHFCheckbox } from '../../../components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';

export default function JwtLoginView() {
  const { login } = useAuthContext();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const searchParams = useSearchParams();
  const [society, setSociety] = useState('');
  const [subSociety, setSubSociety] = useState('');
  const returnTo = searchParams.get('returnTo');

  const LoginSchema = Yup.object().shape({
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    category: Yup.string().required('Vendor category is required'),
    sub: Yup.string().required('Sub category is required'),
  });
  const LoginSchema2 = Yup.object().shape({
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    category: Yup.string().required('Vendor category is required'),
  });

  const defaultValues = {
    phone_number: '',
    password: '',
    category: '',
    sub: '',
  };
const validation = society === "society" ? LoginSchema : LoginSchema2
  const methods = useForm({
    resolver: yupResolver(validation),
    defaultValues,
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = handleSubmit(async (data) => {

    try {
      await login?.({ ...data,category: society=="society" ?  subSociety : data.category });
      localStorage.setItem("login_type", "other-login");
    } catch (error) {
      console.error(error);
      reset();
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  return (
    <>
      <Container maxWidth="sm">
        <ToastContainer />
        <Box display="flex" justifyContent="center" alignItems="center" height={'100vh'}>
          <Card sx={{ mt: 5 }}>
            <CardContent
              sx={{
                pb: '70px !important',
                pt: '50px !important',
                px: '30px',
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                mb={3}
                sx={{ height: '130px', mb: '60px' }}
              >
                <img src={logo} alt="BootstrapBrain Logo" />
              </Box>
              <FormProvider onSubmit={onSubmit} methods={methods}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <RHFTextField name="phone_number" label="Phone Number" />
                  </Grid>
                  <Grid item xs={12} sx={{ my: '10px' }}>
                    <RHFTextField name="password" label="Password" type="password" />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Box>
                          <RadioGroup
                            {...field}
                            row
                            onChange={(event) => {
                              field.onChange(event);
                              setSociety(event.target.value);
                            }}
                          >
                            <FormControlLabel
                              value="miller"
                              control={<Radio />}
                              label="Miller"
                            />
                            <FormControlLabel
                              value="distributor"
                              control={<Radio />}
                              label="Distributor"
                            />
                            <FormControlLabel
                              value="miller_distributor"
                              control={<Radio />}
                              label="Miller + Distributor"
                            />
                            <FormControlLabel
                              value="society"
                              control={<Radio />}
                              label="Society/Co-operative"
                            />
                          </RadioGroup>
                          {errors.category && (
                            <Typography color="error">{errors.category.message}</Typography>
                          )}
                        </Box>
                      )}
                    />
</Grid>
                  {society == "society" &&  <Grid item xs={12}>
                    <Controller
                      name="sub"
                      control={control}
                      render={({ field }) => (
                    <Box>
                      <RadioGroup
                        {...field}
                        row
                        onChange={(event) => {
                          field.onChange(event);
                          setSubSociety(event.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="own_distribution_own_mill"
                          control={<Radio />}
                          label="Own both (Mill & Distribution)"
                        />
                        <FormControlLabel
                          value="own_distribution_rent_mill"
                          control={<Radio />}
                          label="Own Distribution (Rent Mill)"
                        />
                        <FormControlLabel
                          value="cooperative_rent_mill"
                          control={<Radio />}
                          label="Co-operative (Rent Mill)"
                        />
                      </RadioGroup>
                      {errors.sub && (
                        <Typography color="error">{errors.sub.message}</Typography>
                      )}
                    </Box>
                      )}
                    />
                  </Grid>}

                  <Grid item xs={12}>
                    <RHFCheckbox name="remember_me" label="Keep me logged in" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Sign In
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" sx={{ mt: 2, justifyContent: 'center' }} spacing={1}>
                      <Typography variant="subtitle2">Become NCCF CSP?</Typography>
                      <Link
                        component={RouterLink}
                        href={paths.auth.jwt.register}
                        variant="subtitle2"
                      >
                        Create an account
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </FormProvider>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
