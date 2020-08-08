import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Fab,
    Fade,
    FormControlLabel,
    Grid,
    IconButton,
    Paper,
    Popper,
    Slide,
    TextField as MuiTextField,
    useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { Fragment, useState } from 'react';
import CustomFileInput from '../fileupload/CustomFileInput';
import { toTitleString } from '../../lib/util';
import FormikGroupSelect from '../formik/FormikGroupSelect';
import FormikAutocomplete from '../formik/FormikAutocomplete';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const CustomPopupTable = ({
    options,
    columns,
    title,
    data,
    validationSchema,
    handleRowAdd,
    handleRowDelete,
    handleRowUpdate,
    initialValues,
    customActions,
    children,
    config,
}) => {
    let parsedColumns = transfromColumns(columns);
    const [openDialog, setOpenDialog] = useState({
        state: false,
        type: 'ADD',
        initialValues,
    });
    const [searchTable, setSearchTable] = useState('');
    const [sortBy, setSortBy] = useState({ name: 'name', asc: true });
    const [columnsToShow, setColumnsToShow] = useState(
        sortByColumnsOrder(Object.keys(parsedColumns)),
    );

    //Manage Popper State
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = newPlacement => event => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    let actions = ['edit', 'delete'];

    const getAction = (action, rowData) => {
        switch (action) {
            case 'edit':
                return (
                    <IconButton
                        color="primary"
                        onClick={() => {
                            setOpenDialog({
                                type: 'EDIT',
                                state: true,
                                initialValues: rowData,
                            });
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                );
            case 'delete':
                return (
                    <IconButton
                        onClick={async () => {
                            await handleRowDelete(rowData);
                        }}
                    >
                        <DeleteIcon style={{ color: 'rgb(232, 76, 119)' }} />
                    </IconButton>
                );
            case 'add':
                return (
                    <Fab
                        onClick={() => {
                            setOpenDialog({
                                type: 'ADD',
                                state: true,
                                initialValues: {},
                            });
                        }}
                        style={{ backgroundColor: '#cc7b33', color: 'white' }}
                    >
                        <AddIcon />
                    </Fab>
                );
        }
    };
    const handleClose = () => {
        setOpenDialog({ ...openDialog, state: false });
    };

    const handleToggleColumns = (value, colName) => {
        if (value) {
            setColumnsToShow(
                sortByColumnsOrder([...new Set(columnsToShow).add(colName)]),
            );
        } else {
            let $columnsToShow = new Set(columnsToShow);
            $columnsToShow.delete(colName);
            setColumnsToShow(sortByColumnsOrder([...$columnsToShow]));
        }
    };

    let sorted_data = data
        .sort((a, b) => {
            if (sortBy.asc) {
                return a[sortBy.name] > b[sortBy.name] ? -1 : 0;
            } else {
                return a[sortBy.name] < b[sortBy.name] ? -1 : 0;
            }
        })
        .filter(rowData => {
            for (const field in rowData) {
                if (
                    rowData[field]
                        .toString()
                        .toLowerCase()
                        .includes(searchTable)
                ) {
                    return true;
                }
            }
        });

    return (
        <Fragment>
            <Dialog
                fullScreen={fullScreen}
                open={openDialog.state}
                onClose={handleClose}
                // TransitionComponent={Transition}
            >
                <Formik
                    validationSchema={validationSchema}
                    initialValues={
                        openDialog.type === 'ADD'
                            ? initialValues
                            : openDialog.initialValues
                    }
                    onSubmit={async (values, actions) => {
                        try {
                            if (openDialog.type === 'ADD') {
                                await handleRowAdd(values);
                            } else {
                                await handleRowUpdate(
                                    values,
                                    openDialog.initialValues,
                                );
                            }
                            handleClose();
                        } catch (err) {
                            console.log(err);
                        }
                    }}
                >
                    {({ submitForm }) => {
                        return (
                            <Form>
                                <DialogTitle id="responsive-dialog-title">
                                    {openDialog.type +
                                        ' ' +
                                        title.toUpperCase()}
                                </DialogTitle>
                                <DialogContent>{children}</DialogContent>
                                <DialogActions>
                                    <Button
                                        onClick={() => submitForm()}
                                        color="primary"
                                        variant="contained"
                                        autoFocus
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        autoFocus
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Form>
                        );
                    }}
                </Formik>
            </Dialog>
            <Popper
                open={open}
                anchorEl={anchorEl}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper
                            style={{
                                display: 'grid',
                                padding: '0.5em 1em',
                                marginTop: '0.4em',
                                gridTemplateColumns: '1fr 1fr',
                            }}
                        >
                            {Object.keys(parsedColumns).map(key => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={new Set(columnsToShow).has(
                                                key,
                                            )}
                                            onChange={e =>
                                                handleToggleColumns(
                                                    e.target.checked,
                                                    key,
                                                )
                                            }
                                        />
                                    }
                                    label={key}
                                />
                            ))}
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {config.search && (
                        <MuiTextField
                            variant="outlined"
                            label="Search"
                            onChange={e =>
                                setSearchTable(e.target.value.toLowerCase())
                            }
                            fullWidth
                            classes={{ root: classes.search }}
                        />
                    )}
                </Grid>
                <Grid item xs={6}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        {config.filterColumns && (
                            <Button
                                onClick={handleClick('bottom-end')}
                                style={{ marginRight: '1em' }}
                                color="primary"
                                variant="contained"
                            >
                                View Columns
                            </Button>
                        )}
                        {config.add && getAction('add')}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                {columnsToShow.map(colName => (
                                    <th
                                        className={classes.th}
                                        style={{
                                            ...(parsedColumns[colName]
                                                ? parsedColumns[colName].styles
                                                : {}),
                                        }}
                                        onClick={() => {
                                            if (sortBy.name === colName) {
                                                setSortBy({
                                                    name: colName,
                                                    asc: !sortBy.asc,
                                                });
                                            } else {
                                                setSortBy({
                                                    name: colName,
                                                    asc: true,
                                                });
                                            }
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {parsedColumns[colName].label}
                                            {sortBy.name === colName &&
                                            sortBy.asc ? (
                                                <ArrowDropUpIcon />
                                            ) : (
                                                <ArrowDropDownIcon />
                                            )}
                                        </div>
                                    </th>
                                ))}
                                <th
                                    className={classes.th}
                                    // style={{ width: '120px' }}
                                >
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sorted_data.map(rowData => {
                                return (
                                    <tr className={classes.tr}>
                                        {columnsToShow.map(colName => {
                                            let cellData = columns.find(
                                                a => a.name == colName,
                                            );

                                            return RenderCell(
                                                cellData,
                                                rowData[colName],
                                                classes,
                                            );
                                        })}
                                        <td
                                            className={classes.td}
                                            style={{ width: '15%' }}
                                        >
                                            {customActions &&
                                                customActions.map(action =>
                                                    action(rowData),
                                                )}
                                            {config.actions &&
                                                actions.map(action =>
                                                    getAction(action, rowData),
                                                )}
                                        </td>
                                    </tr>
                                );
                            })}
                            {config.showTotalOfColumns && (
                                <tr className={classes.trTotal}>
                                    {columnsToShow.map((colName, index) => {
                                        if (index === 0) {
                                            return (
                                                <td className={classes.td}>
                                                    Total
                                                </td>
                                            );
                                        }
                                        let sumsOfCols = getSumOfCols(
                                            config.showTotalOfColumns,
                                            sorted_data,
                                        );
                                        if (sumsOfCols[colName]) {
                                            return (
                                                <td className={classes.td}>
                                                    {sumsOfCols[colName]}
                                                </td>
                                            );
                                        }
                                        // return RenderCell(cellData, rowData[colName], classes);
                                        return <td className={classes.td}></td>;
                                    })}
                                    <td className={classes.td}></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Grid>
            </Grid>
        </Fragment>
    );

    function sortByColumnsOrder(list) {
        return list.sort((a, b) =>
            parsedColumns[a].order < parsedColumns[b].order ? -1 : 0,
        );
    }
};

export const StyledCustomPopupTableField = ({
    type,
    fieldName,
    label,
    fieldProps,
    ...rest
}) => {
    switch (type) {
        case 'multiline':
            return (
                <Field
                    name={fieldName}
                    component={TextField}
                    label={label}
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    {...fieldProps}
                />
            );
        case 'image':
            return (
                <Field name={fieldName}>
                    {({ form: { setFieldValue, values } }) => {
                        return (
                            <CustomFileInput
                                fileName={
                                    values[fieldName]
                                        ? values[fieldName].name
                                        : ''
                                }
                                onChange={e => {
                                    setFieldValue(fieldName, e.target.files[0]);
                                }}
                            />
                        );
                    }}
                </Field>
            );
        case 'select':
            return (
                <Field
                    component={FormikSelect}
                    name={fieldName}
                    textField="name"
                    valueField="value"
                    options={rest.options}
                    fullWidth
                    label={label}
                    {...fieldProps}
                />
            );
        case 'nested-select':
            return (
                <Field
                    component={FormikGroupSelect}
                    name={fieldName}
                    options={rest.options}
                    fullWidth
                    label={label}
                    //accessor
                    textField="name"
                    valueField="id"
                    subCatFields="children"
                    header="name"
                    {...fieldProps}
                />
            );
        case 'auto-complete':
            return (
                <Field
                    component={FormikAutocomplete}
                    name={fieldName}
                    options={rest.options}
                    fullWidth
                    label={label}
                    //accessor
                    textField="name"
                    valueField="accountId"
                    header="header"
                    {...fieldProps}
                />
            );
        default:
            return (
                <Field
                    name={fieldName}
                    component={TextField}
                    label={label}
                    fullWidth
                    {...fieldProps}
                />
            );
    }
};

export const RenderCell = (cellData, data, classes) => {
    let { type, ...rest } = cellData;
// console.log("test",cellData)
    //Apply parser if applicable
    
    if (cellData.parser) {
        data = data!==""?cellData.parser(data):null;
    }

    switch (type) {
        case 'multiline':
            return <td className={classes.td}>{data}</td>;
        case 'image':
            return (
                <td className={classes.td}>
                    {rowData[colName].length > 0 ? (
                        <img
                            className={classes.thumbnail}
                            src={rowData[colName][0].url}
                        />
                    ) : (
                        'No Attachment'
                    )}
                </td>
            );
        case 'select':
            let { name } = rest.options.find(opt => opt.id == data);
            return <td className={classes.td}>{name}</td>;
        case 'auto-complete':
            let { name: autoName } = rest.options.find(opt => opt.id == data);
            return <td className={classes.td}>{autoName}</td>;
        case 'nested-select':
            let { name: nestedSelect } = rest.options.find(
                opt => opt.id == data,
            );
            return <td className={classes.td}>{nestedSelect}</td>;
        default:
            return <td className={classes.td}>{data}</td>;
    }
};

function transfromColumns(columns) {
    return columns.reduce(
        (a, b) => ({
            ...a,
            [b.name]: { ...b },
        }),
        {},
    );
}

const useStyles = makeStyles({
    search: {
        backgroundColor: '#e4e8ff',
    },
    table: {
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        borderCollapse: 'collapse',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    th: {
        textAlign: 'left',
        borderBottom: '1px solid #b7b7b7',
        padding: '0.6em 0.2em 0.6em 1em',
        backgroundColor: '#3f0f3f',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#434363',
            cursor: 'pointer',
        },
    },
    td: {
        textAlign: 'left',
        borderBottom: '1px solid #bdc2db',
        padding: '0.6em 0.2em 0.6em 1em',
    },
    tr: {
        '&:hover': {
            backgroundColor: 'aliceblue',
        },
    },
    trTotal: {
        backgroundColor: '#3f0f3f',
        color: 'white',
        fontWeight: '700',
    },
    thumbnail: { height: '100px', width: '100px', objectFit: 'cover' },
});

export default CustomPopupTable;

CustomPopupTable.defaultProps = {
    config: {
        search: true,
        filterColumns: true,
        add: true,
        actions: true,
    },
};

function getSumOfCols(cols, accs) {
    let sum = {};
    for (let acc of accs) {
        // credit
        for (let col of cols) {
            let nextValue = acc[col];
            let prevValue = sum[col];
            if (!prevValue) {
                prevValue = 0;
            }
            if (nextValue === '') {
                nextValue = 0;
            } else {
                nextValue = parseFloat(nextValue);
            }
            sum = {
                ...sum,
                [col]: prevValue + nextValue,
            };
        }
    }
    return sum;
}
