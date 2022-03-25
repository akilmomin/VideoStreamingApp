import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DataGrid } from '@material-ui/data-grid';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import NotesIcon from '@material-ui/icons/Notes';
import MoreIcon from '@material-ui/icons/More';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params:any) =>
          `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    {
        field: 'select',
        headerName: 'Select',
        type: 'string',
        width: 150,
        renderCell: (params:any) =>
        <NotesIcon onClick={()=> rowSelection(params.getValue('id'))} />,
    },
];
const rowSelection = (id: any) => {
    console.log(id);
}
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const useStyles = makeStyles((theme) => ({

    formControl: {
        minWidth: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    SearchDiv: {
        margin: theme.spacing(3)
    },
    TextField: {
        width: '100%'
    },
    buttonDiv: {
        '& > *': {
            margin: theme.spacing(1),
          },
    },
    buttonDivLeft: {
        float: 'right',
        '& > *': {
            margin: theme.spacing(1),
          },
    }
}));
export default function SearchWO() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: any) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <React.Fragment>
            <div className={classes.SearchDiv}>
                <p className={"heading"}> Work Orders</p><br />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <TextField className={classes.TextField} id="standard-basic" label="WO Number" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField className={classes.TextField} id="standard-basic" label="Contractor" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField className={classes.TextField} id="outlined-search" label="Location" type="search" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Priority</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Priority"
                                inputProps={{
                                    name: 'Priority',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>High</option>
                                <option value={20}>Medium</option>
                                <option value={30}>Low</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Suburb</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Suburb"
                                inputProps={{
                                    name: 'Suburb',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
                            <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Status"
                                inputProps={{
                                    name: 'Status',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={6}>
                            <br />
                <div className={classes.buttonDiv}>
                            <Button variant="outlined">Clear</Button>
                            <Button variant="contained" className={'searchButton'}>
                                Search
                                </Button>
                </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <br />
                <div className={classes.buttonDivLeft}>
                        
                            <Button variant="contained">
                                New Work Order
                                </Button>
                </div>
                        </Grid>
                    </Grid>
            </div>
            <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
                <DataGrid rows={rows} autoPageSize columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination {...rows} />
            </div>


        </React.Fragment>
    );
}