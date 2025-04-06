import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { deliveryServicesQuery, forceDeliveryServicesUpdateState, trackingNumbersState, trackingDataQuery, deliveryServicesState } from '../../recoil/globalState';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function DeliveryServices() {
    // populate table with delivery services
    // add button to add delivery service
    // add button to edit delivery service
    // add button to delete delivery service

    const [forceDeliveryServicesUpdate, setForceDeliveryServicesUpdate] = useRecoilState(forceDeliveryServicesUpdateState);
    const [deliveryServices, setDeliveryServices] = useRecoilState(deliveryServicesState);


    const handleForceDeliveryServicesUpdate = () => {
        setForceDeliveryServicesUpdate(forceDeliveryServicesUpdate + 1);
    }

    const handleServiceDelete = (service) => {
        // delete service from database
        // update deliveryServices
        // update forceDeliveryServicesUpdate
        // find index of service in deliveryServices array and remove it
        const index = deliveryServices.indexOf(service);
        const newArray = [...deliveryServices];
        if (index > -1) {
            newArray.splice(index, 1);
        }
        setDeliveryServices(newArray);
        setForceDeliveryServicesUpdate(forceDeliveryServicesUpdate + 1);
    }

    const handleServiceEdit = (service) => {
        // edit service in database
        // update deliveryServices
        // update forceDeliveryServicesUpdate
        const newServiceArr = [...deliveryServices];
        const index = newServiceArr.indexOf(service);
        newServiceArr[index] = {
            name: document.getElementById(service.name).value,
            cost: document.getElementById(service.name+"cost").value,
            speed: document.getElementById(service.name+"speed").value,
        }
        setDeliveryServices(newServiceArr);
        setForceDeliveryServicesUpdate(forceDeliveryServicesUpdate + 1);
    }

    const handleServiceAdd = () => {
        // add service to database
        // update deliveryServices
        // update forceDeliveryServicesUpdate
        let newService = {
            name: document.getElementById('addServiceName').value,
            cost: document.getElementById('addCost').value,
            speed: document.getElementById('addSpeed').value,
        }
        document.getElementById('addServiceName').value = '';
        document.getElementById('addCost').value = '';
        document.getElementById('addSpeed').value = '';
        setDeliveryServices(deliveryServices => [...deliveryServices, newService]);
        setForceDeliveryServicesUpdate(forceDeliveryServicesUpdate + 1);
    }       

    const handleAllowEdit = (service) => {
        // allow editing of service
        document.getElementById(service.name).disabled = false;
        document.getElementById(service.name+"cost").disabled = false;
        document.getElementById(service.name+"speed").disabled = false;
    }

    return (
        <div>
            <Button onClick={handleForceDeliveryServicesUpdate}>Refresh</Button>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* add table cell for delivery service, cost, speed, and delete button*/}
                                <TableCell align="right">Delivery Service</TableCell>
                                <TableCell align="right">Cost</TableCell>
                                <TableCell align="right">Speed</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                                <TableCell align="right">Save</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {deliveryServices.map((row) => (
                                // change id to service name
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" readOnly={true} >
                                        <TextField id={row.name} defaultValue={row.name} key={row.name} disabled={true} />
                                    </TableCell>
                                    <TableCell align="right" readOnly={true}>
                                        <TextField id={row.name+"cost"} defaultValue={row.cost} key={row.name+"cost"} disabled={true} />
                                    </TableCell>
                                    <TableCell align="right" readOnly={true} >
                                        <TextField id={row.name+"speed"} defaultValue={row.speed} key={row.name+"speed"} disabled={true} />    
                                    </TableCell>
                                    {/* add table cell called edit that makes each tableCell in this row readOnly={false} */}
                                    <TableCell align="right">
                                        <Button onClick={() => handleAllowEdit(row)}>Edit</Button>
                                    </TableCell>
                                    <TableCell align="right"><Button onClick={() => handleServiceDelete(row)}> <RemoveIcon /> </Button></TableCell>
                                    <TableCell align="right"><Button onClick={() => handleServiceEdit(row)}>Save</Button></TableCell>
                                </TableRow>
                            ))}
                            {/* add service */}
                            <TableRow
                                key="addService"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <TextField id="addServiceName" label="Delivery Service" variant="outlined" />
                                </TableCell>
                                <TableCell align="right"><TextField id="addCost" label="Cost" variant="outlined" /></TableCell>
                                <TableCell align="right"><TextField id="addSpeed" label="Speed" variant="outlined" /></TableCell>
                                <TableCell align="right"><Button onClick={handleServiceAdd}> <AddIcon /> </Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default DeliveryServices;