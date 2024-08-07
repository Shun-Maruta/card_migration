const InputData = ({ setCsvData }) => {
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
        const rows = str.split('\n')
        const result = [];
        rows.slice(1).forEach(row => {
            const tuple = row.split(',');
            const data = { id: tuple[0], name: tuple[1] };
            result.push(data);
        });
        setCsvData(result);
    };


    return (
        <input type="file" accept=".csv" onChange={handleFileUpload} />
    )
}

export default InputData;