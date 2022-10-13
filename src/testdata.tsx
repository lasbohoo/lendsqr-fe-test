import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';


import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';


import { Circles,Fees,Service,Active,View,Blacklist } from '../src/assets';

import styles from './styles/sidebar.module.scss'



export const CUSTOMERS = [
    {
        name:'Users',
        image:<GroupIcon/>,
        cName: `${styles.navText}`,
        path:'#'       
    },

    {
        name:'Guarantors',
        image:<GroupsIcon/>,
        cName: `${styles.navText}`,
        path:'#'       
    },

    {
        name:'Loans',
        image:<img src={Circles}/>, 
        cName: `${styles.navText}`,
        path:'#'      
    },

    {
        name:'Decision Models',
        image:<HandshakeOutlinedIcon/>,   
        cName: `${styles.navText}`,
        path:'#'    
    },

    {
        name:'Savings',
        image:<SavingsOutlinedIcon/>,   
        cName: `${styles.navText}`,
        path:'#'    
    },
    {
        name:'Loan Requests',
        image:<VolunteerActivismIcon/>,  
        cName: `${styles.navText}`,
        path:'#'    
    },
    {
        name:'Whitelist',
        image:<GroupAddIcon/>,  
        cName: `${styles.navText}`,
        path:'#'     
    },
    {
        name:'Karma',
        image:<PersonRemoveIcon/>,  
        cName: `${styles.navText}`,
        path:'#'     
    },

]

export const BUSINESSES = [
    {
        name:'Organization',
        image:<BusinessCenterIcon />,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Loan Products',
        image:<VolunteerActivismIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Savings Products',
        image:<SavingsOutlinedIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Fees and Charges',
        image:<img src={Fees}/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Transactions',
        image:<AccountBalanceWalletOutlinedIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Services',
        image:<img src={Service}/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Service Account',
        image:<ManageAccountsIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Settlements',
        image:<ReceiptLongIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Reports',
        image:<SignalCellularAltIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
]

export const SETTINGS = [
    {
        name:'Preferences',
        image:<TuneOutlinedIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
    {
        name:'Fees and Pricing',
        image:<PercentOutlinedIcon/>,
        cName: `${styles.navText}`,
        path:'#'
    },
    {
        name:'Audit Logs',
        image:<AssignmentIcon/>,
        cName: `${styles.navText}`,
        path:'#'

    },
]


export const DATA = [
    {
        id:'1',
        organization:'MTN',
        username:'King Lee',
        email:'kinglee@gmail.com',
        phone_number: '09053624501',
        date_joined:'2002',
        status:'inactive'
    }
]

export const HEADER = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status"
]

export const MORE = [
    {
        icon:<img src={View} />,
        text:"View Details"
    },
    
    {
        icon:<img src={Blacklist} />,
        text:"Activate User"
    },
    {
        icon:<img src={Active} />,
        text:"Blacklist User"
    },
]