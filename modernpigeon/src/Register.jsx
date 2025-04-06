import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [acType, setType] = useState('');
    //const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [passwordError, setPasswordErr] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordInput, setPasswordInput]= useState({
    password:'',
    confirmPassword:''
    })

    const handlePasswordChange =(evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;
        const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
        setPasswordInput(NewPasswordInput);
        
    }
    const handleValidation= (evnt)=>{
        const passwordInputValue = evnt.target.value.trim();
        const passwordInputFieldName = evnt.target.name;

        if(passwordInputFieldName==='password'){
            const uppercaseRegExp   = /(?=.*?[A-Z])/;
            const lowercaseRegExp   = /(?=.*?[a-z])/;
            const digitsRegExp      = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp   = /.{8,}/;
            const passwordLength =      passwordInputValue.length;
            const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
            const digitsPassword =      digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
            let errMsg ="";
            if(passwordLength===0){
                    errMsg="Password is empty";
            }else if(!uppercasePassword){
                    errMsg="At least one Uppercase";
            }else if(!lowercasePassword){
                    errMsg="At least one Lowercase";
            }else if(!digitsPassword){
                    errMsg="At least one digit";
            }else if(!specialCharPassword){
                    errMsg="At least one Special Characters";
            }else if(!minLengthPassword){
                    errMsg="At least minumum 8 characters";
            }else{
                errMsg="";
            }
            setPasswordErr(errMsg);
            }
            // for confirm password
            if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
                    
                if(passwordInput.confirmPassword!==passwordInput.password)
                {
                setConfirmPasswordError("Confirm password is not matched");
                }else{
                setConfirmPasswordError("");
                }
                
            }
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" placeholder="Full Name" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="radio_buttons">Account Type</label>
            <input value={acType} onChange={(e) => setType(e.target.value)}type="acType" placeholder="Customer/Driver/Admin" id="acType" name="acType" />
            <label htmlFor="password">Password</label>
            <input value={passwordInput.password} onChange={handlePasswordChange} onKeyUp={handleValidation} type="password" placeholder="********" id="password" name="password"/>
            {passwordError}
            <label htmlFor="password">Confirm password</label>
            <input value={passwordInput.confirmPassword} onChange={handlePasswordChange} onKeyUp={handleValidation} type="password" placeholder="********" id="confirmPassword" name="confirmPassword"/>
            {confirmPasswordError}
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}