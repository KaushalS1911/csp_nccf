import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { OverviewAppView } from 'src/sections/overview/app/view';
import { HeadviewAppView } from '../../sections/overview/head-office-dashboard/view';

// ----------------------------------------------------------------------

export default function OverviewAppPage() {
const [isHo,setIsHo] = useState(true)
 const login_type = localStorage.getItem("login_type")
  return (
    <>
      <Helmet>
        <title> NCCF CSP Portal </title>
      </Helmet>

      {login_type === 'other-login' ? <OverviewAppView/> :<HeadviewAppView/>}
    </>
  );
}
