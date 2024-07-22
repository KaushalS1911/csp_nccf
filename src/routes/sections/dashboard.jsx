// import { lazy, Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import { AuthGuard } from 'src/auth/guard';
// import DashboardLayout from 'src/layouts/dashboard';

// import { LoadingScreen } from 'src/components/loading-screen';

// // ----------------------------------------------------------------------

// //BAsic INFO
// const BasicInfoPage = lazy(() => import('src/pages/dashboard/basic-info'));
// const UploadListView = lazy(() => import('src/pages/dashboard/upload-document'));
// const UploadDocument = lazy(() => import('src/pages/dashboard/addUploadDocument'));
// const UploadEvidencePage = lazy(() => import('src/pages/dashboard/upload-evidence'));
// const OrdersPage = lazy(() => import('src/pages/dashboard/orders'));

// // OVERVIEW
// const IndexPage = lazy(() => import('src/pages/dashboard/app'));
// const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
// const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
// const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
// const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
// const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
// // PRODUCT
// const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
// const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
// const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
// const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// // ORDER
// const OrderListPage = lazy(() => import('src/pages/dashboard/head-office/list'));
// const OrderDetailsPage = lazy(() => import('src/pages/dashboard/head-office/details'));
// // INVOICE
// const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
// const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
// const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
// const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// // USER
// const UserProfilePage = lazy(() => import('src/pages/dashboard/head-office/profile'));
// const UserCardsPage = lazy(() => import('src/pages/dashboard/head-office/cards'));
// const UserListPage = lazy(() => import('src/pages/dashboard/head-office/list'));
// const UserAccountPage = lazy(() => import('src/pages/dashboard/head-office/account'));
// const UserCreatePage = lazy(() => import('src/pages/dashboard/head-office/new'));
// const UserEditPage = lazy(() => import('src/pages/dashboard/head-office/edit'));
// // BLOG
// const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
// const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
// const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
// const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// // JOB
// const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
// const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
// const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
// const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// // TOUR
// const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
// const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
// const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
// const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// // FILE MANAGER
// const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// // APP
// const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
// const MailPage = lazy(() => import('src/pages/dashboard/mail'));
// const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
// const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// // TEST RENDER PAGE BY ROLE
// const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// // BLANK PAGE
// const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// // ----------------------------------------------------------------------

// export const dashboardRoutes = [
//   {
//     path: 'dashboard',
//     element: (
//       <AuthGuard>
//         <DashboardLayout>
//           <Suspense fallback={<LoadingScreen />}>
//             <Outlet />
//           </Suspense>
//         </DashboardLayout>
//       </AuthGuard>
//     ),
//     children: [
//       { element: <IndexPage />, index: true },
//       { path: 'basic-info', element: <BasicInfoPage /> },
//       { path: 'upload-document', element: <UploadDocument /> },
//       { path: 'document', element: <UploadListView /> },
//       { path: 'upload-evidence', element: <UploadEvidencePage /> },
//       { path: 'orders', element: <OrdersPage /> },
//       { path: 'ecommerce', element: <OverviewEcommercePage /> },
//       { path: 'analytics', element: <OverviewAnalyticsPage /> },
//       { path: 'banking', element: <OverviewBankingPage /> },
//       { path: 'booking', element: <OverviewBookingPage /> },
//       { path: 'file', element: <OverviewFilePage /> },
//       {
//         path: 'head-office',
//         children: [
//           { element: <UserProfilePage />, index: true },
//           { path: 'profile', element: <UserProfilePage /> },
//           { path: 'cards', element: <UserCardsPage /> },
//           { path: 'list', element: <UserListPage /> },
//           { path: 'new', element: <UserCreatePage /> },
//           { path: ':id/edit', element: <UserEditPage /> },
//           { path: 'account', element: <UserAccountPage /> },
//         ],
//       },
//       {
//         path: 'product',
//         children: [
//           { element: <ProductListPage />, index: true },
//           { path: 'list', element: <ProductListPage /> },
//           { path: ':id', element: <ProductDetailsPage /> },
//           { path: 'new', element: <ProductCreatePage /> },
//           { path: ':id/edit', element: <ProductEditPage /> },
//         ],
//       },
//       {
//         path: 'head-office',
//         children: [
//           { element: <OrderListPage />, index: true },
//           { path: 'list', element: <OrderListPage /> },
//           { path: ':id', element: <OrderDetailsPage /> },
//         ],
//       },
//       {
//         path: 'invoice',
//         children: [
//           { element: <InvoiceListPage />, index: true },
//           { path: 'list', element: <InvoiceListPage /> },
//           { path: ':id', element: <InvoiceDetailsPage /> },
//           { path: ':id/edit', element: <InvoiceEditPage /> },
//           { path: 'new', element: <InvoiceCreatePage /> },
//         ],
//       },
//       {
//         path: 'post',
//         children: [
//           { element: <BlogPostsPage />, index: true },
//           { path: 'list', element: <BlogPostsPage /> },
//           { path: ':title', element: <BlogPostPage /> },
//           { path: ':title/edit', element: <BlogEditPostPage /> },
//           { path: 'new', element: <BlogNewPostPage /> },
//         ],
//       },
//       {
//         path: 'job',
//         children: [
//           { element: <JobListPage />, index: true },
//           { path: 'list', element: <JobListPage /> },
//           { path: ':id', element: <JobDetailsPage /> },
//           { path: 'new', element: <JobCreatePage /> },
//           { path: ':id/edit', element: <JobEditPage /> },
//         ],
//       },
//       {
//         path: 'tour',
//         children: [
//           { element: <TourListPage />, index: true },
//           { path: 'list', element: <TourListPage /> },
//           { path: ':id', element: <TourDetailsPage /> },
//           { path: 'new', element: <TourCreatePage /> },
//           { path: ':id/edit', element: <TourEditPage /> },
//         ],
//       },
//       { path: 'file-manager', element: <FileManagerPage /> },
//       { path: 'mail', element: <MailPage /> },
//       { path: 'chat', element: <ChatPage /> },
//       { path: 'calendar', element: <CalendarPage /> },
//       { path: 'kanban', element: <KanbanPage /> },
//       { path: 'permission', element: <PermissionDeniedPage /> },
//       { path: 'blank', element: <BlankPage /> },
//     ],
//   },
// ];
import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';
import { OverviewFileView } from 'src/sections/overview/file/view';
import MillerCreatePage from 'src/pages/dashboard/add-miller/new';
import HeadOfficeListPage from '../../pages/dashboard/head-office/list';
import HeadOfficeOrderView from '../../pages/dashboard/head-office/OredrView';
import BranchDashboardView from '../../sections/overview/branch-dashboard/view/branch-office-app-view';
import BranchList from '../../sections/branch/branch-list';
import BranchListPage from '../../pages/dashboard/branch/list';
import DistributorCreatePage from '../../pages/dashboard/add-distributor/new';
import DistributorList from '../../pages/dashboard/add-distributor/list';
import MillerList from '../../pages/dashboard/add-miller/list';
import SingleDistributorView from '../../sections/add-distributor/view/single-distributor-view';
import UploadDistributorDocument from '../../sections/add-distributor/view/upload-distributor-document';

// ----------------------------------------------------------------------

//BAsic INFO
const BasicInfoPage = lazy(() => import('src/pages/dashboard/basic-info'));
const UploadListView = lazy(() => import('src/pages/dashboard/upload-document'));
const UploadDocument = lazy(() => import('src/pages/dashboard/addUploadDocument'));
const UploadEvidencePage = lazy(() => import('src/pages/dashboard/upload-evidence'));
const OrdersPage = lazy(() => import('src/pages/dashboard/orders'));

// OVERVIEW
const IndexPage = lazy(() => import('src/pages/dashboard/app'));
const OverviewEcommercePage = lazy(() => import('src/pages/dashboard/ecommerce'));
const OverviewAnalyticsPage = lazy(() => import('src/pages/dashboard/analytics'));
const OverviewBankingPage = lazy(() => import('src/pages/dashboard/banking'));
const OverviewBookingPage = lazy(() => import('src/pages/dashboard/booking'));
const OverviewFilePage = lazy(() => import('src/pages/dashboard/file'));
// PRODUCT
const ProductDetailsPage = lazy(() => import('src/pages/dashboard/product/details'));
const ProductListPage = lazy(() => import('src/pages/dashboard/product/list'));
const ProductCreatePage = lazy(() => import('src/pages/dashboard/product/new'));
const ProductEditPage = lazy(() => import('src/pages/dashboard/product/edit'));
// ORDER
const OrderListPage = lazy(() => import('src/pages/dashboard/order/list'));
const OrderDetailsPage = lazy(() => import('src/pages/dashboard/order/details'));
// INVOICE
const InvoiceListPage = lazy(() => import('src/pages/dashboard/invoice/list'));
const InvoiceDetailsPage = lazy(() => import('src/pages/dashboard/invoice/details'));
const InvoiceCreatePage = lazy(() => import('src/pages/dashboard/invoice/new'));
const InvoiceEditPage = lazy(() => import('src/pages/dashboard/invoice/edit'));
// USER
// const UserProfilePage = lazy(() => import('src/pages/dashboard/head-office/profile'));
// const UserCardsPage = lazy(() => import('src/pages/dashboard/head-office/cards'));
// const UserListPage = lazy(() => import('src/pages/dashboard/head-office/list'));
// const UserAccountPage = lazy(() => import('src/pages/dashboard/head-office/account'));
// const UserCreatePage = lazy(() => import('src/pages/dashboard/head-office/new'));
// const UserEditPage = lazy(() => import('src/pages/dashboard/head-office/edit'));
// BLOG
const BlogPostsPage = lazy(() => import('src/pages/dashboard/post/list'));
const BlogPostPage = lazy(() => import('src/pages/dashboard/post/details'));
const BlogNewPostPage = lazy(() => import('src/pages/dashboard/post/new'));
const BlogEditPostPage = lazy(() => import('src/pages/dashboard/post/edit'));
// JOB
const JobDetailsPage = lazy(() => import('src/pages/dashboard/job/details'));
const JobListPage = lazy(() => import('src/pages/dashboard/job/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/job/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/job/edit'));
// TOUR
const TourDetailsPage = lazy(() => import('src/pages/dashboard/tour/details'));
const TourListPage = lazy(() => import('src/pages/dashboard/tour/list'));
const TourCreatePage = lazy(() => import('src/pages/dashboard/tour/new'));
const TourEditPage = lazy(() => import('src/pages/dashboard/tour/edit'));
// FILE MANAGER
const FileManagerPage = lazy(() => import('src/pages/dashboard/file-manager'));
// APP
const ChatPage = lazy(() => import('src/pages/dashboard/chat'));
const MailPage = lazy(() => import('src/pages/dashboard/mail'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const KanbanPage = lazy(() => import('src/pages/dashboard/kanban'));
// TEST RENDER PAGE BY ROLE
const PermissionDeniedPage = lazy(() => import('src/pages/dashboard/permission'));
// BLANK PAGE
const BlankPage = lazy(() => import('src/pages/dashboard/blank'));

// ----------------------------------------------------------------------
// 9811592957 : Society/own_distribution_rent_mill
// 9811592958 : Society/cooperative_rent_mill
// 9811592959 : Society/own_distribution_own_mill
// password : kgfdingo
export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'basic-info', element: <BasicInfoPage /> },
      // { path: 'upload-document', element: <UploadDocument /> },
      // { path: 'document', element: <UploadListView /> },
      { path: 'orders', element: <BranchListPage /> },
      { path: 'add-miller', element: <MillerCreatePage /> },
      { path: 'ecommerce', element: <OverviewEcommercePage /> },
      { path: 'analytics', element: <OverviewAnalyticsPage /> },
      { path: 'banking', element: <OverviewBankingPage /> },
      { path: 'booking', element: <OverviewBookingPage /> },
      { path: 'file', element: <OverviewFilePage /> },
      // {
      //   path: 'head-office',
      //   children: [
      //     { element: <UserProfilePage />, index: true },
      //     { path: 'profile', element: <UserProfilePage /> },
      //     { path: 'cards', element: <UserCardsPage /> },
      //     { path: 'list', element: <UserListPage /> },
      //     { path: 'new', element: <UserCreatePage /> },
      //     { path: ':id/edit', element: <UserEditPage /> },
      //     { path: 'account', element: <UserAccountPage /> },
      //   ],
      // },
      {
        path: 'head-office',
        children: [
          { element: <HeadOfficeListPage />, index: true },
          // { path: 'profile', element: <UserProfilePage /> },
          // { path: 'cards', element: <UserCardsPage /> },
          { path: 'list', element: <HeadOfficeListPage /> },
          // { path: 'new', element: <UserCreatePage /> },
          { path: ':id/view', element: <HeadOfficeOrderView /> },
          // { path: 'account', element: <UserAccountPage /> },
        ],
      },
      {
        path: 'product',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'list', element: <ProductListPage /> },
          { path: ':id', element: <ProductDetailsPage /> },
          { path: 'new', element: <ProductCreatePage /> },
          { path: ':id/edit', element: <ProductEditPage /> },
        ],
      },
      {
        path: 'document',
        children: [
          { element: <UploadListView />, index: true },
          { path: 'document-overview', element: <OverviewFileView /> },
          { path: 'document-list', element: <UploadListView /> },
          { path: 'document-upload', element: <UploadDocument /> },
          { path: 'document-view', element: <ProductDetailsPage /> },
          { path: 'upload-evidence', element: <UploadEvidencePage /> },
        ],
      },
      {
        path: 'distributor',
        children: [
          { element: <UploadListView />, index: true },
          { path: 'distributor-list', element: <DistributorList /> },
          { path: 'add-distributor', element: <DistributorCreatePage /> },
          { path: 'document-upload', element: <UploadDistributorDocument /> },
          { path: 'distributor-view/:id', element: <SingleDistributorView /> },
        ],
      },
      {
        path: 'miller',
        children: [
          { element: <UploadListView />, index: true },
          { path: 'miller-list', element: <MillerList /> },
          { path: 'add-miller', element: <MillerCreatePage /> },
          { path: 'document-upload', element: <UploadDocument /> },
        ],
      },

      {
        path: 'states-overview',
        children: [
          { element: <ProductListPage />, index: true },
          { path: 'branch', element: <BranchDashboardView /> },
          { path: 'vendor-type', element: <ProductListPage /> },
          { path: 'order', element: <BranchListPage /> },
          // { path: 'document-upload', element: <UploadDocument /> },
          // { path: 'document-view', element: <ProductDetailsPage /> },
          // { path: 'upload-evidence', element: <UploadEvidencePage /> },
        ],
      },
      {
        path: 'invoice',
        children: [
          { element: <InvoiceListPage />, index: true },
          { path: 'list', element: <InvoiceListPage /> },
          { path: ':id', element: <InvoiceDetailsPage /> },
          { path: ':id/edit', element: <InvoiceEditPage /> },
          { path: 'new', element: <InvoiceCreatePage /> },
        ],
      },
      {
        path: 'post',
        children: [
          { element: <BlogPostsPage />, index: true },
          { path: 'list', element: <BlogPostsPage /> },
          { path: ':title', element: <BlogPostPage /> },
          { path: ':title/edit', element: <BlogEditPostPage /> },
          { path: 'new', element: <BlogNewPostPage /> },
        ],
      },
      {
        path: 'job',
        children: [
          { element: <JobListPage />, index: true },
          { path: 'list', element: <JobListPage /> },
          { path: ':id', element: <JobDetailsPage /> },
          { path: 'new', element: <JobCreatePage /> },
          { path: ':id/edit', element: <JobEditPage /> },
        ],
      },
      {
        path: 'tour',
        children: [
          { element: <TourListPage />, index: true },
          { path: 'list', element: <TourListPage /> },
          { path: ':id', element: <TourDetailsPage /> },
          { path: 'new', element: <TourCreatePage /> },
          { path: ':id/edit', element: <TourEditPage /> },
        ],
      },
      { path: 'file-manager', element: <FileManagerPage /> },
      { path: 'mail', element: <MailPage /> },
      { path: 'chat', element: <ChatPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'kanban', element: <KanbanPage /> },
      { path: 'permission', element: <PermissionDeniedPage /> },
      { path: 'blank', element: <BlankPage /> },
    ],
  },
];
