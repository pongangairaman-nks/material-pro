import MaterialIcon from '@material/react-material-icon';

const SidebarData = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <MaterialIcon icon="description" />,
    id: 1,
    collapisble: false,
  },
  {
    title: 'Assets',
    href: '/assets',
    icon: <MaterialIcon icon="dns" />,
    id: 2,
    collapisble: false,
  },
  {
    title: 'Devices',
    href: '/devices',
    icon: <MaterialIcon icon="settings_suggest" />,
    id: 3,
  },
  {
    title: 'Controllers',
    href: '/controllers',
    icon: <MaterialIcon icon="lan" />,
    id: 4,
    collapisble: false,
  },
];

export default SidebarData;
