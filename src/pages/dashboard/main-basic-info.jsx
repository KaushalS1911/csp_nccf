import React from 'react';
import { useAuthContext } from '../../auth/hooks';
import BranchBasicInfo from './branch-basic-info';
import BasicInfo from './basic-info';

function MainBasicInfo() {
  const {vendor} = useAuthContext()
  return (
    <>
      {(vendor?.category === "branch" || vendor?.category === "head_office") ? <BranchBasicInfo /> : <BasicInfo />}
    </>
  );
}

export default MainBasicInfo;
