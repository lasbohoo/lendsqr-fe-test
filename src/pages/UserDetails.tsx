import React from 'react';
import '../styles/UserDetails.scss';

import { ArrowBack, ProfilePic, FilledStar, OutlinedStar } from '../assets';
import { Stack, Box, Typography,Tabs, Tab  } from '@mui/material';

import { Navbar, SideBar, UserInfo } from '../components';




interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  


const UserDetails:React.FC = () => {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };


    


  return (
    <>
        <Navbar />
        <Stack direction='row' style={{ background:'#E5E5E5', width:'100%', display:'flex', flexDirection:'row' }}>
            <div className='sidebar'>
                <SideBar/>
            </div>
            <div className='main-container'>
                <div className='wrapper'>
                    <i><img src={ArrowBack} alt='back' /></i><span>Back to Users</span>
                    <Stack direction='row' style={{ justifyContent:'space-between', width:'1037px' }}>
                        <h4>User Details</h4>
                        <div className='btn-wrapper'>
                            <button className='blacklistBtn'>
                                <span>Blacklist User</span>
                            </button>
                            <button className='activateBtn'>
                               <span>Activate User</span> 
                            </button>
                        </div>   
                    </Stack>
                    <Stack direction='column' className='main-header'>
                        <Stack direction='row' className='header'>
                            <div className='sub-header'>
                                <i><img src={ProfilePic} alt='avatar' /></i>
                                <div className='profileName'>
                                    <h3>Grace Effiom</h3>
                                    <h6>LSQFf587g90</h6>
                                </div>
                                <div className='user-tier'>
                                    <div style={{ marginBottom:'18px' }}>
                                        <h6>User’s Tier</h6>
                                        <Stack direction='row'>
                                            <img src={FilledStar} alt='filled'/>
                                            <img src={OutlinedStar} alt='outlined'/>
                                            <img src={OutlinedStar} alt='outlined'/>
                                        </Stack>
                                    </div>    
                                </div>
                                <div className='userAmount'>
                                    <h3>₦200,000.00</h3>
                                    <h6>9912345678/Providus Bank </h6>
                                </div>
                            </div>                               
                        </Stack>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', background:'#FFFFFF', width:'1037px' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="General Details" {...a11yProps(0)} />
                                    <Tab label="Documents" {...a11yProps(1)} />
                                    <Tab label="Bank Details" {...a11yProps(2)} />
                                    <Tab label="Loans" {...a11yProps(3)} />
                                    <Tab label="Savings" {...a11yProps(4)} />
                                    <Tab label="App and System" {...a11yProps(5)} />
                                </Tabs>
                            </Box>  
                    </Stack>
                    
                    <div style={{ width: '1037px',
                            background: '#FFFFFF',
                            border: '1px solid rgba(33, 63, 125, 0.06)',
                            boxShadow: '3px 5px 20px rgba(0, 0, 0, 0.04)',
                            borderRadius: '4px',
                            marginTop:'12rem' }}>
                       <TabPanel value={value} index={0}>
                            <UserInfo />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </div>
                </div>

            </div>
        </Stack>

    </>
  )
}

export default UserDetails