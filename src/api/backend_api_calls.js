export const callBackendAPI = async () => {
    try {
        const response = await fetch('http://localhost:7880/restfulapi/api/specific-function/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during API call:', error);
        return null;
    }
};