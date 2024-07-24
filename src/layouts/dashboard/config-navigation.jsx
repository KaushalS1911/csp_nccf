import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import { useTranslate } from 'src/locales';

import SvgColor from 'src/components/svg-color';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }}/>
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();
  const { vendor } = useAuthContext();
  const login_type = localStorage.getItem('login_type');
  const societyItems = vendor?.mil_dis_sub_roles === "own_distribution_own_mill" ? [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },



    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },
    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
  ]:[
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },


    {
      title: t('Miller'),
      path: paths.dashboard.miller.root,
      icon: ICONS.file,
      children: [
        { title: t('Miller List'), path: paths.dashboard.miller.miller_list },
        { title: t('Add Miller'), path: paths.dashboard.miller.add_miller },
        { title: t('Upload Document'), path: paths.dashboard.miller.document_upload },

      ],
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },
    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
  ];

  const otherItems = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },

    // {
    //   title: t('Orders'),
    //   path: paths.dashboard.orders,
    //   icon: ICONS.product,
    // },
    // {
    //   title: t('Stats Overview'),
    //   path: paths.dashboard.statsOverview.root,
    //   icon: ICONS.mail,
    //   children: [
    //     // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
    //     { title: t('Branch'), path: paths.dashboard.statsOverview.branch },
    //     { title: t('Vendor Type'), path: paths.dashboard.statsOverview.vendor_type },
    //
    //   ],
    // },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },

    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
    // {
    //   title: t('Head Office'),
    //   path: paths.dashboard.headOffice.root,
    //   icon: ICONS.user,
    // },
  ];

  const Miller_DistributorItems = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },

    // {
    //   title: t('Orders'),
    //   path: paths.dashboard.orders,
    //   icon: ICONS.product,
    // },
    // {
    //   title: t('Stats Overview'),
    //   path: paths.dashboard.statsOverview.root,
    //   icon: ICONS.mail,
    //   children: [
    //     // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
    //     { title: t('Branch'), path: paths.dashboard.statsOverview.branch },
    //     { title: t('Vendor Type'), path: paths.dashboard.statsOverview.vendor_type },
    //
    //   ],
    // },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },   {
      title: t('Distributor Info'),
      path: paths.dashboard.distributor_info,
      icon: ICONS.user,
    },

    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },

    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
    // {
    //   title: t('Head Office'),
    //   path: paths.dashboard.headOffice.root,
    //   icon: ICONS.user,
    // },
  ];

  const branchItem = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },
    {
      title: t('Orders'),
      path: paths.dashboard.orders,
      icon: ICONS.order,
    },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },
    {
      title: t('Add Miller'),
      path: paths.dashboard.addMiller,
      icon: ICONS.file,
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },
    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
  ];

  const millerItems = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },
    {
      title: t('Distributor'),
      path: paths.dashboard.distributor.root,
      icon: ICONS.file,
      children: [
            { title: t('Distributor List'), path: paths.dashboard.distributor.distributor_list },
            { title: t('Add Distributor'), path: paths.dashboard.distributor.add_distributor },
            { title: t('Upload Document'), path: paths.dashboard.distributor.document_upload },

          ],
    },
    // {
    //   title: t('Orders'),
    //   path: paths.dashboard.orders,
    //   icon: ICONS.product,
    // },
    // {
    //   title: t('Stats Overview'),
    //   path: paths.dashboard.statsOverview.root,
    //   icon: ICONS.mail,
    //   children: [
    //     // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
    //     { title: t('Branch'), path: paths.dashboard.statsOverview.branch },
    //     { title: t('Vendor Type'), path: paths.dashboard.statsOverview.vendor_type },
    //
    //   ],
    // },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },

    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
    // {
    //   title: t('Head Office'),
    //   path: paths.dashboard.headOffice.root,
    //   icon: ICONS.user,
    // },
  ];
  const distributeItems = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },
    {
      title: t('Miller'),
      path: paths.dashboard.miller.root,
      icon: ICONS.file,
      children: [
            { title: t('Miller List'), path: paths.dashboard.miller.miller_list },
            { title: t('Add Miller'), path: paths.dashboard.miller.add_miller },
            { title: t('Upload Document'), path: paths.dashboard.miller.document_upload },

          ],
    },
    // {
    //   title: t('Orders'),
    //   path: paths.dashboard.orders,
    //   icon: ICONS.product,
    // },
    // {
    //   title: t('Stats Overview'),
    //   path: paths.dashboard.statsOverview.root,
    //   icon: ICONS.mail,
    //   children: [
    //     // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
    //     { title: t('Branch'), path: paths.dashboard.statsOverview.branch },
    //     { title: t('Vendor Type'), path: paths.dashboard.statsOverview.vendor_type },
    //
    //   ],
    // },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },

    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
    // {
    //   title: t('Head Office'),
    //   path: paths.dashboard.headOffice.root,
    //   icon: ICONS.user,
    // },
  ];

  const headItems = [
    {
      title: t('Dashboard'),
      path: paths.dashboard.root,
      icon: ICONS.dashboard,
    },

    {
      title: t('Stats Overview'),
      path: paths.dashboard.statsOverview.root,
      icon: ICONS.mail,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Branch'), path: paths.dashboard.statsOverview.branch },
        { title: t('Vendor Type'), path: paths.dashboard.statsOverview.vendor_type },

      ],
    },
    {
      title: t('Basic Info'),
      path: paths.dashboard.basic_info,
      icon: ICONS.user,
    },
    {
      title: t('Add Miller'),
      path: paths.dashboard.addMiller,
      icon: ICONS.file,
    },
    {
      title: t('Document'),
      path: paths.dashboard.document.root,
      icon: ICONS.chat,
      children: [
        // { title: t('Document Overview'), path: paths.dashboard.document.document_overview },
        { title: t('Document List'), path: paths.dashboard.document.document_list },
        { title: t('Upload Document'), path: paths.dashboard.document.document_upload },
        {
          title: t('Upload Evidence'),
          path: paths.dashboard.document.upload_evidence,
        },
      ],
    },
    // INVOICE
    {
      title: t('payment'),
      path: paths.dashboard.invoice.root,
      icon: ICONS.invoice,
      children: [
        { title: t('list'), path: paths.dashboard.invoice.root },
        // {
        //   title: t('details'),
        //   path: paths.dashboard.invoice.demo.details,
        // },
        { title: t('create'), path: paths.dashboard.invoice.new },
        // { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
      ],
    },
  ];
  const data = useMemo(
    () => [
      // ----------------------------------------------------------------------
      {
        // subheader: t('management'),
        // items: vendor?.category === 'society_cooperative' ? societyItems : otherItems,
        items: vendor?.category === "Society" ? societyItems : login_type === 'branch' ? branchItem : login_type === 'head-office' ? headItems : vendor?.category === "miller" ? millerItems : vendor?.category === "distributor" ? distributeItems :vendor.category === "miller_distributor" ? Miller_DistributorItems : otherItems,
      },
    ],
    [t],
  );

  return data;
}
