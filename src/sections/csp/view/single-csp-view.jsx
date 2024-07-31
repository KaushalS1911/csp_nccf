import React from 'react';
import { useSettingsContext } from '../../../components/settings';
import Container from '@mui/material/Container';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { paths } from '../../../routes/paths';
import { useGetDistributor } from '../../../api/vendor';
import { useParams } from 'react-router';
import CspDocumentView from './csp-document-view';
import CspNewEditForm from '../csp-new-edit-form';
import { useGetCSP } from '../../../api/branch-csp';
import { Box } from '@mui/system';


function SingleCspView(props) {
const {id} = useParams()
  const settings = useSettingsContext();
  const { csp } = useGetCSP();
const distributor = csp?.find((data) => data.csp_code === id )

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>

      <CustomBreadcrumbs
        heading={`Csp view`}
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'CSP List',
            href: paths.dashboard.csp.csp_list,
          },

          {
            name: `CSP`,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <CspNewEditForm distributor={distributor} cspt={true} />

      <Box sx={{ mt: 5 }}>
        <CspDocumentView   />
      </Box>

    </Container>
  );
}

export default SingleCspView;
