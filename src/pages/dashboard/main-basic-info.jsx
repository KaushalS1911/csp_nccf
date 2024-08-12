import React from 'react';
import { useAuthContext } from '../../auth/hooks';
import BranchBasicInfo from './branch-basic-info';
import BasicInfo from './basic-info';
import MillerBasicInfo from './miller-basic-info';

function MainBasicInfo() {
  const {vendor} = useAuthContext()
  return (
    <>
      {(vendor?.category === "branch" || vendor?.category === "head_office") ? <BranchBasicInfo /> : <MillerBasicInfo />}
    </>
  );
}

export default MainBasicInfo;
