import React, { useEffect } from 'react';

const NotificationIcon = () => {
  useEffect(() => {
    const loadScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.unipaas.com/embedded-ui.js';
      script.async = true;
      script.onload = () => {
        const config_notif = {
          icon: {
            url: 'https://cdn.unipaas.com/img/bell-icon.svg', 
            size: 30 
          }
        }; 
        const notification = window.unipaas.components.create("notification", config_notif);
        notification.mount("#notification");
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div id="notification" style={{ width: '30px', height: '30px' }}></div>
  );
};

export default NotificationIcon;
