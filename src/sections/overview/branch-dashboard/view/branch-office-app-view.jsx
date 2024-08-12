import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';


import { useSettingsContext } from 'src/components/settings';

import axios from 'axios';
import { useAuthContext } from '../../../../auth/hooks';
import BranchWidgetSummary from '../branch-widget-summary';
import BranchCurrentDownload from '../branch-current-download';
import BranchDataActivity from '../branch-data-activity';
import { handleCategoryTypes, handleOrderTypes } from '../../../../_mock';
import AnalyticsWidgetSummary from '../../analytics/analytics-widget-summary';
import HeadCurrentDownload from '../../head-office-dashboard/head-current-download';
import { success1 } from '../../../../theme/palette';


// ----------------------------------------------------------------------

export default function BranchDashboardView({ vendorCode }) {
  const { vendor } = useAuthContext();
  const settings = useSettingsContext();
  const theme = useTheme();


  const [orderList, setOrderList] = useState([]);
  const [stats, setStats] = useState({});
  const [branch, setBranch] = useState([]);
  const [labelCount, setLabelCount] = useState([]);

  const [orderCount, setOrderCount] = useState([]);
  const TIME_LABELS = {
    week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    year: ['2018', '2019', '2020', '2021', '2022'],
  };
  useEffect(() => {
    if (vendor.csp_code) {
      fetchAllOrders();
    }
      getStats();
    // getOrder();
    getBranch();
  }, [vendor]);
  // function getOrder() {
  //   axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/ho/csp/orders/stats`).then((res) => {
  //     setOrderCount(res.data.data);
  //   });
  // }
  const orderLabel = (d) => {
    switch (d){
      case "accepted_orders" :
        return "Accepted Order"
      // break;
      case "completed_orders" :
        return "Completed Orders"
      case "declined_orders" :
        return "Declined Orders"
      case "placed_orders" :
        return "Placed Orders"
      case "total_orders" :
        return "Total Orders"
      default:
        return d
    }
  }
  useEffect(() => {
    const count = branch?.map((data, ind) => {
      if (data?.category !== "Distributor") {
        return { label: handleCategoryTypes(data?.category), value: data?.count };
      }
      return null;
    }).filter(item => item !== null);

    setLabelCount(count);
  }, [branch]);

  function getStats() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${vendor.branch}/order/stats`).then((res) => {
      setOrderCount(res?.data?.data[0]);
    });
  }
  const result = Object.entries(orderCount).map(([key, value]) => {
    return { label: orderLabel(key), value: value };
  });
const d = result.filter((val) => val.label !== "Total Orders")
  function getBranch() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/branch/${vendor.branch}/csp/stats`).then((res) => {
      setBranch(res?.data?.data);
    });
  }



  function fetchAllOrders() {
    axios.get(`http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/${vendor.csp_code}/orders`).then((res) => {
      setOrderList(res?.data?.data);
    });
  }
  const color2 = ["secondary","success2","brown1","brown","success1"]
  // const statusesToKeep = ['placed', 'accepted', 'declined'];
  // const chartOrder = []
  // const filteredData = orderCount.filter(item => statusesToKeep.includes(item.nccf_order_status));
  // filteredData.map((data) => chartOrder.push({label:handleOrderTypes(data?.nccf_order_status),value:data?.order_count || 0}))
  // const color = [[theme.palette.success.light, theme.palette.success.main], [theme.palette.warning.light, theme.palette.warning.main], [theme.palette.info.light, theme.palette.info.main], [theme.palette.secondary.light, theme.palette.secondary.main]];
  const color = ["primary","info","warning","error"]
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        {branch && branch.map((data, ind) => (
          data?.category !== "Distributor" && <Grid xs={12} md={3}>
            <AnalyticsWidgetSummary
              title={handleCategoryTypes(data?.category)}
              // percent={0.2}
              color={color[ind]}
              total={data?.count || '0'}
              chart={{
                // colors: color[ind-1],
                // series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>
        ))}
        {orderCount && result.map((data, ind) => (
          <Grid xs={6} md={2.4}>
            <AnalyticsWidgetSummary
              title={orderLabel(data?.label)}
              // percent={0.2}
              total={data?.value || '0'}
              color={color2[ind]}
              chart={{
                // colors: color[ind-1],
                // series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
              }}
            />
          </Grid>
        ))}
        {/*<Grid xs={12} md={3}>*/}
        {/*  <BranchWidgetSummary*/}
        {/*    title="Distributor"*/}
        {/*    // percent={-0.1}*/}
        {/*    total={678}*/}
        {/*    chart={{*/}
        {/*      colors: [theme.palette.warning.light, theme.palette.warning.main],*/}
        {/*      series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],*/}
        {/*    }}*/}

        {/*  />*/}
        {/*</Grid>*/}

        {/*<Grid xs={12} md={3}>*/}
        {/*  <BranchWidgetSummary*/}
        {/*    title="Miller & Distributor"*/}
        {/*    // percent={0.2}*/}
        {/*    total={4876}*/}
        {/*    chart={{*/}
        {/*      colors: [theme.palette.info.light, theme.palette.info.main],*/}
        {/*      series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],*/}
        {/*    }}*/}

        {/*  />*/}
        {/*</Grid>*/}

        {/*<Grid xs={12} md={3}>*/}
        {/*  <BranchWidgetSummary*/}
        {/*    title="Society/Co-operative"*/}
        {/*    // percent={-0.1}*/}
        {/*    total={678}*/}
        {/*    chart={{*/}
        {/*      colors: [theme.palette.secondary.light, theme.palette.secondary.main],*/}
        {/*      series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],*/}
        {/*    }}*/}

        {/*  />*/}
        {/*</Grid>*/}

        <Grid xs={12} md={6} lg={4}>
          {labelCount !== [] && <BranchCurrentDownload
            title="CSP Distribution"
            chart={{
              colors: [
                '#004B50',
                '#0D7566',
                '#5DD095',
                '#C8FAD6',
              ],
              series: labelCount,
            }}
          />}
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          {labelCount !== [] && <HeadCurrentDownload
            title="Total Orders"
            chart={{
              colors: [
                '#6F4E37',
                '#ECB176',
                '#FED8B1',
                '#A67B5B',
              ],
              series: d,
            }}
          />}
        </Grid>
        {/*<Grid xs={12} md={6} lg={8}>*/}
        {/*  <BranchDataActivity*/}
        {/*    title="Orders"*/}
        {/*    chart={{*/}
        {/*      labels: TIME_LABELS,*/}
        {/*      colors: [*/}
        {/*        theme.palette.primary.main,*/}
        {/*        theme.palette.error.main,*/}
        {/*        theme.palette.warning.main,*/}
        {/*      ],*/}
        {/*      series: [*/}
        {/*        {*/}
        {/*          type: 'Week',*/}
        {/*          data: [*/}
        {/*            { name: 'Bharat Daal', data: [20, 34, 48, 65, 37, 48, 9] },*/}
        {/*            { name: 'Bharat Aata', data: [10, 34, 13, 26, 27, 28, 18] },*/}
        {/*            { name: 'Bharat Rice', data: [10, 14, 13, 16, 17, 18, 28] },*/}
        {/*          ],*/}
        {/*        },*/}
        {/*        {*/}
        {/*          type: 'Month',*/}
        {/*          data: [*/}
        {/*            {*/}
        {/*              name: 'Bharat Daal',*/}
        {/*              data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],*/}
        {/*            },*/}
        {/*            {*/}
        {/*              name: 'Bharat Aata',*/}
        {/*              data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],*/}
        {/*            },*/}
        {/*            {*/}
        {/*              name: 'Bharat Rice',*/}
        {/*              data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],*/}
        {/*            },*/}

        {/*          ],*/}
        {/*        },*/}
        {/*        {*/}
        {/*          type: 'Year',*/}
        {/*          data: [*/}
        {/*            { name: 'Bharat Daal', data: [10, 34, 13, 56, 77] },*/}
        {/*            { name: 'Bharat Aata', data: [10, 34, 13, 56, 77] },*/}
        {/*            { name: 'Bharat Rice', data: [10, 34, 13, 56, 77] },*/}
        {/*          ],*/}
        {/*        },*/}
        {/*      ],*/}
        {/*    }}*/}
        {/*  />*/}

          {/*<div>*/}
          {/*  <HeadManagerPanel*/}
          {/*    title="Folders"*/}
          {/*    link={paths.dashboard.fileManager}*/}
          {/*    onOpen={newFolder.onTrue}*/}
          {/*    sx={{ mt: 5 }}*/}
          {/*  />*/}

          {/*  <Scrollbar>*/}
          {/*    <Stack direction="row" spacing={3} sx={{ pb: 3 }}>*/}
          {/*      {_folders.map((folder) => (*/}
          {/*        <FileManagerFolderItem*/}
          {/*          key={folder.id}*/}
          {/*          folder={folder}*/}
          {/*          onDelete={() => console.info('DELETE', folder.id)}*/}
          {/*          sx={{*/}
          {/*            ...(_folders.length > 3 && {*/}
          {/*              minWidth: 222,*/}
          {/*            }),*/}
          {/*          }}*/}
          {/*        />*/}
          {/*      ))}*/}
          {/*    </Stack>*/}
          {/*  </Scrollbar>*/}

          {/*  <FileManagerPanel*/}
          {/*    title="Recent Files"*/}
          {/*    link={paths.dashboard.fileManager}*/}
          {/*    onOpen={upload.onTrue}*/}
          {/*    sx={{ mt: 2 }}*/}
          {/*  />*/}

          {/*  <Stack spacing={2}>*/}
          {/*    {_files.slice(0, 5).map((file) => (*/}
          {/*      <FileRecentItem*/}
          {/*        key={file.id}*/}
          {/*        file={file}*/}
          {/*        onDelete={() => console.info('DELETE', file.id)}*/}
          {/*      />*/}
          {/*    ))}*/}
          {/*  </Stack>*/}
          {/*</div>*/}
        {/*</Grid>*/}
        <Grid xs={12}>
          {/*<BranchNewInvoice*/}
          {/*  title="Orders"*/}
          {/*  head={true}*/}
          {/*  tableData={orderList}*/}
          {/*  tableLabels={[*/}
          {/*    { id: 'sr no', label: '#' },*/}
          {/*    { id: 'commodity', label: 'Commodity' },*/}
          {/*    { id: 'quantity', label: 'Quantity' },*/}
          {/*    { id: 'date', label: 'Date' },*/}
          {/*    { id: 'status', label: 'Status' },*/}
          {/*    { id: '' },*/}
          {/*  ]}*/}
          {/*/>*/}
          {/*<BranchListView />*/}
        </Grid>
        {/*<Grid xs={12} lg={12}>*/}
        {/*  <UserListView tableData={orderList}/>*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  );
}
