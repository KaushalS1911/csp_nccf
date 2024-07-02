import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { OverviewAppView } from 'src/sections/overview/app/view';
import { HeadviewAppView } from '../../sections/overview/head-office-dashboard/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {
const [isHo,setIsHo] = useState(true)
  return (
    <>
      <Helmet>
        <title> NCCF CSP Portal </title>
      </Helmet>

      {isHo ? <HeadviewAppView/> :
        <OverviewAppView/>}
    </>
  );
}
