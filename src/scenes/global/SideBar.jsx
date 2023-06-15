import React, { Children, useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";
import Icon from '../../assets/react.svg'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

const SideBar = ({ children }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  //   const listStyle = {
  //     display: 'flex',
  //     justifyContent: 'left',
  //     alignItems: 'baseline',
  //     paddingTop: '20px',
  //     textDecoration: 'none',
  //     paddingLeft: '20px'
  //   }
  const data = [
    {
      path: "/React-Admin-Dashboard/team",
      name: "Manage Team",
      icon: <PeopleOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/contacts",
      name: "Contacts Information",
      icon: <ContactsOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/invoices",
      name: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
    },
  ];
  const pages = [
    {
      path: "/React-Admin-Dashboard/form",
      name: "Profile Form",
      icon: <PersonOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/calendar",
      name: "Calendar Chart",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/faq",
      name: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
    },
  ];
  const charts = [
    {
      path: "/React-Admin-Dashboard/bar",
      name: "Bar Chart",
      icon: <BarChartOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/pie",
      name: "Pie Chart",
      icon: <PieChartOutlineOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/line",
      name: "Line Chart",
      icon: <TimelineOutlinedIcon />,
    },
    {
      path: "/React-Admin-Dashboard/geography",
      name: "Geography",
      icon: <MapOutlinedIcon />,
    },
  ];

  return (
    <Box  display={'flex'} sx={{backgroundColor: colors.primary[400], boxShadow: "2px 5px 10px #00000080"}} >
      <Box
        className="sidebar"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          overflowY: "scroll",
          backgroundColor: colors.primary[400]
        }}
      >
        {!isCollapsed && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="10px"
            my="15px"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              ADMINIS
            </Typography>
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
        )}
        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center" sx={{width: '200px'}}>
              <img
                alt="profile-user"
                width="60px"
                height="60px"
                src={Icon}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h4"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Priyanshu Pandit
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}
        {!isCollapsed && (
          <Box mb='10px'>
            <NavLink to="/React-Admin-Dashboard/" className={({isActive}) => isActive ? "activelink" : "link"} onClick={() => setSelected("Dashboard")}>
              <IconButton className="icon" pr='10px'>
                <HomeOutlinedIcon />
              </IconButton>
              <Box color={colors.grey[100]}>Dashboard</Box>
            </NavLink>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {data.map((item, index) => (
              <NavLink to={item.path} key={index} className={({isActive}) => isActive ? "activelink" : "link"} onClick={() => setSelected(item.name)}>
                <IconButton className="icon" pr='10px'>
                  {item.icon}
                </IconButton>
                <Box color={colors.grey[100]}>{item.name}</Box>
              </NavLink>
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {pages.map((item, index) => (
              <NavLink to={item.path} key={index} className={({isActive}) => isActive ? "activelink" : "link"} onClick={() => setSelected(item.name)}>
                <IconButton className="icon" pr='10px'>
                  {item.icon}
                </IconButton>
                <Box color={colors.grey[100]}>{item.name}</Box>
              </NavLink>
            ))}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            {charts.map((item, index) => (
              <NavLink to={item.path} key={index} className={({isActive}) => isActive ? "activelink" : "link"} onClick={() => setSelected(item.name)}>
                <IconButton className="icon" pr='10px'>
                  {item.icon}
                </IconButton>
                <Box color={colors.grey[100]}>{item.name}</Box>
              </NavLink>
            ))}
          </Box>
        )}
      </Box>
      {isCollapsed && (
        <IconButton onClick={() => setIsCollapsed(!isCollapsed)} sx={{backgroundColor: colors.primary[400]}} >
          <DoubleArrowSharpIcon />
        </IconButton>
      )}
    </Box>
  );
};

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const SideBar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h3" color={colors.grey[100]}>
//                   ADMINIS
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <img
//                   alt="profile-user"
//                   width="100px"
//                   height="100px"
//                   src={`../../assets/react.svg`}
//                   style={{ cursor: "pointer", borderRadius: "50%" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography
//                   variant="h2"
//                   color={colors.grey[100]}
//                   fontWeight="bold"
//                   sx={{ m: "10px 0 0 0" }}
//                 >
//                   Ed Roh
//                 </Typography>
//                 <Typography variant="h5" color={colors.greenAccent[500]}>
//                   VP Fancy Admin
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Data
//             </Typography>
//             <Item
//               title="Manage Team"
//               to="/team"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Contacts Information"
//               to="/contacts"
//               icon={<ContactsOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Invoices Balances"
//               to="/invoices"
//               icon={<ReceiptOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Pages
//             </Typography>
//             <Item
//               title="Profile Form"
//               to="/form"
//               icon={<PersonOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Calendar"
//               to="/calendar"
//               icon={<CalendarTodayOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="FAQ Page"
//               to="/faq"
//               icon={<HelpOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Charts
//             </Typography>
//             <Item
//               title="Bar Chart"
//               to="/bar"
//               icon={<BarChartOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Pie Chart"
//               to="/pie"
//               icon={<PieChartOutlineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Line Chart"
//               to="/line"
//               icon={<TimelineOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Geography Chart"
//               to="/geography"
//               icon={<MapOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

export default SideBar;
