import React from 'react';
import MPGif from '../images/MPGif.gif';
import './about.css'
function AnnualReport() {
return (
	
	<div>
		<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"></link>
	<link rel="stylesheet" type="text/css" href="css/style.css"></link>
		
		<div class="section">
		<div class="container">
			
			<div class="content-section" >
				<div class="title">
					<h1>About Us</h1>
				</div>
				<br></br>
				<div class="content">
					<h3>What do we do?</h3>
					<p>We are the number 1 Package Delivery Service</p>
				
					<h3>Who are the Board Members?</h3>
					<p>Siddhant Godshalwar<br></br>Animesh Dhole<br></br>Tyler Rowe<br></br>Navyasree<br></br>Aazin Shaikh</p>
					<h3>Why Us?</h3>
					<p>Your messenger pigeon of the current day delivers your packages quicker, safer, and more conveniently</p>
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

export default AnnualReport;
