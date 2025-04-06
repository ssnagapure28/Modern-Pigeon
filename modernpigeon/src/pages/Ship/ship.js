import React, { Component } from 'react';
import '../../App.css';
import Results from '../results';
import InputRadio from '../input_radio';
import { calculate_shipping } from '../main';


//import {Routes, Route, useNavigate} from 'react-router-dom'; 

/*
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
*/
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      /* //for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat:  39.17287482872525,
        lng:  -86.52274734723373,
       for maps */
      shipping_speed: '5',
      weight_lbs: '0',
      weight_kgs: '0',
      departure_date: '',
      arrival_date: '',
      cost: '0',
      ty: 'ultra'
    };
    this.updateResults = this.updateResults.bind(this);
  }
/*For Maps 
handleChange = address => {
  this.setState({ address });
}

handleSelect = address => {
  this.setState({ address });
  geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(latLng => {
      console.log('Success', latLng);

      // update center state
      this.setState({ mapCenter: latLng });
    })
    .catch(error => console.error('Error', error));
};
*/ 
  updateResults(e, type) {
    const current_weight = (type === 'weight') ? e.target.value : this.state.weight_lbs;
    const current_speed = (type === 'speed') ? e.target.value : this.state.shipping_speed;

    const {
      weight_kgs,
      weight_lbs,
      shipping_speed,
      departure_date,
      arrival_date,
      cost,
      ty
    } = calculate_shipping(current_weight, current_speed);

    this.setState({
      shipping_speed: shipping_speed,
      weight_lbs: weight_lbs,
      weight_kgs: weight_kgs,
      departure_date: departure_date,
      arrival_date: arrival_date,
      cost: cost,
      ty:ty
    });
  }

  render() {
    return (
      /* <section><div id='googleMaps'>
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Source...',
                      className: 'location-search-input',
                    })}

                  />
                  <br></br>
                  <input
                    {...getInputProps({
                      placeholder: 'Destination...',
                      className: 'location-search-input',
                    })}

                  />
                  
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            
                    <div >
            <Map
              google={this.props.google}
              initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }}
              zoom={80}
              center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }}
            >
              <Marker 
                position={{
                  lat: this.state.mapCenter.lat,
                  lng: this.state.mapCenter.lng
                }} />
            </Map>
            </div>
          </div></section>*/
      <section>
        <h1 ><br></br><center></center>Let's Send your Package easy</h1>
        <form>
          <label htmlFor="shipping_weight">Weight of package in pounds</label>
          <input
            id="shipping_weight"
            type="number"
            placeholder="Weight of package in pounds"
            value={this.state.weight_lbs}
            onChange={ (event) => this.updateResults(event, 'weight') }
          />
          <label htmlFor="radio_buttons">Shipping speed</label>
          <ul id="radio_buttons">
            <InputRadio updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="  5" />
            <InputRadio updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="  3" />
            <InputRadio updateResults={this.updateResults} shipping_speed={this.state.shipping_speed} days="  2" />
          </ul>
          {/*<button type="button" id="submit_button">Calculate</button>*/}
        </form>
        <Results details={this.state}/>
        <button type="button" id="pay_button" ><a href='/payment'>Pay</a></button>
      </section>
      
    );
  }
}

export default App
/*export default GoogleApiWrapper({
  apiKey: ('AIzaSyBnLWo48tN34z1eTPLPJ0Ig4rO53QNMXzo')
})(App)

//For Google Api Wrapper */