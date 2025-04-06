import { Button, Table, TableCell, TableContainer, TextField, TableRow, TableHead, TableBody, Paper } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { deliveryDriverListState } from "../../recoil/globalState";

function EmployeeSearch() {
    const [deliveryDriverList, setDeliveryDriverList] = useRecoilState(deliveryDriverListState);
    const [currList, setCurrList] = React.useState(deliveryDriverList);

    const searchForEmployee = () => {
        let search = document.getElementById("empSearch").value;
        let searchResults = [];
        deliveryDriverList.forEach((driver) => {
            if (driver.name.includes(search)) {
                searchResults.push(driver);
            }
        });
        setCurrList(searchResults);
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
                <TextField placeholder="Search employee name" id="empSearch" key="empSearch"></TextField>
                <Button onClick={searchForEmployee}>Search</Button>
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
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {currList.map((deliveryDriver) => (
                        <TableRow>
                            <TableCell>
                                <p>{deliveryDriver.name}</p>
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

export default EmployeeSearch;