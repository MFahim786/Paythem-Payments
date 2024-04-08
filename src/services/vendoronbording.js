import axios from "axios";

const venderOnbording = async ({vendorId}) => {
    console.log('createPaymentRequest',vendorId);
    try {
        // Data to be sent to UNIPaaS server
        const requestData = {
            
                "scopes": ["onboarding_write"],
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
    
        // Send the response from UNIPaaS server to your app
        console.log(response.data); // Access the parsed JSON data from the response
        return response.data; // Return the parsed JSON data
      } catch (error) {
        console.error('Error sending data to UNIPaaS:', error.message);
        throw error; // Throw the error to handle it elsewhere
      }
};

export default venderOnbording;
