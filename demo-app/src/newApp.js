import { useState, useEffect } from 'react';
import Papa from "papaparse";
import SelectTargetUser from './components/SelectTargetUser';
import CopyButton from './components/CopyButton';
import csvFile from "./static/demo.csv"

const NewApp = () => {
    useEffect(() => {
        fetch(csvFile)
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    complete: (result) => {
                        setCsvData(result.data);
                    },
                    header: true,
                });
            });
    }, []);

    const [csvData, setCsvData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const filteredData = csvData.filter(data => (data.Name === selectedUser));

    return (
        <>
            <SelectTargetUser csvData={csvData} setSelectedUser={setSelectedUser}></SelectTargetUser>
            {filteredData.length > 0 ? (<CopyButton textToCopy={filteredData[0].ID}></CopyButton>) : (<p>ユーザーが選択されていません</p>)}
        </>

    )
}

export default NewApp;
