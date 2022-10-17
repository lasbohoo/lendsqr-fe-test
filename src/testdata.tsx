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


import { Circles,Fees,Service,Active,View,Blacklist,ActiveUsers,AllUsers,LoanUsers,SavingUsers } from '../src/assets';

import styles from './styles/sidebar.module.scss'



export const CUSTOMERS = [
    {
        name:'Users',
        image:<GroupIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'       
    },

    {
        name:'Guarantors',
        image:<GroupsIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'       
    },

    {
        name:'Loans',
        image:<img src={Circles}/>, 
        cName: `${styles.menuItem}`,
        path:'#'      
    },

    {
        name:'Decision Models',
        image:<HandshakeOutlinedIcon/>,   
        cName: `${styles.menuItem}`,
        path:'#'    
    },

    {
        name:'Savings',
        image:<SavingsOutlinedIcon/>,   
        cName: `${styles.menuItem}`,
        path:'#'    
    },
    {
        name:'Loan Requests',
        image:<VolunteerActivismIcon/>,  
        cName: `${styles.menuItem}`,
        path:'#'    
    },
    {
        name:'Whitelist',
        image:<GroupAddIcon/>,  
        cName: `${styles.menuItem}`,
        path:'#'     
    },
    {
        name:'Karma',
        image:<PersonRemoveIcon/>,  
        cName: `${styles.menuItem}`,
        path:'#'     
    },

]

export const BUSINESSES = [
    {
        name:'Organization',
        image:<BusinessCenterIcon />,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Loan Products',
        image:<VolunteerActivismIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Savings Products',
        image:<SavingsOutlinedIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Fees and Charges',
        image:<img src={Fees}/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Transactions',
        image:<AccountBalanceWalletOutlinedIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Services',
        image:<img src={Service}/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Service Account',
        image:<ManageAccountsIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Settlements',
        image:<ReceiptLongIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Reports',
        image:<SignalCellularAltIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
]

export const SETTINGS = [
    {
        name:'Preferences',
        image:<TuneOutlinedIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'

    },
    {
        name:'Fees and Pricing',
        image:<PercentOutlinedIcon/>,
        cName: `${styles.menuItem}`,
        path:'#'
    },
    {
        name:'Audit Logs',
        image:<AssignmentIcon/>,
        cName: `${styles.menuItem}`,
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
        text:"View Details",
        path:'/user/1'
    },
    
    {
        icon:<img src={Blacklist} />,
        text:"Activate User",
        path:'#'
    },
    {
        icon:<img src={Active} />,
        text:"Blacklist User",
        path:'#'
    },
]


export const CARD = [
    {
        img:<img src={AllUsers} alt='all-users'/>,
        text:"Users",
        amount:"2,453"
    },
    {
        img:<img src={ActiveUsers} alt='all-users'/>,
        text:"Active Users",
        amount:"2,453"
    },
    {
        img:<img src={LoanUsers} alt='all-users'/>,
        text:"Users with Loans",
        amount:"12,453"
    },
    {
        img:<img src={SavingUsers} alt='all-users'/>,
        text:"Users with Savings",
        amount:"102,453"
    },
]