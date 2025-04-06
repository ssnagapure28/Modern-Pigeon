import React from 'react';

const Results = (props) => {
 
    const {
      weight_lbs,
      weight_kgs,
      shipping_speed,
      departure_date,
      arrival_date,
      cost,
      ty
    } = props.details;

    return (
      <ul id="shipping_information">
        <li><strong>Shipping:</strong>
          <ul>
            <li className="weight"><b>Type:</b> {shipping_speed} day {ty}</li>
            <li className="weight"><strong>Departing: </strong>{departure_date}</li>
            <li className="weight"><strong>Arriving: </strong>{arrival_date}</li>
          </ul>
        </li>
        <li><strong>Weight:</strong>
          <ul>
            <li className="weight">{weight_kgs} Kilograms</li>
            <li className="weight">{weight_lbs} Pounds</li>
          </ul>
        </li>
        
        <center className="weight"><strong>Cost: </strong>{cost}</center>
        
      </ul>
      
      /*
         function ActionLink() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  
}
      */
    );
};

export default Results;