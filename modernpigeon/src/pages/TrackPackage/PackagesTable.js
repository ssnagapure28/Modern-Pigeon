import React from 'react';
import { trackingDataQuery, userLoggedInState, packageDataRecievedState } from '../../recoil/globalState';
import { useRecoilValue, useRecoilState } from 'recoil';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function PackagesTable() {

    const trackingData = useRecoilValue(trackingDataQuery);

  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tracking Number</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">Estimated Delivery</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trackingData.map((row) => (
                        <TableRow
                            key={row.trackingNumber}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.trackingNumber}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.currentLocation}</TableCell>
                            <TableCell align="right">{row.estimatedDelivery}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default PackagesTable;
    
    // <div style={{
    //     width: '80%',
    //     height: 'auto',
    //     margin: 'auto',
    //     borderColor: 'black',
    //     borderStyle: 'solid',
    //     borderWidth: '1px',
    //     textAlign: 'left',
    //     paddingTop: '30px',
    //     backgroundColor: 'white',
    //     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    //   }}>
    //     <div style={{
    //       flexDirection: 'row',
    //       padding: '10px',
    //     }}>
    //     <div style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //     }}>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Tracking Number</h2>
    //       </div>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Status</h2>
    //       </div>
    //     </div>
    //     <div style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //     }}>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Tracking Number</h2>
    //       </div>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Status</h2>
    //       </div>
    //     </div>
    //     <div style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //     }}>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Tracking Number</h2>
    //       </div>
    //       <div style={{
    //         width: '50%',
    //       }}>
    //         <h2 style={{
    //           fontSize: '20px',
    //         }}>Status</h2>
    //       </div>
    //       </div>
    //     </div>
    //   </div>