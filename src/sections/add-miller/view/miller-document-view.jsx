import React from 'react';
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import { paths } from '../../../routes/paths';
import { Container } from '@mui/system';
import { useParams } from 'react-router';
import { useGetDistributor } from '../../../api/vendor';
import { DocumentListView } from '../../upload/view';
import { Grid, Typography } from '@mui/material';
import { useResponsive } from '../../../hooks/use-responsive';
import { useSettingsContext } from '../../../components/settings';

function MillerDocumentView(props) {
  const {id} = useParams()
  const mdUp = useResponsive('up', 'md');
  const settings  = useSettingsContext()
  const {distributor} = useGetDistributor(id)
  const table = (
    <>
            <Grid xs={12} md={12}>
        <DocumentListView  csp={distributor?.csp_code} document={true}/>
      </Grid>
    </>
  );
  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>

        <CustomBreadcrumbs
          heading={`Miller Documents`}
          links={[
            {
              name: 'Dashboard',
              href: paths.dashboard.root,
            },
            {
              name: 'Miller List',
              href: paths.dashboard.miller.miller_list,
            },

            {
              name: `Miller Documents`,
            },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />
        {table}
        </Container>
    </>
  );
}

export default MillerDocumentView;