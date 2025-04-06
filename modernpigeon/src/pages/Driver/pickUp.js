import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { forceAllPackageDataUpdateState, allPackageDataQuery,trackingNumbersState, trackingDataQuery, deliveryDriversQuery, packageDataState, deliveryDriverListState } from '../../recoil/globalState';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function PickUp() {

    const [allPackageData, setAllPackageData] = useRecoilState(packageDataState);
    const [forceAllPackageDataUpdate, setForceAllPackageDataUpdate] = useRecoilState(forceAllPackageDataUpdateState);
    // make new array for all packages with status of Scheduled for pickup
    let scheduledForPickup = allPackageData.filter((packageData) => packageData.status === 'Scheduled for pickup');
    
    const handlePickUp = (data) => {
        let newArr = [...allPackageData];
        const packageId = data.trackingNumber;
        const packageIndex = newArr.findIndex((packageData) => packageData.trackingNumber === packageId);
        newArr[packageIndex] = {
            "from": allPackageData[packageIndex].from,
            "to": allPackageData[packageIndex].to,
            "dateSent": allPackageData[packageIndex].dateSent,
            "status": "On the way",
            "dateReceived": "",
            "weight": allPackageData[packageIndex].weight,
            "cost": allPackageData[packageIndex].cost,
            "trackingNumber": allPackageData[packageIndex].trackingNumber,
            "length": allPackageData[packageIndex].length,
            "width": allPackageData[packageIndex].width,
            "height": allPackageData[packageIndex].height,
            "estimatedDelivery": allPackageData[packageIndex].estimatedDelivery,
            "currentLocation": allPackageData[packageIndex].currentLocation,
            "deliveryService": allPackageData[packageIndex].deliveryService,
            "deliveryDriver": allPackageData[packageIndex].deliveryDriver,
            "rating": allPackageData[packageIndex].rating,
        };
        scheduledForPickup = newArr.filter((packageData) => packageData.status === 'Scheduled for pickup');
        setAllPackageData(newArr);
        setForceAllPackageDataUpdate(forceAllPackageDataUpdate + 1);
    }

    return (
        <div>
        <div>
          <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px",
          }}>
          {/* map serviceList */}
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                            <TableCell>Pickup Address</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {/* sort package data by driver, filter packageData by if status === Scheduled for pickup, display in table */}
                    {scheduledForPickup.map((data) => (
                            <TableRow>
                                <TableCell>
                                    <p>{data.deliveryDriver}</p>
                                </TableCell>
                                <TableCell>
                                    <p>{data.from}</p>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handlePickUp(data)}>
                                        Picked Up
                                    </Button>
                                </TableCell>
                            </TableRow>
                    ))}
                  </TableBody>
              </Table>
          </TableContainer>
          </div>
        </div>
      </div>
    );
}
export default PickUp;