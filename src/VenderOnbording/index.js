import React, { useEffect } from 'react';
import '../Css/Home.css';
function Onboarding({authToken}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://cdn.unipaas.com/onboarding-sandbox.js';
    script.async = true;
    script.onload = () => {
      window.unipaas.onboarding.create(
        {
          accessToken:authToken, // Replace with your access token
          selector: '.app-main',
        },
        callback
      );
    };
    document.body.appendChild(script);

    const callback = (data) => {
      if (data.status === 'COMPLETED') {
        // Redirect to home page after onboarding completion
        window.location.href = 'https://your-platform.com/home';
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="app-main"></div>;
}

export default Onboarding;