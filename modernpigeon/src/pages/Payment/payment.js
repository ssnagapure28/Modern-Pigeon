import { useState } from 'react';
import '../Payment/payment.css';
import StripeContainer from '../Payment/StripeContainer';
import MPGif from '../../images/MPGif.gif';
function Payment() {
  const [showItem, setShowItem] = useState(false);
  
  return (
    <div className="Payment">
		<div class="logogif">
			<img src={MPGif}  alt="logo"/>
			</div>
			{showItem ? ( 
				<StripeContainer />
			) : (
				<>
					<h3>$18.14</h3>
					
					<button onClick={() => setShowItem(true)}>Purchase Package</button>
				</>
			)}
    </div>
  );
			
}

export default Payment;