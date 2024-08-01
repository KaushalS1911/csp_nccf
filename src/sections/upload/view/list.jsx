import isEqual from 'lodash/isEqual';
import React, { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {
  DataGrid,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { useGetProducts } from 'src/api/product';
import { _roles, handleDoctypeLabel, PRODUCT_STOCK_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import Label from '../../../components/label';
import { useGetCSP } from '../../../api/branch-csp';
import TableCell from '@mui/material/TableCell';
import axios from 'axios';
import { useAuthContext } from '../../../auth/hooks';
import DocumentTableToolbar from '../document-table-toolbar';
import DocumentTableFiltersResult from '../document-table-filters-result';
import moment from 'moment';
import Avatar from '@mui/material/Avatar';
import { getComparator } from '../../../components/table';
import { Box } from '@mui/system';
import Lightbox from "../../../components/lightbox"
import useLightBox from "../../../components/lightbox/use-light-box"
import { usePopover } from '../../../components/custom-popover';
// import BranchTableFiltersResult from '../branch-table-filters-result';

// import ProductTableFiltersResult from '../product-table-filters-result';
// import {
//   RenderCellStock,
//   RenderCellPrice,
//   RenderCellPublish,
//   RenderCellProduct,
//   RenderCellCreatedAt,
// } from '../product-table-row';
const PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

const defaultFilters = {
  name: '',
  role: [],
  type: [],
  status: 'all',

};

const HIDE_COLUMNS = {
  category: false,
};

const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

function DocumentList({ csp, document, miller, cspt, docu }) {
  const { enqueueSnackbar } = useSnackbar();

  const confirmRows = useBoolean();
  const { vendor } = useAuthContext();
  const router = useRouter();

  const settings = useSettingsContext();

  const [tableData, setTableData] = useState([]);

  const [filters, setFilters] = useState(defaultFilters);
  const [dataId, setDataId] = useState([]);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [branchOptions, setBranchOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState(HIDE_COLUMNS);
  const [images, setImages] = useState([]);
  const [b,setB] = useState('')
  const popover = usePopover();
  const dataFiltered = applyFilter({
    inputData: tableData,
    // comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  useEffect(() => {
    getAllDocument(b);
  }, []);

    const cspCode = vendor?.category === "branch" ? b : csp || vendor?.csp_code;

  useEffect(() => {
    dataFiltered?.forEach((data, index) => {
      setDataId((prevDataId) => [...prevDataId, { ...data, id: index + 1 }]);
    });
  }, [tableData]);
  // console.log(session,"jje");
  function getAllDocument() {
    // setLoading(true)

    axios
      .get(
        `http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${cspCode}/documents`,
      )
      .then((res) => {
        setTableData(res?.data?.data);
        // setLoading(false)
      })
      .catch((err) => console.error(err));
  }


  const canReset = !isEqual(defaultFilters, filters);

  const handleFilters = useCallback((name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);

      enqueueSnackbar('Delete success!');

      setTableData(deleteRow);
    },
    [enqueueSnackbar, tableData],
  );

  const slides = images.map((img) => ({
    src: img,
  }));
  const lightbox = useLightBox(slides);

  function handleViewDialog(url) {
    setImages([url]);
    popover.onClose()
    lightbox.onOpen(url);
  }
  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !selectedRowIds.includes(row.id));

    enqueueSnackbar('Delete success!');

    setTableData(deleteRows);
  }, [enqueueSnackbar, selectedRowIds, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      // router.push(paths.dashboard.product.edit(id));
    },
    [router],
  );
  const handleViewRow = useCallback(
    (code) => {
      router.push(paths.dashboard.distributor.distributor_document_view(code));
    },
    [router],
  );
  const handleDistributor = (code) => {
    router.push(paths.dashboard.distributor.distributor_view(code));

  };
  // const handleViewRow = useCallback(
  //   (id) => {
  //     // router.push(paths.dashboard.product.details(id));
  //   },
  //   [router]
  // );


  const columns = [
    // {
    //   field: 'category',
    //   headerName: 'Category',
    //   filterable: false,
    // },
    {
      field: 'id',
      headerName: '#',
      width: 142,
      // renderCell: (params) => <RenderCellCreatedAt params={params} />,
    },
    {
      field: 'object_url',
      headerName: 'Document Image',
      flex: 1,
      minWidth: 236,
      hideable: false,
      renderCell: (params) => {
        const object_url = params?.row?.object_url;
        const secondSlashIndex = object_url?.indexOf('/', 8);
        const secondPart = object_url?.substring(secondSlashIndex);
        const url = `http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/file${secondPart}`;

        return (
          <Box py={1}>
            <Avatar
              alt={object_url}
              src={url}
              sx={{ mr: 2, height: 46, width: 46, cursor: 'pointer' }}
              variant="rounded"
              onClick={() => handleViewDialog(url)}
            />
          </Box>
        );
      },
    },
    {
      field: 'doc_type',
      headerName: 'Document Type',
      width: 300,
      renderCell: (params) => <Box sx={{ whiteSpace: 'nowrap' }}>{handleDoctypeLabel(params.row.doc_type)}</Box>,
    },

    {
      field: 'uploaded_on',
      headerName: 'Date',
      width: 300,
      renderCell: (params) => <Box sx={{ whiteSpace: 'nowrap' }}>
        {moment(params.row.uploaded_on).format('DD/MM/YYYY')}
      </Box>,
    },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 160,
    //   renderCell: (params) => <Box>
    //     <Label
    //       variant="soft"
    //       color={'success'
    //         // (params.row.nccf_order_status === 'accepted' && 'success') ||
    //         // (params.row.nccf_order_status === 'placed' && 'warning') ||
    //         // (params.row.nccf_order_status === 'declined' && 'error') ||
    //         // 'default'
    //       }
    //     >
    //       {/*{params.row.nccf_order_status}*/}
    //       Completed
    //     </Label></Box>,
    // },
    {
      field: 'branch_approval_status',
      headerName: 'Status',
      renderCell: (params) => <TableCell sx={{px:0}}>
        <Label
          variant="soft"
          color={
            (params.row.branch_approval_status === '1' && 'success') ||
            (params.row.branch_approval_status === '0' && 'warning') ||
            // (params.row.branch_approval_status === 'declined' && 'error') ||
            'default'
          }
        >
          {params.row.branch_approval_status === "0" ? "Approval Pending" : "Approved"}
        </Label></TableCell>,
      width: 250,
      // renderCell: (params) => <RenderCellCreatedAt params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: ' ',
      align: 'right',
      headerAlign: 'right',
      width: 80,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [

        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold"/>}
          label="Edit"
          // onClick={() => handleEditRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold"/>}
          label="Delete"
          // onClick={() => {
          //   handleDeleteRow(params.row.id);
          // }}
          sx={{ color: 'error.main' }}
        />,
      ],
    },
  ];

  <Lightbox
    index={lightbox.selected}
    slides={slides}
    open={true}
    close={lightbox.onClose}
    onGetCurrentIndex={(index) => lightbox.setSelected(index)}
  />
  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('status', newValue);
    },
    [handleFilters],
  );
  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);
  return (
    <>
      <Container
        maxWidth={'xl'}

      >
        <CustomBreadcrumbs
          heading={miller ? 'Miller Documents' : cspt ? 'CSP Documents' : docu ? 'Documents' : `Distributor Documents`}
          links={[
            {
              name: 'Dashboard',
              href: paths.dashboard.root,
            },
            {
              name: miller ? 'Miller List' : cspt ? 'CSP List' : docu ? 'Document List' : 'Distributor List',
              href: miller ? paths.dashboard.miller.miller_list : cspt ? paths.dashboard.csp.csp_list : docu ? paths.dashboard.document.document_list : paths.dashboard.distributor.distributor_list,
            },

            {
              name: miller ? `Miller Documents` : cspt ? 'CSP Document' : docu ? 'List' : `Distributor Documents`,
            },
          ]}
          sx={{ mb: { xs: 3, md: 5 } }}
          action={
            (dataFiltered?.length == 0 && !cspt) &&
            <Button
              component={RouterLink}
              href={miller ? paths.dashboard.miller.document_upload : docu ? paths.dashboard.distributor.document_upload : paths.dashboard.distributor.document_upload}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line"/>}

            >
              Upload Document
            </Button>
          }
        />

        <Card
          sx={{
            height: 700,
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            flexDirection: { md: 'column' },
          }}
        >

          <DataGrid
            // checkboxSelection
            disableRowSelectionOnClick
            rows={dataId}
            columns={columns}
            // loading={cspLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
            // onRowSelectionModelChange={(newSelectionModel) => {
            //   setSelectedRowIds(newSelectionModel);
            // }}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer>
                    {/*<ProductTableToolbar*/}
                    {/*  filters={filters}*/}
                    {/*  onFilters={handleFilters}*/}
                    {/*  stockOptions={PRODUCT_STOCK_OPTIONS}*/}
                    {/*  publishOptions={PUBLISH_OPTIONS}*/}
                    {/*/>*/}
                    <Stack
                      spacing={1}
                      flexGrow={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      {!!selectedRowIds.length && (
                        <Button
                          size="small"
                          color="error"
                          startIcon={<Iconify icon="solar:trash-bin-trash-bold"/>}
                          onClick={confirmRows.onTrue}
                        >
                          Delete ({selectedRowIds.length})
                        </Button>
                      )}

                      <GridToolbarColumnsButton/>
                      <GridToolbarFilterButton/>
                      <GridToolbarExport/>
                    </Stack>
                    <DocumentTableToolbar filters={filters} onFilters={handleFilters} roleOptions={_roles} getAllDocument={getAllDocument} vendorData={vendor?.category === "branch" ? true : false } setB={setB}
                                          document={document}/>
                    {canReset && (
                      <DocumentTableFiltersResult
                        filters={filters}
                        onFilters={handleFilters}
                        onResetFilters={handleResetFilters}
                        results={dataFiltered.length}
                        sx={{ p: 2.5, pt: 0 }}
                      />
                    )}
                    {/*<GridToolbarQuickFilter />*/}
                    {/**/}

                  </GridToolbarContainer>

                  {/*{canReset && (*/}
                  {/*  <ProductTableFiltersResult*/}
                  {/*    filters={filters}*/}
                  {/*    onFilters={handleFilters}*/}
                  {/*    onResetFilters={handleResetFilters}*/}
                  {/*    results={dataFiltered.length}*/}
                  {/*    sx={{ p: 2.5, pt: 0 }}*/}
                  {/*  />*/}
                  {/*)}*/}
                </>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data"/>,
              noResultsOverlay: () => <EmptyContent title="No results found"/>,
            }}
            slotProps={{
              columnsPanel: {
                getTogglableColumns,
              },
            }}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

function applyFilter(
  {
    inputData, filters,
  },
) {
  const { name, status, role, type } = filters;


  if (name) {
    inputData = inputData.filter(
      (user) => user.doc_type.toLowerCase().indexOf(name.toLowerCase()) !== -1,
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((user) => user.doc_type === status);
  }

  if (role?.length) {
    inputData = inputData.filter((user) => role.includes(user.role));
  }
  if (type.length) {
    inputData = inputData.filter((user) => type.includes(user.doc_type));
  }

  return inputData;
}

export default DocumentList;
