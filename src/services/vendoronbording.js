import axios from "axios";

const venderOnbording = async ({vendorId}) => {
    console.log('createPaymentRequest',vendorId);
    try {
        // Data to be sent to UNIPaaS server
        const requestData = {
            
                "scopes": ["portal_read","portal_write","onboarding_write","invoice_read","invoice_write","payout_write"],
                   "vendorId": vendorId,
    
        };
    
        // Make a POST request to UNIPaaS server
        const response = await axios.post('https://sandbox.unipaas.com/platform/authorize', requestData, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BoRhn2IG9BcMhxIVhWkKmA==' 
          }
        });
        console.log("---------", response.data);
        return response.data; 
      } catch (error) {
        console.error('Error sending data to UNIPaaS:', error.message);
        throw error; 
      }
};

export default venderOnbording;
