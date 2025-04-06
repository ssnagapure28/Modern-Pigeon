import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B39330',
        height: 'auto',
        width: '100%',
        marginTop: '5%',
      }}>
        {/* add links to other pages on left side of footer */}
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '25%',
            }}>
                <p> <a href="/home">Home</a> </p>
                <p> <a href="/about">About</a> </p>
                <p> <a href="/track-package">Track a package</a> </p>
                <p> <a href="/ship">Place a shipment</a> </p>
                <p> <a href="/sign-in">Sign in/up</a> </p>
            </div>
            {/* add social media links to right side of footer */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '25%',
            }}>
                <p> <a href="facebook.com">Facebook</a> </p>
                <p> <a href="instagram.com">Instagram</a> </p>
                <p> <a href="twitter.com">Twitter</a> </p>
            </div>
            {/* add name of website and copyright */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '25%',
            }}>
                <p>Modern Pigeon</p>
                <p>© 2021</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;