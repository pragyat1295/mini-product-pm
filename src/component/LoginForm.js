import React, { useState } from 'react';
import '../style/login.css';
import loginImg from '../image/login/login_img.jpg';
import logo from '../image/header/pm_logo.webp';


function LoginForm({ Login, error }) {

    const [loginDetails, setloginDetails] = useState({id: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        Login(loginDetails);
    } 

  return (
    <div className='layout'>
        
        <div className='formContainer'>
            <div className = 'row'>
                {/* Login details */}
                
                <div className = 'col-12 col-lg-6'>
                    <div className='center img_properties' >
                        <img src= {logo} height = {80} width = {80} alt = '../'/>
                    </div>
                    <h2 className = 'center head_product' >Login to Pm products</h2>
                    <div>
                        <h4 className = 'center' style = {{color: 'red'}}>
                            {error}
                        </h4>
                    </div>
                    <div style = {{width: '90%', margin: '5%'}}>
                        <div className = 'mb-3 center'>
                            <input type = 'text' className='form-control' placeholder='your id' id = 'id' 
                            value={loginDetails.id}
                            onChange= {e => setloginDetails({...loginDetails, id: e.target.value})} />
                        </div>

                        <div className = 'mb-3 center'>
                            <input type = 'password' className='form-control' placeholder='password is 123' 
                            id = 'password' value = {loginDetails.password}
                            onChange= {e => setloginDetails({...loginDetails, password: e.target.value})}/>
                        </div>
                        <div className = 'mb-3 center'>
                            <button className = 'btn btn-primary' onClick={submitHandler}>Login</button>
                        </div>
                    </div>
                </div>

                <div className = 'col-12 col-lg-6 d-none d-xl-block'>
                    <img src = {loginImg} height = {500} width = {400}  alt = '../'/>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default LoginForm