// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';
// import logo from '../images/XM.png'


// export default function ButtonAppBar() {
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', color: 'black' }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <IconButton
//               size="large"
//               edge="start"
//               color="black"
//               aria-label="menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'block', sm: 'none' },
//               }}
//               onClick={toggleDrawer}
//             >
//               <MenuIcon />
//             </IconButton>
         
//             <Typography variant="h6" component="div">
//             <img src={logo}></img>
//             </Typography>
//           </div>

//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,marginLeft:"16rem"}}>
//             <Button
//               color="inherit"
//               sx={{
//                 display: { xs: 'none', sm: 'block' }
//               }}
//             >
//               Services
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 display: { xs: 'none', sm: 'block' }
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 display: { xs: 'none', sm: 'block' }
//               }}
//             >
//               Portfolio
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 display: { xs: 'none', sm: 'block' }
//               }}
//             >
//               Jobs
//             </Button>
//           </div>

//           <Button variant="contained" sx={{display: { xs: 'none', sm: 'block',  marginRight: '4rem', borderRadius: '20px' } }}>
//           Contact Us
//           </Button>
          
//         </Toolbar>
//       </AppBar>
//       <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 250 }} role="presentation">
//         {/* <Typography variant="h6" sx={{ my: 2, marginLeft:'2rem' }}>
//        <img src={logo} height={40} width={40}></img>
//        </Typography> */}
//           <List>
//             <ListItem button>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="About Us" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Services" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Portfolio" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Jobs" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// }




































import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../images/XM.png';


  const drawerWidth = 240;
const navItems = ['Services', 'About Us', 'Portfolio', 'jobs', <Button variant="contained" sx={{borderRadius: '20px'}}>Contact Us</Button>];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <img src={logo} height={30} width={40} ></img>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
<Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"#FFF"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <img src={logo} height={40} width={40}></img>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
    </div>
  );
}

Header.propTypes = {
 
  window: PropTypes.func,
};

export default Header;