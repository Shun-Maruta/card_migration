import { useState } from 'react';
import './App.css';
// import DisplayData from './components/DisplayData';
import InputData from './components/InputData';
import SelectTargetUser from './components/SelectTargetUser';

const App = () => {
	const [csvData, setCsvData] = useState([]);
	const [selectedUser,setSelectedUser] = useState(null);

	return (
		<>
			<InputData setCsvData={setCsvData}></InputData>
			{csvData.length > 0 && <SelectTargetUser csvData={csvData} selectedUser={selectedUser} setSelectedUser={setSelectedUser}></SelectTargetUser>}
			{/* {csvData.length > 0 && csvData[1][1]}
			{csvData.length > 0 && csvData.length} */}
			test<br />
			{selectedUser}
			{csvData.filter(data)=>(data.name===selectedUser)}
			{/* <SelectTargetUser selectedUser={selectedUser} setSelectedUser={setSelectedUser}></SelectTargetUser> */}
		</>

	)
}

export default App;
