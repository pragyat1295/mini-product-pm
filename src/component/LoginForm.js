import React, { useState } from 'react';


function LoginForm({ Login, error }) {

    const [loginDetails, setloginDetails] = useState({id: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();

        Login(loginDetails);
    } 

  return (
    <div>
        <h2 className = 'center' style = {{marginTop: '10%'}}>Login to NxtWave</h2>
        <div>
            <h4 className = 'center' style = {{color: 'red'}}>
                {error}
            </h4>
        </div>
        <div style = {{width: '50%', margin: '5% 20%'}}>
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
  )
}

export default LoginForm