import React from 'react';
import PackageInProgress from './packageInProgress';
import PackagePast from './packagePast';
import DeliveryServices from './deliveryServices';
import EmployeeSearch from './employeeSearch';

function Admin() {

  return (
    <div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '10px',
            padding: '10px',
          }}>
            <h1> Packages In Progress </h1>
            <PackageInProgress />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '10px',
            padding: '10px',
          }}>
            <h1> Past Packages </h1>
            <PackagePast />
          </div>
          {/* add another div with header Delivery Services */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '10px',
            padding: '10px',
          }}>
            <h1> Delivery Services </h1>
            <DeliveryServices />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '50%',
            height: '100%',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius: '5px',
            margin: '10px',
            padding: '10px',
          }}>
            <h1> Employee Search </h1>
            <EmployeeSearch />
          </div>
        </div>
    </div>
  );
}

export default Admin;