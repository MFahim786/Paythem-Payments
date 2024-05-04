import React, { useEffect } from 'react';

const SalesInvoice = () => {
  useEffect(() => {
    const loadScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.unipaas.com/embedded-ui.js';
      script.async = true;
      script.onload = () => {
        const config_invoice = {
          mode: 'create', 
          customer: {
            reference: '1234567', 
            name: 'John Doe', 
            email: 'john@email.com',
          },
          invoice: {
            reference: 'INV-123',
          }
        }; // UNIPaaS Components Invoice config type
        const invoice = window.unipaas.components.create("invoice", config_invoice);
        invoice.mount("#invoice");
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div id="invoice">
        
    </div>
  );
};

export default SalesInvoice;
