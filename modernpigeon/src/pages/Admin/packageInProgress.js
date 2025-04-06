import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { forceAllPackageDataUpdateState, allPackageDataQuery,trackingNumbersState, trackingDataQuery, deliveryDriversQuery, packageDataState, deliveryDriverListState } from '../../recoil/globalState';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, TextField, MenuItem } from '@mui/material';
import DriverMenu from './driverMenu';


function PackageInProgress() {

    const [forceAllPackageDataUpdate, setForceAllPackageDataUpdate] = useRecoilState(forceAllPackageDataUpdateState);
    // const allPackageData = useRecoilValue(allPackageDataQuery);
    const [allPackageData, setAllPackageData] = useRecoilState(packageDataState);
    const [trackingNumbers, setTrackingNumbers] = useRecoilState(trackingNumbersState);
    const trackingData = useRecoilValue(trackingDataQuery);
    // const deliveryDrivers = useRecoilValue(deliveryDriversQuery);
    const [deliveryDrivers, setDeliveryDrivers] = useRecoilState(deliveryDriverListState);
    const [selectedDriver, setSelectedDriver] = React.useState('');

    const handleForceAllPackageDataUpdate = () => {
        setForceAllPackageDataUpdate(forceAllPackageDataUpdate + 1);
        allPackageData.forEach((packageData) => {
            setTrackingNumbers(trackingNumbers => [...trackingNumbers, packageData.trackingNumber]);
        }
        );
    }

    const handleDriverUpdate = (event) => {
        // get driver from select
        // hit api to update driver
        // change selected driver in table
        setSelectedDriver(event.target.value);
        console.log(event.target.value);
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
                            <TableCell align="right">Estimated Delivery</TableCell>
                            <TableCell align="right">Delivery Driver</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allPackageData.filter((row) => (
                            row.status === "On the way"
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
                                <TableCell align="right">{row.estimatedDelivery}</TableCell>
                                <TableCell align="right">
                                    <DriverMenu />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </div>
     </div>
      );
    }

    export default PackageInProgress;