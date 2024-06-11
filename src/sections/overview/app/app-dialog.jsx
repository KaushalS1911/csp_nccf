import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useEffect, useMemo, useState } from 'react';
import { useAuthContext } from 'src/auth/hooks';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Box, Stack } from '@mui/system';
import { RHFAutocomplete, RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/form-provider';
import { enqueueSnackbar } from 'notistack';
// ----------------------------------------------------------------------
export default function AppDialog({ dialogOpen, setDialogOpen, editId }) {
  const [commodities, setCommodities] = useState([]);
  const [orderList,setOrderList] = useState([])
  const { vendor } = useAuthContext();

  function fetchAllOrders() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${vendor.csp_code}/orders`).then((res) => {
      setOrderList(res.data?.data);
    });
  }
  useEffect(() => {
    fetchCommodities();
    fetchAllOrders()
  }, []);
  function fetchCommodities() {
    axios
      .get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/commodity`)
      .then((res) => {
        setCommodities(res.data?.data);
      });
  }
  const defaultValues = {
    csp_code: vendor.csp_code,
    commodity: '',
    quantity: '',
  };
  const methods = useForm({
    defaultValues,
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    setDialogOpen(false);
    const payload = {
      ...data,
      csp_code: vendor.csp_code,
      mode: 'test',
      status: '0',
    };
    try {
      const response = await axios.post(
        'http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/create_order',
        payload
      );
      if (response.data.status == '201') {
        enqueueSnackbar('Order added successfully!');
      } else if (response.data.status == '400') {
      }
    } catch (error) {
      console.error('Order creation error:', error);
    }
  };
  return (
    <>
      <Dialog open={dialogOpen} fullWidth={true} maxWidth={'md'} onClose={() => setDialogOpen(false)} >
       <Box sx={{py: 5, px: 3}}>
       <DialogTitle>Add Order</DialogTitle>
        <DialogContent maxWidth={'lg '}>
          <FormProvider methods={methods}>
                  <Box mb={2}>
                    <RHFAutocomplete
                      name="commodity"
                      type="commodity"
                      label="Commodity"
                      placeholder="Choose Commodity"
                      fullWidth
                      options={commodities.map((option) => option?.commodity_name)}
                      getOptionLabel={(option) => option}
                    />
                  </Box>
                  <Box>
                    <RHFTextField name="quantity" label="Quantity" fullWidth />
                  </Box>
            <DialogActions>
              <Button onClick={() => setDialogOpen(false)} variant="outlined" color="inherit">
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                Add
              </Button>
            </DialogActions>
          </FormProvider>
        </DialogContent>
       </Box>
      </Dialog>
    </>
  );
}
