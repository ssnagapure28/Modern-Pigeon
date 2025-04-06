import React, { Component } from 'react';
import '../ship.css';
import Results from '../results';
import { calculate_shipping } from '../main';


//results.js displays the bottom part Shipping Info and Cost
//ship.js takes input from the user for calculation and the input is the above part of the page
//main.js has the algorithm for cost calculation as per input
//input_radio is for the 5,3,2 day input after click
//quote.js is the payment page and ship.css is the css file for quote.js


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      shipping_speed: '5',
      weight_lbs: '0',
      weight_kgs: '0',
      departure_date: '',
      arrival_date: '',
      cost: '0'
    };
    this.updateResults = this.updateResults.bind(this);
  };

  updateResults(e, type) {
    const current_weight = (type === 'weight') ? e.target.value : this.state.weight_lbs;
    const current_speed = (type === 'speed') ? e.target.value : this.state.shipping_speed;

    const {
      weight_kgs,
      weight_lbs, 
      shipping_speed,
      departure_date,
      arrival_date,
      cost
    } = calculate_shipping(current_weight, current_speed);

    this.setState({
      shipping_speed: shipping_speed,
      weight_lbs: weight_lbs,
      weight_kgs: weight_kgs,
      departure_date: departure_date,
      arrival_date: arrival_date,
      cost: cost
    });
  }
//   

  render() {
    return (


      <section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
       
        <h1 ><br></br><center>Billing Details</center></h1>
        <form>
          <div> 
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John Doe"></input>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="andy@gmail.com"></input>
            </div>
            <h3>Payment</h3>
             <label >Accepted Cards <i class="fa fa-credit-card" > </i></label>
             <div class="icon-container">
                      <i class="fa fa-cc-visa" ></i>&nbsp;
                      <i class="fa fa-cc-mastercard" ></i>&nbsp;
                      <i class="fa fa-cc-amex" ></i>&nbsp;
                      <i class="fa fa-cc-discover" ></i>&nbsp;
            </div>
            <label for="cname">Name on Card&nbsp;</label>
                    <input type="text" id="cname" name="cardname" placeholder="John D"></input><br></br>
                    <label for="ccnum">Credit card number&nbsp;</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input><br></br>
                    <label for="expiry">Expiry&nbsp;</label>
                    <input type="text" id="expiry" name="expiry" placeholder="MM/YY">
                    </input>
            <div class="row">
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="3 digits"></input>
              </div>
              <div class="col-50">
              <label for="zip">ZIP</label>
                <input type="text" id="zip" name="zip" placeholder="Code"></input>
              </div>
            </div>

        <br></br>
        <input type="submit" value="Continue to checkout" class="btn"></input>
          <br></br>
          <label htmlFor="shipping_weight">Weight </label>
          <input
            id="shipping_weight"
            type="number"
            placeholder="Weight of package in pounds"
            value={this.state.weight_lbs}
            onChange={ (event) => this.updateResults(event, 'weight') }
          />

          {/*<button type="button" id="submit_button">Calculate</button>*/}
        </form>
        <Results details={this.state}/>

      </section>

    );

  }
}
export default App
/*export default GoogleApiWrapper({
  apiKey: ('AIzaSyBnLWo48tN34z1eTPLPJ0Ig4rO53QNMXzo')
})(App)

//For Google Api Wrapper */
