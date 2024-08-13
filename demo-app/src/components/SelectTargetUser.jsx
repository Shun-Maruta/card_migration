import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SelectTargetUser = ({csvData,setSelectedUser}) => {
    const onSelectedUserChange = (event, value) => {
        setSelectedUser(value);
    }
    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                id="free-solo-demo"
                options={csvData.map((option) => option.Name)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
                onChange={onSelectedUserChange}
            />
        </Stack>
    );
}

export default SelectTargetUser