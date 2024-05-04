// Login.js

import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
// import authService from '../../services/authService';
import '../../Css/login.css'; 
import venderOnbording from '../../services/vendoronbording';
const Login = () => {
  const [vendorId, setUsername] = useState('');
  const [authToken, setAuthToken] = useState('');
  console.log(authToken,"+++++++++++++");
  const [loading, setLoading] = useState(false); 
   const navigate=useNavigate();
  
   
   const handlleLogin = async (e) => {
    e.preventDefault();
    console.log("chlaa")
    try {
     const response = await venderOnbording({vendorId});
     console.log("Response is",response?.accessToken);
     
    
     if(response?.accessToken){
      localStorage.setItem('accessToken', response?.accessToken);
      navigate('/Dashboard')
     alert('Login Successful')
     }
    //   console.log(res);
    } catch (error) {
      console.error(error);
      alert('Enter Correct Password & Username')
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">Login</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={vendorId}
          onChange={(e) => setUsername(e.target.value)}
        />
     
        <button className="login-button" onClick={handlleLogin}>
          Login
        </button>
      </form>
    
    </div>
  );
};

export default Login;
