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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
        resizable: true,
        valueGetter: (params: any) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
];
//renderCell
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
    },
    dateField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '100%',
    },
}));
export default function Users() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
        selectedRow: [],
        showSearchDiv: false
    });

    const handleChange = (event: any) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const setSelection = (id: any) => {
        console.log(id);
        setState({
            ...state,
            selectedRow: id
        });
    }
    const showSearchDiv = () => {
        setState({
            ...state,
            showSearchDiv: !state.showSearchDiv
        });
    }
    return (
        <React.Fragment>
            <div className={classes.SearchDiv}>
                <div className={'headingDiv'}>
                    <span className={"heading"}> Users</span>
                    <ButtonGroup size="small" color="primary" aria-label="outlined primary button group" className={'floatRight'}>
                        <Button onClick={showSearchDiv}>
                            {state.showSearchDiv?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
                        </Button>
                        <Button startIcon={<AddIcon />}>New </Button>
                    </ButtonGroup>
                </div>
                {state.showSearchDiv &&(
                    <>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3}>
                        <TextField className={classes.TextField} id="standard-basic" label="WO Number" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField className={classes.TextField} id="standard-basic" label="Contractor" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="date"
                            variant="outlined"
                            // defaultValue="2017-05-24T10:30"
                            value={null}
                            className={classes.dateField}
                            InputLabelProps={{
                                shrink: true,
                                //   placeholder: false
                            }}
                        />
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
                    <Grid item xs={12} sm={12}>
                        <br />
                        <div className={classes.buttonDiv}>
                            <Button variant="outlined">Clear</Button>
                            <Button variant="contained" className={'searchButton'}>
                                Search
                                </Button>
                        </div>
                    </Grid>

                </Grid>
               </> )}
            </div>
            {state.selectedRow && state.selectedRow.length > 0 && (
                <div className="selectionDiv">
                    <Grid container spacing={1}>
                        <Grid item xs={8} sm={11}>
                            <div className={"floatRight selectedRowDiv"}>
                                {state.selectedRow.length} {state.selectedRow.length > 1 ? 'rows selected' : 'row selected'}
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={1}>
                            <div className={"floatLeft"}>
                                <IconButton aria-label="delete" color="secondary">
                                    <DeleteIcon />
                                </IconButton>
                                {state.selectedRow.length == 1 && (
                                    <IconButton aria-label="delete" >
                                        <EditIcon />
                                    </IconButton>
                                )}

                            </div>
                        </Grid>
                    </Grid>
                </div>
            )}
            <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
                <DataGrid
                    rows={rows}
                    checkboxSelection
                    autoPageSize
                    columns={columns}
                    onSelectionChange={(newSelection) => {
                        setSelection(newSelection.rowIds);
                    }}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination {...rows} />
            </div>


        </React.Fragment>
    );
}