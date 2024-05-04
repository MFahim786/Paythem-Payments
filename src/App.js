import React, { useState } from 'react';
import './Css/Home.css'; 
import Onboarding from './Screens/VenderOnbording';
import venderOnbording from './services/vendoronbording';
import PayPortal from './Screens/Payportal';
import NotificationIcon from './Screens/Notificationes';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
const App = () => {
  const [vendorId, setInputValue] = useState('65fc0592d1c4c6a9a46763d1');
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveButtonClick =async () => {
 
    console.log("Input value:", );
    const response = await venderOnbording({vendorId});
    try{
     console.log("Response is",response?.accessToken);
     setAuthToken(response?.accessToken)
     setShowAnotherComponent(true);
    }catch(e){
      console.log(e);
    }
    
  };

  return (
    <BrowserRouter>
    {/* <div className="app-main-n">
      <div className="center">
        <input
          type="text"
          value={vendorId}
          onChange={handleInputChange}
          placeholder="Please Enter Vendor id."
        />
        <button onClick={handleSaveButtonClick}>Save</button>
      </div>


      <div className='vendor-onbording'>
      {showAnotherComponent && <PayPortal authToken={authToken}/>}
      </div>
    </div> */}
    <Navigation/>
    </BrowserRouter>
  );
};

export default App;

