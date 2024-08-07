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
                options={csvData.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="freeSolo" />}
                onChange={onSelectedUserChange}
            />
        </Stack>
    );
}

export default SelectTargetUser

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//     { title: 'The Shawshank Redemption', year: 1994 },
//     { title: 'The Godfather', year: 1972 },
//     {
