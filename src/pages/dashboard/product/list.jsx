import { Helmet } from 'react-helmet-async';

import { ProductListView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function ProductListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Product List</title>
      </Helmet>

this is single page
      {/* <ProductListView /> */}
    </>
  );
}
