import { Helmet } from 'react-helmet-async';
import List from '../../../sections/branch-order/view/list';
import { useAuthContext } from '../../../auth/hooks';
import HOList from '../../../sections/head-office-order/view/list';


// ----------------------------------------------------------------------

export default function OrderListPage() {
  const {vendor} = useAuthContext()
  return (
    <>
      <Helmet>
        <title> Dashboard: Order List</title>
      </Helmet>
      {
        vendor?.category === "branch" ? <List /> : <HOList />
      }

    </>
  );
}
