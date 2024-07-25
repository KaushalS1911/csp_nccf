import PropTypes from 'prop-types';
import { useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function DocumentTableToolbar({
  filters,
  onFilters,
  //
  document,
  roleOptions,
}) {
  const typeOptions =[
    { label: 'Registration Certificate', key: 'registration_certificate' },
    { label: 'Undertaking', key: 'undertaking' },
    { label: 'Audited Accounts', key: 'audited_accounts' },
    { label: 'Income Tax', key: 'income_tax' },
    { label: 'PAN', key: 'pan' },
    { label: 'GST', key: 'gst' },
    { label: 'Sale Registration', key: 'sale_registration' },
    { label: 'Industrial Licence', key: 'industrial_licence' },
    { label: 'Power Bills', key: 'power_bills' },
    { label: 'Pollution Certificates', key: 'pollution_certificates' },
    { label: 'Municipal Property Tax', key: 'municipal_property_tax' },
    { label: 'FSSAI License', key: 'FSSAI_license' },
    { label: 'Photographs of Unit', key: 'photographs_of_unit' }
  ]
  const popover = usePopover();

  const handleFilterName = useCallback(
    (event) => {
      onFilters('name', event.target.value);
    },
    [onFilters]
  );

  const handleFilterType = useCallback(
    (event) => {
      onFilters(
        'type',
        typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value
      );
    },
    [onFilters]
  );

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{
          xs: 'column',
          md: 'row',
        }}
        sx={{
          p: 2.5,
          pr: 2.5,
        }}
      >


        <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
          <TextField
            fullWidth
            value={filters.name}
            onChange={handleFilterName}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />

          {/*<IconButton onClick={popover.onOpen}>*/}
          {/*  <Iconify icon="eva:more-vertical-fill" />*/}
          {/*</IconButton>*/}
        </Stack>
        {document && <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Type</InputLabel>

          <Select
            multiple
            value={filters.type}
            onChange={handleFilterType}
            input={<OutlinedInput label="Type"/>}
            renderValue={(selected) => selected.map((value) => value).join(', ')}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {typeOptions.map((option) => (
              <MenuItem key={option} value={option.key}>
                <Checkbox disableRipple size="small" checked={filters.type.includes(option.key)}/>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>}
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:printer-minimalistic-bold" />
          Print
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:import-bold" />
          Import
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          Export
        </MenuItem>
      </CustomPopover>
    </>
  );
}

DocumentTableToolbar.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
};
