import React, {Component} from 'react';
export class Forgot extends Component{

    handleSubmit = e => {
        e.preventDefault();

    };

    render(){
        return (
            <div className="auth-form-container">
                <h2>Forgot Password</h2>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
    
        
