// import React, { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'application/javascript';
//     script.src = 'https://cdn.unipaas.com/onboarding-sandbox.js';
//     script.async = true;
//     script.onload = () => {
//       window.unipaas.onboarding.create(
//         {
//           accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOltdLCJ2ZW5kb3JJZCI6IjY1ZmMwNTkyZDFjNGM2YTlhNDY3NjNkMSIsIm1lcmNoYW50SWQiOiI2NWY2ZTg3MjY5NGY0MzViYzRmZTRhNmIiLCJlbnYiOiJzYW5kYm94IiwiaWF0IjoxNzEyMjQ4MDIyLCJleHAiOjE3MTIzMzQ0MjJ9.sWemILUC9JcfR9d1vUEZGmQpFigSmVZCdLbcnDQTrZ4',
//           selector: '.app-main',
//         },
//         callback
//       );
//     };
//     document.body.appendChild(script);

//     const callback = (data) => {
//       console.log('Callback', data);
//       // Handle callback data if needed
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>Your Platform - Onboarding</h1>
//       <div className="app-main"></div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './Css/Home.css'; // Assuming you have a CSS file for styling
// Import the component you want to render conditionally
import Onboarding from './VenderOnbording';
import venderOnbording from './services/vendoronbording';

const App = () => {
  const [vendorId, setInputValue] = useState('');
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
    <div className="app-main-n">
      <div className="center">
        <input
          type="text"
          value={vendorId}
          onChange={handleInputChange}
          placeholder="Please Enter Vendor id."
        />
        <button onClick={handleSaveButtonClick}>Save</button>
      </div>

      {/* Conditionally render AnotherComponent when showAnotherComponent is true */}
      <div className='vendor-onbording'>
      {showAnotherComponent && <Onboarding authToken={authToken}/>}
      </div>
    </div>
  );
};

export default App;

