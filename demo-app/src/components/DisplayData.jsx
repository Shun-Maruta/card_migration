import React, { useState } from 'react';

const DisplayData = () => {
    const [data, setData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            processCSV(text);
        };

        reader.readAsText(file);
    };

    const processCSV = (str) => {
        const rows = str.split('\n');
        const result = rows.map(row => row.split(','));
        setData(result);
    };

    return (
        <div>
            <h1>CSV File Upload</h1>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            <div>
                {data.map((row, index) => (
                    <div key={index}>
                        {row.map((col, i) => (
                            <span key={i}>{col} </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DisplayData;