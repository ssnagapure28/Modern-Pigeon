import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { forceAllPackageDataUpdateState,trackingNumbersState, trackingDataQuery, packagePastState } from '../../recoil/globalState';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function PackagePast() {

    const [forceAllPackageDataUpdate, setForceAllPackageDataUpdate] = useRecoilState(forceAllPackageDataUpdateState);
    // const allPackageData = useRecoilValue(allPackageDataQuery);
    const [allPackageData, setAllPackageData] = useRecoilState(packagePastState);
    const [trackingNumbers, setTrackingNumbers] = useRecoilState(trackingNumbersState);
    const trackingData = useRecoilValue(trackingDataQuery);

    const handleForceAllPackageDataUpdate = () => {
        setForceAllPackageDataUpdate(forceAllPackageDataUpdate + 1);
        allPackageData.forEach((packageData) => {
            setTrackingNumbers(trackingNumbers => [...trackingNumbers, packageData.trackingNumber]);
        }
        );
    }

      return (
     <div>
        <Button onClick={handleForceAllPackageDataUpdate}>Refresh</Button>
          <div style={{
                display: 'flex',
                flexDirection: 'row',
          }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* add table cell for delivery driver, cost, delivery service, estimated delivery, from, to*/}
                            <TableCell align="right">Tracking Number</TableCell>
                            <TableCell align="right">Delivery Service</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">Destination</TableCell>
                            <TableCell align="right">Date Received</TableCell>
                            <TableCell align="right">Delivery Driver</TableCell>
                            <TableCell align="right">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allPackageData.filter((row) => (
                            row.status === "Delivered"
                        )).map((row) => (
                            <TableRow
                                key={row.trackingNumber}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.trackingNumber}
                                </TableCell>
                                <TableCell align="right">{row.deliveryService}</TableCell>
                                <TableCell align="right">{row.from}</TableCell>
                                <TableCell align="right">{row.to}</TableCell>
                                <TableCell align="right">{row.dateReceived}</TableCell>
                                <TableCell align="right">{row.deliveryDriver}</TableCell>
                                <TableCell align="right">{row.rating}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </div>
     </div>
      );
    }

    export default PackagePast;