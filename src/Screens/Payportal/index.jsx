import React, { useEffect } from 'react';

const PayPortal = ({ authToken }) => {
  useEffect(() => {
    const authToken = localStorage.getItem('accessToken');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.unipaas.com/embedded-ui.js';
    script.async = true;
    script.onload = () => {
      const components = window.unipaas.components(authToken);
      const config = {
        theme: {
          colors: {
            primaryColor: '#2F80ED',
            secondaryColor: '#687B97',
            accentTextColor: '#2F80ED',
            primaryButtonColor: '#2F80ED',
          },
          fontFamily: 'inherit',
          boxShadow: '0px 3px 15px rgba(27, 79, 162, 0.11)',
        },
      };
      const payPortal = components.create('payPortal', config);
      payPortal.mount('#pay_portal');
      components.on('sessionExpired', () => {
        console.log('the session is expired');
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="pay_portal"></div>
  );
};

export default PayPortal;

