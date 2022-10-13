import React from 'react';
import '../styles/Filter.scss';

import { Box,InputLabel,MenuItem,FormControl,Stack }from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Filter:React.FC = () => {
    const [org, setOrg] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOrg(event.target.value as string);
    };

    const handleStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string);
    };
  return (
    <>
        <form className='container'>
            
            <FormControl sx={{ minWidth: 200 }} className='select'>
                <InputLabel id="demo-simple-select-label">organization</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={org}
                label="organization"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div className='input'>
                <label>User</label>
                <input type='text' placeholder='User' name='q'/>
            </div>
            <div className='input'>
                <label>Email</label>
                <input type='text' placeholder='Email' name='q'/>
            </div>
            <div className='input'>
                <label>Date</label>
                <input type='text' placeholder='Date' name='q'/>
            </div>
            <div className='input'>
                <label>Phone Number</label>
                <input type='text' placeholder='Date' name='q'/>
            </div>
            <FormControl sx={{ minWidth: 200 }} className='select'>
                <InputLabel id="demo-simple-select-label">status</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="status"
                onChange={handleStatus}
                >
                <MenuItem value={10}>Inactive</MenuItem>
                <MenuItem value={20}>Active</MenuItem>
                <MenuItem value={30}>Blacklisted</MenuItem>
                <MenuItem value={40}>Pending</MenuItem>
                </Select>
            </FormControl>
            <Box>
                <Stack direction="row" spacing={2}>
                    <button className='resetBtn'>Reset</button>
                    <button className='filterBtn'>Filter</button>
                </Stack>
            </Box>
        </form>
    </>
  )
}

export default Filter