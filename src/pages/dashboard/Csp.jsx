import React from 'react';
import { Helmet } from 'react-helmet-async';
import BranchListView from '../../sections/overview/branch-dashboard/branch/branch-list-view';

function Csp(props) {
  return (
    <>
      <Helmet>
        <title> Dashboard | CSP</title>
      </Helmet>
    <BranchListView />
    </>
  );
}

export default Csp;
