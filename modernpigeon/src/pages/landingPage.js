import React from 'react';
import worldAtNight from '../images/world-at-night.jpg';
import deliveryDrone from '../images/deliveryDrone.webp';
import packageStack from '../images/PackageStack.jpg';
import Footer from '../components/footer';

class LandingPage extends React.Component {

    // track button click function
    /*trackButtonClick() {
        console.log("track button clicked");
    }

    signUpButtonClick() {
        console.log("signUp button clicked");
    }*/
    
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <div style={{
            position: 'relative',
            textAlign: 'center',
            color: 'white',
        }}>
            <img src={worldAtNight} style={{
                height: '50vh',
                width: '100%',
            }} alt="LandingPage"/>
            <div style={{
                  position: 'absolute',
                  top: '30%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
            }}>
                <h1>Modern Pigeon</h1>
                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}>Your messenger pigeon of the current day delivers your packages quicker, safer, and more conveniently</p>
            </div>
        </div>
        <div style={{
            marginTop: '-.0000001%',
            paddingTop: '40px',
            backgroundColor: '#B39330',}}
        >
            <p style={{
                position: 'relative',
                textAlign: 'center',
                fontSize: '30px',
            }}>You've got packages. We can get them there.</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div style={{width: '75%'}}>
                    <p style={{
                        position: 'relative',
                        textAlign: 'center',
                        fontSize: '25px',
                    }}>
                        Welcome, Siddhant(Customer)
                    </p>
                    <div style={{
                        position: 'relative',
                        textAlign: 'center'
                    }}>
                        <button id='signUpButton' style={{
                            height: '50px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            border: '1px solid black',
                            padding: '10px',
                            backgroundColor: '#C80000',
                            cursor: 'pointer',
                        }}><a href="/sign-in">Account :</a></button>
                    </div>
                </div>
                <img src={packageStack} style={{
                    height: '25vh',
                    width: '60%',
                }} alt="LandingPage"/>
                <div style={{width: '75%'}}>
                <p style={{
                        position: 'relative',
                        textAlign: 'center',
                        fontSize: '25px',
                    }}>
                        Want to ship a package?
                    </p>
                    <div style={{
                        position: 'relative',
                        textAlign: 'center',
                    }}>
                        <button id='signUpButton' style={{
                            height: '50px',
                            fontSize: '20px',
                            borderRadius: '5px',
                            border: '1px solid black',
                            padding: '10px',
                            backgroundColor: '#C80000',
                            cursor: 'pointer'
                        }}><a href="/ship">Ship</a></button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '30px',
            paddingBottom: '30px',
            backgroundColor: 'white'
        }}>
            <img src={deliveryDrone} style={{
                height: '25vh',
                width: '25%',
                paddingLeft: '10%',
            }} alt="LandingPage"/>
            <div style={{width: '75%'}}>
                <h1 style={{
                    position: 'relative',
                    textAlign: 'center'
                }}>
                    Track your package
                </h1>
                <div style={{
                    position: 'relative',
                    textAlign: 'center'
                }}>
                    <input type="text" placeholder="Enter your tracking number" style={{
                        width: '50%',
                        height: '50px',
                        fontSize: '20px',
                        borderRadius: '5px',
                        border: '1px solid black',
                        padding: '10px',
                        marginRight: '10px',
                    }}/>
                    <button id='trackButton' style={{
                        height: '50px',
                        fontSize: '20px',
                        borderRadius: '5px',
                        border: '1px solid black',
                        padding: '10px',
                        backgroundColor: '#C80000',
                        cursor: 'pointer',
                    }}><a href="/track-package">Track</a></button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;