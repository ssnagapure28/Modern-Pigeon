import React from 'react';
import {TextField, Button, Select, MenuItem, InputLabel, FormControl, Box} from '@mui/core';
import Stack from '@mui/material/Stack';

const Ship = () => {
  const [country, setCountry] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [length, setLength] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [deliveryService, setDeliveryService] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleClick = () => {
    // get values from text fields and select fields and store them in variables (this.state)
  }
  
  return (
    // create form to input country, name, addresss, email, and phone number
    // after hitting next button, create form to input weight, height, width, length, delivery service, and from and to
    // after hitting next button, create form to input payment information
    // after hitting next ask to sign in or create an account and display tracking number
    <div>
        <Box style={{
          paddingTop: '10%',
          paddingLeft: "20%",
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <div style={{
            border: '2px solid black',
            borderRadius: '10px',
            padding: '20px',
            width: '500px',
          }}>
          <h1>Enter international addresses or ZIP codes to get a quote.</h1>
          <p style={{
            fontSize: '15px',
            fontStyle: 'italic',
          }}>*Required Fields</p>
          <FormControl >
            <Stack spacing={2} style={{
              width: '500px',
              position: 'relative',
              }}>
              <InputLabel id="demo-simple-select-label">Delivery Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="select-delivery-service"
                label="DeliveryService"
                value={deliveryService}
                onChange={(e) => setDeliveryService(e.target.value)}
              >
                <MenuItem value={"Basic"}>Basic</MenuItem>
                <MenuItem value={"Premium"}>Premium</MenuItem>
                <MenuItem value={"Ultra"}>Ultra</MenuItem>
              </Select>
                <TextField id="ship-from" label="Ship From*" variant="outlined" value={from} onChange={(e) => setFrom(e.target.value)}/>
                <TextField id="ship-to" label="Ship To*" variant="outlined" value={to} onChange={(e) => setTo(e.target.value)}/>
              </Stack>
              <Stack >
                {/* add two textfield that are side by side */}
                <div style={{display: 'flex', flexDirection: 'row', width: '50x'}}>
                  <TextField id="weight" label="Weight (lbs)*" variant="outlined" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                  <TextField id="height" label="Height (in)*" variant="outlined" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                </Stack>
                <Stack >
                <div style={{display: 'flex', flexDirection: 'row', width: '50x'}}>
                  <TextField id="length" label="Length (in)*" variant="outlined" value={length} onChange={(e) => setLength(e.target.value)}/>
                  <TextField id="width" label="Width (in)*" variant="outlined" value={width} onChange={(e) => setWidth(e.target.value)}/>
                </div>
            </Stack>
            <Button variant="contained" color="primary" onClick={handleClick()} style={{
            width: '500px',
            marginTop: '20px',
            }}>Next</Button>
          </FormControl>
          </div>
        </Box>
    </div>
    );
  };
  
export default Ship;