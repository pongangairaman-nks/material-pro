import MaterialIcon from '@material/react-material-icon';

const SidebarData = [
  {
    title: 'Dashboard',
    href: '/apps/notes',
    icon: <MaterialIcon icon="description" />,
    id: 1,
    collapisble: false,
  },
  {
    title: 'Analog',
    href: '/apps/notes',
    icon: <MaterialIcon icon="mail_outline" />,
    id: 2,
    collapisble: false,
  },
  {
    title: 'Detail View',
    href: '/form-layout/form-basic',
    icon: <MaterialIcon icon="account_tree" />,
    id: 3,
  },
  {
    title: 'Asset Management',
    href: '/charts/chartjs',
    icon: <MaterialIcon icon="app_registration" />,
    id: 4,
    collapisble: false,
  },
  {
    title: 'Reports',
    href: '/charts/chartjs',
    icon: <MaterialIcon icon="confirmation_number" />,
    id: 5,
    collapisble: false,
  },
  {
    title: 'User Management',
    href: '/charts/chartjs',
    icon: <MaterialIcon icon="manage_accounts" />,
    id: 6,
    collapisble: false,
  },
];

export default SidebarData;
