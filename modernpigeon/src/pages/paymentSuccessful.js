import React from 'react';
import MPGif from '../images/MPGif.gif';
import './paymentSuccessful.css'
function paySuccessful() {
return (
	
	<div>
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"></link>
	<link rel="stylesheet" type="text/css" href="css/style.css"></link>
		
		<div class="section">
		<div class="container">
			
			<div class="content-section" >
				<div class="title">
					<h1>Payment Successful</h1>
				</div>
				<br></br>
				<div class="content">
					<h3>Thanks for choosing Modern Pigeon</h3>
					<p>Your payment for $18.42 has been recieved successfully. The reciept has been sent on your mail.</p>
					<br></br>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			
			<div class="image-section">
			<img src={MPGif}  alt="logo"/>
			</div>
		</div>
	</div>

	</div>
	
	
	
	
);
};

export default paySuccessful;
