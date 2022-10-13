import React, { useState, useEffect } from 'react';
import styles from '../styles/users.module.scss';

import { Navbar, SideBar, UserCards, Filter, UserPopUp } from '../components';

import { Stack, Table, TableBody, TableCell, Typography, TableHead, TableRow, Popover, TablePagination, Grid } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { HEADER } from "../testdata";
import { addDataToLocalStorage } from '../data';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createTheme } from '@mui/material/styles';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';






const theme = createTheme({

  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#545F7D',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  }
});



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.common.white,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Users:React.FC = () => {
 
// local storage
  const [Data, setData] = useState<string[]>([]);
  
  const setDataToStorage = async () => {
    try {
      const d = await addDataToLocalStorage();
      localStorage.setItem('data', JSON.stringify(d));
    } catch (error) {
      console.log(error)
    }
  }

  const arrayOfData = localStorage.getItem('data');
  const user = arrayOfData !== null ? JSON.parse(arrayOfData) : []

  
  useEffect(() => {
    setDataToStorage();
  }, []);

  // pagination

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // popover

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      <Navbar/>
    
      <Stack direction='row' style={{ background:'#E5E5E5', width:'100%', display:'flex', flexDirection:'row' }}>     
         
            <SideBar />
        
          <div className={styles.mainContainer}>
              <div className={styles.wrapper}>
                <span>User</span>
                <div className={styles.box}>
                  <UserCards />
                </div>

                <Table aria-label="collapsible table" className={styles.tb}>
                  <TableHead className={styles.th}>
                    <TableRow>
                    {HEADER?.map((header:any, index:any) => (
                      <StyledTableCell key={index}>
                        <Grid container>
                          <Grid item lg={10}>
                            {header}
                          </Grid>
                          <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState: any) => (
                              <div>
                                
                                <Grid item lg={2}>
                                <FilterListIcon  {...bindTrigger(popupState)}/>
                                </Grid>
                                <Popover
                                  {...bindPopover(popupState)}
                                  anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                  }}
                                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                  }}
                                >
                                  <Filter/>
                                </Popover>
                              </div>
                            )}
                          </PopupState>     
                        </Grid>
                      </StyledTableCell>
                      ))}
                    </TableRow>
                    
                  </TableHead>
                  <TableBody>
                    {user?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((user:any, index:any) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell>
                          {user.orgName}
                        </StyledTableCell>
                        <StyledTableCell>
                          {user.userName}
                        </StyledTableCell>
                        <StyledTableCell>
                          {user.email}
                        </StyledTableCell>
                        <StyledTableCell>
                          {user.phoneNumber}
                        </StyledTableCell>
                        <StyledTableCell>
                          {user.createdAt}
                        </StyledTableCell>
                        <StyledTableCell>
                          {user.status}
                        </StyledTableCell>
                        <StyledTableCell>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState: any) => (
                              <div>
                                
                                <Grid item lg={2}>
                                <MoreVertIcon  {...bindTrigger(popupState)}/>
                                </Grid>
                                <Popover
                                  {...bindPopover(popupState)}
                                  anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                  }}
                                  transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                  }}
                                >
                                  <UserPopUp/>
                                </Popover>
                              </div>
                            )}
                          </PopupState>     
                          
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10,15,20]}
                    component="div"
                    count={user.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />

              </div>
          </div>
      </Stack>
    </>
  )
}

export default Users

