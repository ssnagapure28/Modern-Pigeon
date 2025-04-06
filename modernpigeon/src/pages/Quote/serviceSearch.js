import { MenuItem, Select, TableContainer, TableRow, TableHead, Table, TableCell, Paper, TableBody } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { deliveryServicesState } from '../../recoil/globalState';

function ServiceSearch() {

    const [serviceList, setServiceList] = useRecoilState(deliveryServicesState);
    const [services, setServices] = React.useState(serviceList);
    const [selectedSort, setSelectedSort] = React.useState("popular");

    const reorderServices = (event) => {
        console.log("reorderServices");
        setSelectedSort(event.target.value);
        let newServices = [];
        if (event.target.value === "popular") {
            newServices = serviceList;
        } else if (event.target.value === "alphabetical") {
            newServices = serviceList.slice().sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (event.target.value === "price") {
            newServices = serviceList.slice().sort((a, b) => {
                if (a.cost < b.cost) {
                    return -1;
                } else if (a.cost > b.cost) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (event.target.value === "volume") {
            newServices = serviceList.slice().sort((a, b) => {
                if (a.volume > b.volume) {
                    return -1;
                } else if (a.volume < b.volume) {
                    return 1;
                } else {
                    return 0;
                }
            });
        } else if (event.target.value === "speed") {
            newServices = serviceList.slice().sort((a, b) => {
                if (a.speed < b.speed) {
                    return -1;
                } else if (a.speed > b.speed) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        setServices(newServices);
    }


  return (
    <div>
      {/* display list of services */}
      {/* able to search through list */}
      {/* div with drop down menu for sort by volume, cost, or speed*/}
      <div>
            {/* two divs side by side */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "10px",
            }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedSort}
                    label="Sort By"
                    onChange={reorderServices}
                    style={{
                        width: '100%',
                    }}
                >
                    <MenuItem value={"popular"}>Popular</MenuItem>
                    <MenuItem value={"alphabetical"}>Alphabetical</MenuItem>
                    <MenuItem value={"price"}>Price</MenuItem>
                    <MenuItem value={"volume"}>Volume</MenuItem>
                    <MenuItem value={"speed"}>Speed</MenuItem>
                </Select>
            </div>
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
                        <TableCell>Service</TableCell>
                        <TableCell align="right">Volume</TableCell>
                        <TableCell align="right">Cost</TableCell>
                        <TableCell align="right">Speed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => (
                        <TableRow
                        key={service.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {service.name}
                        </TableCell>
                        <TableCell align="right">{service.volume}</TableCell>
                        <TableCell align="right">{service.cost}</TableCell>
                        <TableCell align="right">{service.speed}</TableCell>
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

export default ServiceSearch;