import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import csvFile from "../static/demo.csv"

const ReadCSV = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    complete: (result) => {
                        setData(result.data);
                    },
                    header: true, // ヘッダーを認識してオブジェクトとしてデータを返す
                });
            });
        console.log(data);
    }, []);

    return (
        <div>
            <h1>CSVデータ</h1>
            <table>
                <thead>
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key, index) => (
                                <th key={index}>{key}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, i) => (
                                <td key={i}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReadCSV
