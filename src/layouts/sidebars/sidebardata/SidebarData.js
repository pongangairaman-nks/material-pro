import MaterialIcon from '@material/react-material-icon';

const SidebarData = [
  { caption: 'Home' },
  {
    title: 'Dashboards',
    href: '/dashboards',
    id: 1,
    icon: <MaterialIcon icon="speed" />,
    collapisble: true,
    children: [
      {
        title: 'Dashboard 4',
        href: '/dashboards/dashboard4',
        icon: <MaterialIcon icon="radio_button_checked" />,
        id: 1.4,
        collapisble: false,
      },
    ],
  },
  // { caption: 'Apps' },
  {
    title: 'Notes',
    href: '/apps/notes',
    icon: <MaterialIcon icon="description" />,
    id: 2.1,
    collapisble: false,
  },
  // { caption: 'UI' },
  {
    title: 'UI Elements',
    href: '/ui',
    id: 2,
    suffix: '22',
    suffixColor: 'bg-info',
    icon: <MaterialIcon icon="grid_view" />,
    collapisble: true,
    children: [
      {
        title: 'Alert',
        href: '/ui/alerts',
        icon: <MaterialIcon icon="radio_button_checked" />,
      },
    ],
  },
  // { caption: 'Forms' },
  {
    title: 'Form Basic',
    href: '/form-layout/form-basic',
    icon: <MaterialIcon icon="feed" />,
    id: 3.1,
  },
  // { caption: 'Charts' },
  {
    title: 'ChartJs',
    href: '/charts/chartjs',
    icon: <MaterialIcon icon="area_chart" />,
    id: 5.2,
    collapisble: false,
  },
];

export default SidebarData;
