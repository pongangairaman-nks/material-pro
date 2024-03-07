import React from 'react';
import { Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { colors } from '../../../utils/colors';
import DrawerComponent from '../../Drawer';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';

const tempData = [
  {
    id: 1,
    name: 'Result 1',
    status: 1,
  },
  {
    id: 2,
    name: 'Result 2',
    status: 2,
  },
  {
    id: 3,
    name: 'Result 3',
    status: 3,
  },
  {
    id: 4,
    name: 'Result 4',
    status: 4,
  },
  {
    id: 5,
    name: 'Result 5',
    status: 3,
  },
];

const SearchDrawerDetails = (props) => {
  const date = '';

  const [openDetailDrawer, setOpenDetailDrawer] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState({});

  const handleDetailDrawerOpen = (data) => {
    setSelectedData(data);
    setOpenDetailDrawer(true);
  };

  const handleDetailDrawerClose = () => {
    setOpenDetailDrawer(false);
  };

  return (
    <Box sx={{ m: 2 }}>
      {tempData?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            p: 2,
            backgroundColor: colors.lightOrangeBackground,
            mt: index !== 0 ? 2 : 0,
            cursor: 'pointer',
          }}
          onClick={() => handleDetailDrawerOpen(item)}
        >
          <Box sx={{ flex: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {item?.status === 1 ? (
                <i className="bi bi-circle-fill text-success fs-7 me-2"></i>
              ) : item?.status === 2 ? (
                <i className="bi bi-circle-fill text-warning fs-7 me-2"></i>
              ) : item?.status === 3 ? (
                <i className="bi bi-circle-fill text-primary fs-7 me-2"></i>
              ) : (
                <i className="bi bi-circle-fill text-danger fs-7 me-2"></i>
              )}
              <Typography fontSize={14} color={colors.lightGrey}>
                {item?.name}
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5, fontSize: 13, display: 'flex', alignItems: 'center' }}>
              <CalendarTodayIcon fontSize="inherit" />
              <Typography fontSize={13} color={colors.lightGrey} ml={1}>
                {'08 Mar 2024 1:14'}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 1,
              fontSize: 20,
            }}
          >
            <OpenInNewIcon fontSize="inherit" />
            <VisibilityIcon fontSize="inherit" />
            <PowerSettingsNewIcon fontSize="inherit" />
          </Box>
        </Box>
      ))}
      <DrawerComponent
        open={openDetailDrawer}
        setOpen={setOpenDetailDrawer}
        handleDrawerOpen={handleDetailDrawerOpen}
        handleDrawerClose={handleDetailDrawerClose}
        header={
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ flex: 2, p: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {selectedData?.status === 1 ? (
                  <i className="bi bi-circle-fill text-success fs-7 me-2"></i>
                ) : selectedData?.status === 2 ? (
                  <i className="bi bi-circle-fill text-warning fs-7 me-2"></i>
                ) : selectedData?.status === 3 ? (
                  <i className="bi bi-circle-fill text-primary fs-7 me-2"></i>
                ) : (
                  <i className="bi bi-circle-fill text-danger fs-7 me-2"></i>
                )}
                <Typography
                  fontSize={14}
                  color={colors.lightGrey}
                  fontWeight={500}
                  // fontStyle={'italic'}
                  letterSpacing={'0.5px'}
                >
                  {selectedData?.name}
                </Typography>
              </Box>
              <Box sx={{ mt: 0.5, fontSize: 13, display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon fontSize="inherit" />
                <Typography fontSize={13} color={colors.lightGrey} ml={1}>
                  {'08 Mar 2024 1:14'}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ p: 2 }}>
              <IconButton onClick={handleDetailDrawerClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        }
        children={<SeletedDataDetails selectedData={selectedData} />}
        zIndex={3}
      />
    </Box>
  );
};

export default SearchDrawerDetails;

const SeletedDataDetails = (props) => {
  const { selectedData } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      {/* {`${selectedData?.name} Details`} */}
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td width="150">
              <h6>Estimated run hour </h6>
            </td>
            <td>: NA</td>
          </tr>
          <tr>
            <td>
              <h6>Last fuel filled</h6>
            </td>
            <td>
              : <b>91.15 L</b>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <h6>Last filled date and time</h6>
            </td>
            <td>: 05 Mar 2024, 06:37 </td>
          </tr>
          <tr>
            <td>
              <h6>Lifetime run hour</h6>
            </td>
            <td>
              : <b>645:22 Hours</b>{' '}
            </td>
          </tr>
          <tr>
            <td>
              <h6>Last fault</h6>
            </td>
            <td>: NA</td>
          </tr>
          <tr>
            <td>
              <h6>Voltage</h6>
            </td>
            <td>: 26.00 V</td>
          </tr>
          <tr>
            <td>
              <h6>Temperature</h6>
            </td>
            <td>: 54 °C</td>
          </tr>
          <tr>
            <td>
              <h6>Pressure</h6>
            </td>
            <td>: 0.00 Bar</td>
          </tr>
          <tr>
            <td>
              <h6>Current</h6>
            </td>
            <td>: 0.00 A</td>
          </tr>
          <tr>
            <td>
              <h6>Energy</h6>
            </td>
            <td>: 0.00 kW</td>
          </tr>
          <tr>
            <td>
              <h6>Last run details</h6>
            </td>
            <td>: 07 Mar 2024, 22:49 to 22:53</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
