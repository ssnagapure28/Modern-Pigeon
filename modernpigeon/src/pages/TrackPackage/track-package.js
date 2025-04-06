import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { trackingDataQuery, packageDataState, trackingNumbersState, forcePackageDataUpdateState, userLoggedInState } from '../../recoil/globalState';
import { useRecoilState, useRecoilValue } from 'recoil';
import PackagesTable from './PackagesTable';

function TrackPackage() {

  const [trackingNumbers, setTrackingNumbers] = useRecoilState(trackingNumbersState);
  const [forcePackageDataUpdate, setForcePackageDataUpdate] = useRecoilState(forcePackageDataUpdateState);
  const [userLoggedIn, setUserLoggedIn] = useRecoilState(userLoggedInState);

  const handleTrackingNumberChange = () => {
    // set the tracking number state to the value of the input
    setTrackingNumbers(trackingNumbers => [...trackingNumbers, document.getElementById('trackingNumberInput').value]);
    setForcePackageDataUpdate(forcePackageDataUpdate + 1);
  }

  return (
    <div>
    <div
      style={{
        display: 'flex',
        height: 'auto',
      }}
    >
      {/* center header */}
      <h1 style={{
        margin: 'auto',
        textAlign: 'center',
        fontSize: '40px',
      }}>Track my current packages</h1>
      {/* text input field with track button next to it */}
      </div>
      <div style={{
        margin: 'auto',
        textAlign: 'center',
        width: '50%',
        height: 'auto',
        paddingTop: '30px',
      }}>
        <input type="text" id="trackingNumberInput" placeholder="Enter your tracking number" style={{
          width: '80%',
          height: '50px',
          fontSize: '25px',
        }}/>
        </div>
        <div style={{
          margin: 'auto',
          textAlign: 'left',
          paddingLeft: '9.5%',
          width: '50%',
        }}>
        <button style={{
          height: '70%',
          width: '40%',
          fontSize: '25px',
        }} onClick={handleTrackingNumberChange}>Track</button>
      </div>
      <div style={{
        margin: 'auto',
        marginTop: '50px',
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        paddingTop: '.0000001%',
        backgroundColor: 'silver',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
      }}>
        <p style={{
          textAlign: 'left',
          paddingLeft: '10%',
        }}>
          <LocalShippingIcon style={{
            fontSize: '500%'
          }}/>
        </p>
        <h1 style={{
          fontSize: '20px',
          textAlign: 'left',
          paddingLeft: '9.5%',
        }}>Recently Tracked</h1>
       {/* if user logged in display <p> hi user </p> else display <p> log in </p> */}
        {userLoggedIn ? <p>Hi user</p> :  <p style={{
          textAlign: 'left',
        }}>
          {/* link to go to sign in page */}
          <a href="/sign-in" style={{
            fontSize: '20px',
            textAlign: 'left',
            paddingLeft: '9.5%',
          }}>Sign in</a> or <a href="/sign-up" style={{
            fontSize: '20px',
            textAlign: 'left',
          }}>create an account</a> to view and save your recent tracking history.
        </p>}
        <PackagesTable />
      </div>
    </div>
  );
};
  
export default TrackPackage;