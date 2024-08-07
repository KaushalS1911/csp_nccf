import React, { useCallback, useState } from 'react';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { Container } from '@mui/system';
import { Tab, Tabs } from '@mui/material';
import { useParams } from 'react-router';
import { paths } from 'src/routes/paths';
import { useGetCSP } from '../../../api/branch-csp';
import CspNewEditForm from '../csp-new-edit-form';
import CspDocumentView from './csp-document-view';
import Orders from '../Orders';
import List from '../../branch-order/view/list';
import FieldReport from '../field-report';
  const TABS = [
    {
      value: 'basic',
      label: 'Basic',
      icon: <Iconify icon="solar:user-id-bold" width={24} />,
    },
    {
      value: 'document',
      label: 'Document',
      icon: <Iconify icon="solar:bill-list-bold" width={24} />,
    },
    {
      value: 'orders',
      label: 'Orders',
      icon: <Iconify icon="solar:bell-bing-bold" width={24} />,
    },
    {
      value: 'fieldReport',
      label: 'Field report',
      icon: <Iconify icon="tdesign:verify" width={24} />,
    },
    // {
    //   value: 'security',
    //   label: 'Security',
    //   icon: <Iconify icon="solar:share-bold" width={24} />,
    // },
  ];
function SingleCsp(props) {
const {id} = useParams()
  const settings = useSettingsContext();
  const { csp } = useGetCSP();
  const distributor = csp?.find((data) => data.csp_code === id )
  const [currentTab, setCurrentTab] = useState('basic');

  const handleChangeTab = useCallback((event, newValue) => {
    setCurrentTab(newValue);
  }, []);
  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'xl'}>
        <CustomBreadcrumbs
          heading="CSP"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'CSP', href: paths.dashboard.csp.csp_view(id) },
            { name: 'Account' },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        >
          {TABS.map((tab) => (
            <Tab key={tab.value} label={tab.label} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        {currentTab === 'basic' && <CspNewEditForm distributor={distributor} cspt={true} />}

        {/*{currentTab === 'billing' && (*/}
        {/*  <AccountBilling*/}
        {/*    plans={_userPlans}*/}
        {/*    cards={_userPayment}*/}
        {/*    invoices={_userInvoices}*/}
        {/*    addressBook={_userAddressBook}*/}
        {/*  />*/}
        {/*)}*/}

        {currentTab === 'document' && <CspDocumentView  />}
        {currentTab === 'orders' && <Orders singleCode={id}/>}
        {currentTab === 'fieldReport' && <FieldReport singleCode={id}/>}

        {/*{currentTab === 'social' && <AccountSocialLinks socialLinks={_userAbout.socialLinks} />}*/}

        {/*{currentTab === 'security' && <AccountChangePassword />}*/}
      </Container>
    </>
  );
}

export default SingleCsp;
