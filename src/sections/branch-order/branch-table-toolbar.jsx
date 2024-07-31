import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

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
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { formHelperTextClasses } from '@mui/material/FormHelperText';
import { GridToolbarColumnsButton, GridToolbarExport, GridToolbarFilterButton } from '@mui/x-data-grid';

// ----------------------------------------------------------------------

export default function BranchTableToolbar({
                                                  filters,
                                                  onFilters,
                                                  //
                                             branchOptions,
                                                }) {

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onFilters('startDate', newValue);
    },
    [onFilters]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onFilters('endDate', newValue);
    },
    [onFilters]
  );

  const popover = usePopover();

  const handleFilterName = useCallback(
    (event) => {
      onFilters('name', event.target.value);
    },
    [onFilters],
  );
  const handleFilterCommodity = useCallback(
    (event) => {
      onFilters(
        'commodity',
        typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
    },
    [onFilters],
  );

  const handleFilterBranch = useCallback(
    (event) => {
      onFilters(
        'branch',
        typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
    },
    [onFilters],
  );
  const handleFilterStatus = useCallback(
    (event) => {
      onFilters(
        'status',
        typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value,
      );
    },
    [onFilters],
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

          <DatePicker
            label="Start date"
            value={filters.startDate}
            onChange={handleFilterStartDate}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
            sx={{
              maxWidth: { md: 200 },
            }}
          />

          <DatePicker
            label="End date"
            value={filters.endDate}
            onChange={handleFilterEndDate}
            slotProps={{
              textField: {
                fullWidth: true,
                // error: dateError,
                // helperText: dateError && 'End date must be later than start date',
              },
            }}
            sx={{
              maxWidth: { md: 200 },
              [`& .${formHelperTextClasses.root}`]: {
                position: { md: 'absolute' },
                bottom: { md: -40 },
              },
            }}
          />
          <TextField
            fullWidth
            value={filters.name}
            onChange={handleFilterName}
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }}/>
                </InputAdornment>
              ),
            }}
          />

          {/*<IconButton onClick={popover.onOpen}>*/}
          {/*  <Iconify icon="eva:more-vertical-fill" />*/}
          {/*</IconButton>*/}
        </Stack>
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>Commodity</InputLabel>

          <Select
            multiple
            value={filters.commodity}
            onChange={handleFilterCommodity}
            input={<OutlinedInput label="Commodity"/>}
            renderValue={(selected) => selected.map((value) => value).join(', ')}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {['Bharat Daal', 'Bharat Aata', 'Bharat Rice'].map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox disableRipple size="small" checked={filters.commodity.includes(option)}/>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/*<GridToolbarColumnsButton />*/}
        {/*<GridToolbarFilterButton />*/}
        {/*<GridToolbarExport />*/}

        {/*<FormControl*/}
        {/*  sx={{*/}
        {/*    flexShrink: 0,*/}
        {/*    width: { xs: 1, md: 200 },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <InputLabel>Status</InputLabel>*/}

        {/*  <Select*/}
        {/*    multiple*/}
        {/*    value={filters.status}*/}
        {/*    onChange={handleFilterStatus}*/}
        {/*    input={<OutlinedInput label="Status"/>}*/}
        {/*    renderValue={(selected) => selected.map((value) => value).join(', ')}*/}
        {/*    MenuProps={{*/}
        {/*      PaperProps: {*/}
        {/*        sx: { maxHeight: 240 },*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {['placed', 'declined', 'accepted'].map((option) => (*/}
        {/*      <MenuItem key={option} value={option}>*/}
        {/*        <Checkbox disableRipple size="small" checked={filters.status.includes(option)}/>*/}
        {/*        {option}*/}
        {/*      </MenuItem>*/}
        {/*    ))}*/}
        {/*  </Select>*/}
        {/*</FormControl>*/}

        {/*<FormControl*/}
        {/*  sx={{*/}
        {/*    flexShrink: 0,*/}
        {/*    width: { xs: 1, md: 200 },*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <InputLabel>Branch</InputLabel>*/}

        {/*  <Select*/}
        {/*    multiple*/}
        {/*    value={filters.branch}*/}
        {/*    onChange={handleFilterBranch}*/}
        {/*    input={<OutlinedInput label="Branch"/>}*/}
        {/*    renderValue={(selected) => selected.map((value) => value).join(', ')}*/}
        {/*    MenuProps={{*/}
        {/*      PaperProps: {*/}
        {/*        sx: { maxHeight: 240 },*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {branchOptions?.map((option) => (*/}
        {/*      <MenuItem key={option} value={option}>*/}
        {/*        <Checkbox disableRipple size="small" checked={filters.branch.includes(option)}/>*/}
        {/*        {option}*/}
        {/*      </MenuItem>*/}
        {/*    ))}*/}
        {/*  </Select>*/}
        {/*</FormControl>*/}


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
          <Iconify icon="solar:printer-minimalistic-bold"/>
          Print
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:import-bold"/>
          Import
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold"/>
          Export
        </MenuItem>
      </CustomPopover>
    </>
  );
}

BranchTableToolbar.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  roleOptions: PropTypes.array,
};
