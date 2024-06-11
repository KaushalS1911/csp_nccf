import React, { useState, useCallback, useEffect } from 'react';
import { useSnackbar } from 'src/components/snackbar';
import { useSettingsContext } from 'src/components/settings';
import { useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import {
  useTable,
  emptyRows,
  TableNoData,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import UserTableRow from '../user-table-row';
import UserTableToolbar from '../user-table-toolbar';
import UserTableFiltersResult from '../user-table-filters-result';
import {
  Container,
  Card,
  Table,
  TableBody,
  TableContainer,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import { ConfirmDialog } from 'src/components/custom-dialog';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Scrollbar from 'src/components/scrollbar';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { _commodities, _orderStatus, _roles, USER_STATUS_OPTIONS } from 'src/_mock';
import isEqual from 'lodash/isEqual';
import AppDialog from 'src/sections/overview/app/app-dialog';
import EditOrderDialog from '../../../sections/overview/app/edit-order-dialog';
// ----------------------------------------------------------------------
const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...USER_STATUS_OPTIONS];
const TABLE_HEAD = [
  { id: 'srNo', label: 'Sr No', width: 100 },
  { id: 'commodity', label: 'Commodity', width: 200 },
  { id: 'quantity', label: 'Quantity', width: 200 },
  { id: 'created_at', label: 'Date', width: 180 },
  { id: 'status', label: 'Status', width: 100 },
  { id: '', width: 88 },
];
const defaultFilters = {
  name: '',
  commodity: [],
  order_status: [],
  status: 'all',
};
// ----------------------------------------------------------------------
export default function UserListView({ tableData: initialTableData }) {
  const { enqueueSnackbar } = useSnackbar();
  const settings = useSettingsContext();
  const router = useRouter();
  const confirm = useBoolean();
  const table = useTable();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const [edit,setEdit] = useState('');
  const [tableData, setTableData] = useState(initialTableData);
  useEffect(() => {
    setTableData(initialTableData);
  }, [initialTableData]);
  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });
  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );
  const denseHeight = table.dense ? 56 : 76;
  const canReset = !isEqual(defaultFilters, filters);
  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;
  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );
  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);
  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      enqueueSnackbar('Delete success!');
      setTableData(deleteRow);
      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, enqueueSnackbar, table, tableData]
  );
  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    enqueueSnackbar('Delete success!');
    setTableData(deleteRows);
    table.onUpdatePageDeleteRows({
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, enqueueSnackbar, table, tableData]);
  const handleEditRow = useCallback(
    (id) => {
      setEditDialogOpen(true)
    },
    [router]
  );
  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );
  const handleAddOrder = useCallback(
    (newOrder) => {
      setTableData((prevData) => [...prevData, newOrder]);
    },
    [enqueueSnackbar]
  );
  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xxl'}>
        <CustomBreadcrumbs
          heading="Orders"
          links={[{ name: '' }]}
          action={
            <Button
              component={RouterLink}
              // href={paths.dashboard.orders}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={() => {
                setDialogOpen(true),
                  handleAddOrder({
                    id: String(Date.now()),
                    srNo: String(tableData.length + 1),
                    commodity: 'New Commodity',
                    created_at: new Date().toISOString(),
                    status: 'placed',
                  });
              }}
            >
              Add Order
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        />
        <Card>
          <UserTableToolbar filters={filters} onFilters={handleFilters} commodityOptions={_commodities} orderStatusOptions={_orderStatus}/>
          {canReset && (
            <UserTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              onResetFilters={handleResetFilters}
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={true}
              numSelected={table.selected.length}
              rowCount={dataFiltered.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  dataFiltered.map((row) => row.id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />
            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={dataFiltered.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      dataFiltered.map((row) => row.id)
                    )
                  }
                />
                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row, index) => (
                      <UserTableRow
                        key={row.id}
                        row={{ ...row, index }}
                        selected={table.selected.includes(row.id)}
                        onSelectRow={() => table.onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                      />
                    ))}
                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />
                  <TableNoData isNotFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
            <TablePaginationCustom
              count={dataFiltered.length}
              page={table.page}
              rowsPerPage={table.rowsPerPage}
              onPageChange={table.onChangePage}
              onRowsPerPageChange={table.onChangeRowsPerPage}
              dense={table.dense}
              onChangeDense={table.onChangeDense}
            />
          </TableContainer>
        </Card>
      </Container>
      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure you want to delete?"
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
      <AppDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} editId={edit}/>
      <EditOrderDialog editDialogOpen={editDialogOpen} setEditDialogOpen={setEditDialogOpen} editId={edit}/>
    </>
  );
}
// ----------------------------------------------------------------------
function applyFilter({ inputData, comparator, filters }) {
  const { name, status, commodity, order_status } = filters;
  const stabilizedThis = inputData.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  inputData = stabilizedThis.map((el) => el[0]);
  if (name) {
    inputData = inputData.filter((user) =>
      user.commodity.toLowerCase().includes(name.toLowerCase())
    );
  }
  if (status !== 'all') {
    inputData = inputData.filter((user) => user.status === status);
  }
  if (commodity.length) {
    inputData = inputData.filter((user) => commodity.includes(user.commodity));
  }
  if (order_status.length) {
    inputData = inputData.filter((user) => order_status.includes(user.nccf_order_status));
  }
  return inputData;
}
