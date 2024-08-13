import { useState } from 'react';
import './App.css';
// import DisplayData from './components/DisplayData';
import InputData from './components/InputData';
import SelectTargetUser from './components/SelectTargetUser';
import ImageUploader from './components/ImageUploader';
import CopyButton from './components/CopyButton';
import ReadCSV from './components/ReadCSV';

const App = () => {
	const [csvData, setCsvData] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	const filteredData = csvData.filter(data => (data.name === selectedUser));
	const [images, setImages] = useState([]);

	return (
		<>
			<ReadCSV></ReadCSV>
			<InputData setCsvData={setCsvData}></InputData>
			{csvData.length > 0 ? (<SelectTargetUser csvData={csvData} selectedUser={selectedUser} setSelectedUser={setSelectedUser}></SelectTargetUser>) : (<p>csvデータが入力されていません</p>)}<br />
			{/* {filteredData[0].id} */}
			{filteredData.length > 0 ? (<CopyButton textToCopy={filteredData[0].id}></CopyButton>) : (<p>ユーザーが選択されていません</p>)}
			{/* {filteredData.length > 0 ? (<p>{filteredData[0].id}</p>) : (<p>ユーザーが選択されていません</p>)}
			<ImageUploader images={images} setImages={setImages}></ImageUploader> */}
			{/* <SelectTargetUser selectedUser={selectedUser} setSelectedUser={setSelectedUser}></SelectTargetUser> */}
		</>

	)
}

export default App;
