import React, { useEffect } from 'react';

const PayPortal = ({ authToken }) => {
  useEffect(() => {
    const authToken = localStorage.getItem('accessToken');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.unipaas.com/embedded-ui.js';
    script.async = true;
    script.onload = () => {
      const components = window.unipaas.components('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsib25ib2FyZGluZ193cml0ZSIsInBheW91dF93cml0ZSIsImV3YWxsZXRfd3JpdGUiLCJwYXlvdXRfd3JpdGUiLCJsaW5rX3dyaXRlIiwib25ib2FyZGluZ193cml0ZSIsIm5vdGlmaWNhdGlvbl93cml0ZSIsImNvbmZpZ19yZWFkIiwiZGlyZWN0X2RlYml0X3dyaXRlIiwiZXdhbGxldF9yZWFkIiwicHVibGljX2NvbmZpZ19yZWFkIiwibGlua19yZWFkIiwib25ib2FyZGluZ19yZWFkIiwibm90aWZpY2F0aW9uX3JlYWQiLCJjb25maWdfcmVhZCIsInB1YmxpY19jb25maWdfcmVhZCIsIm9uYm9hcmRpbmdfcmVhZCIsImNvbmZpZ19yZWFkIiwibm90aWZpY2F0aW9uX3JlYWQiLCJwdWJsaWNfY29uZmlnX3JlYWQiLCJvbmJvYXJkaW5nX3dyaXRlIiwiZGlyZWN0X2RlYml0X3dyaXRlIl0sInZlbmRvcklkIjoiNjVmYmY0NTBkMWM0YzYxNGNlNjc2M2JkIiwibWVyY2hhbnRJZCI6IjY1ZjZlODcyNjk0ZjQzNWJjNGZlNGE2YiIsImVudiI6InNhbmRib3giLCJpYXQiOjE3MTQ4NDkzMzUsImV4cCI6MTcxNDkzNTczNX0.8zyigG3_laeLtIK-2IZ_Nyl1EGFRcsDe6UW2JjhZPZM');
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

