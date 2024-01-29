import React from 'react';
import { callBackendAPI } from '../api/backend_api_calls'; // Adjust the path according to your project structure

function SampleButton() {
    const handleClick = async () => {
        const data = await callBackendAPI();
        console.log(data); // Or handle the response data as needed
    };

    return (
        <div>
            <div>
                <h2>Hello World!  @Q</h2>
            </div>
            <button onClick={handleClick}>Call Backend</button>
        </div>
    );
}

export default SampleButton;