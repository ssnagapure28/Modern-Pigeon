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

function DriverMenu () {


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
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedDriver}
    label="Delivery Driver"
    onChange={handleDriverUpdate}
    style={{
        width: '100%',
    }}
>
    {deliveryDrivers.map((driver) => (
        <MenuItem key={driver+Date.now()} value={driver.name}>{driver.name}</MenuItem>
    ))}
    </Select>
  );
}

export default DriverMenu;