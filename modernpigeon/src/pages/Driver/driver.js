import React from 'react';
import DropOff from './dropOff';
import PickUp from './pickUp';

class Driver extends React.Component {


    // driver page
    // look through all packages and find ones that are On the way
    // display the pick up address in a table according to delivery driver
    render() {
        return (
        <div>
            <h1>Packages For Pickup</h1>
            <PickUp />
            <h1>Packages For Drop Off</h1>
            <DropOff />
        </div>
        );
    }

}
export default Driver;