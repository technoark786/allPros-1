import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { MyResponsiveBar } from '../../components/charts/BarChart';
import { MyResponsiveLine } from '../../components/charts/LineChart';
import { MyResponsivePie } from '../../components/charts/PieChart';
import { MyMapComponent } from '../../components/google-map/GoogleMap';
import DatePicker from '../../components/pickers/DatePicker';
import Layout from '../../layout';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';

let data = [
    {
        id: 'france',
        color: 'red',
        data: [
            {
                x: 'January',
                y: 75,
            },
            {
                x: 'February',
                y: 263,
            },
            {
                x: 'March',
                y: 178,
            },
            {
                x: 'April',
                y: 187,
            },
            {
                x: 'May',
                y: 42,
            },
            {
                x: 'June',
                y: 5,
            },
            {
                x: 'July',
                y: 108,
            },
            {
                x: 'August',
                y: 223,
            },
            {
                x: 'September',
                y: 277,
            },
            {
                x: 'October',
                y: 38,
            },
            {
                x: 'November',
                y: 293,
            },
            {
                x: 'December',
                y: 253,
            },
        ],
    },
];

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const useStyles = makeStyles((theme) => ({
    Paper: {
        padding: '1em',
    },
    CircularStat: {
        textAlign: 'right',
        fontSize: '1.5rem',
        fontWeight: '600',
        width: 'auto',
        height: '70px',
        background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
        color: 'white',
        borderRadius: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem',
    },
    table: {
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        borderCollapse: 'collapse',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        marginTop: '1rem',
    },
    th: {
        textAlign: 'left',
        borderBottom: '1px solid #b7b7b7',
        padding: '0.8em 0.4em 0.8em 1.2em',
        backgroundColor: '#CCFFE5',
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: 'transparent',
            cursor: 'pointer',
        },
    },
    td: {
        textAlign: 'left',
        borderBottom: '1px solid #bdc2db',
        padding: '0.8em 0.4em 0.8em 1.2em',
    },
    tr: {
        '&:hover': {
            backgroundColor: 'aliceblue',
        },
    },
}));

const MetricCard = ({ title, stat }) => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.Paper }}>
            <Typography
                variant="h6"
                style={{ marginBottom: '1em', textAlign: 'center' }}
            >
                {title}
            </Typography>
            <p className={classes.CircularStat}>{stat}</p>
        </Paper>
    );
};

function DashboardPage() {
    const [filters, setFilters] = useState({
        startDate: null,
        endDate: null,
    });

    const [locations, setLocations] = useState();
    const [dashboard, setDashboard] = useState();
    const [notifications, setNotifications] = useState();

    const { openSnackbar } = useSnackbar();
    const classes = useStyles();
    const customDate = (date) => {
        const d = new Date(date);
        return (
            (d.getMonth() > 8 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)) +
            '/' +
            (d.getDate() > 9 ? d.getDate() : '0' + d.getDate()) +
            '/' +
            d.getFullYear()
        );
    };
    useEffect(() => {
        const fetchData = async () => {
            // try {
            //   const { data } = await api.post('/dashboard', filters);
            //   setDashboard(data);
            //   setLocations(data.locations);
            //   setNotifications(data.vendorNotifications);
            // } catch (error) {
            //   if (
            //     error.response !== undefined ||
            //     error.response.data !== undefined ||
            //     error.response.data.errors.length !== 0
            //   ) {
            //     openSnackbar('error', error.response.data.errors[0]);
            //   } else {
            //     openSnackbar('error', error.message);
            //   }
            // }
        };
        if (filters.startDate != null && filters.endDate == null) {
            setFilters({ ...filters, endDate: new Date() });
        } else if (filters.startDate == null && filters.endDate != null) {
            setFilters({ ...filters, startDate: new Date() });
        } else {
            fetchData();
        }
    }, [filters]);

    // if (!dashboard && !locations) {
    //   return <Layout pageName="Dashboard">Loading...</Layout>;
    // }

    let listData = [];
    if (dashboard !== undefined) {
        dashboard.totalSalesMonthlyList.forEach(function (element, index) {
            const data = { x: months[index], y: element };
            listData.push(data);
        });
    }

    // let data = [
    //   {
    //     id: 'total sales',
    //     color: 'red',
    //     data: listData.length !== 0 ? listData : [],
    //   },
    // ];

    let data = [
        {
            id: 'japan',
            color: 'hsl(273, 70%, 50%)',
            data: [
                {
                    x: 'plane',
                    y: 85,
                },
                {
                    x: 'helicopter',
                    y: 196,
                },
                {
                    x: 'boat',
                    y: 261,
                },
                {
                    x: 'train',
                    y: 99,
                },
                {
                    x: 'subway',
                    y: 296,
                },
                {
                    x: 'bus',
                    y: 229,
                },
                {
                    x: 'car',
                    y: 43,
                },
                {
                    x: 'moto',
                    y: 152,
                },
                {
                    x: 'bicycle',
                    y: 280,
                },
                {
                    x: 'horse',
                    y: 156,
                },
                {
                    x: 'skateboard',
                    y: 184,
                },
                {
                    x: 'others',
                    y: 235,
                },
            ],
        },
        {
            id: 'france',
            color: 'hsl(58, 70%, 50%)',
            data: [
                {
                    x: 'plane',
                    y: 198,
                },
                {
                    x: 'helicopter',
                    y: 13,
                },
                {
                    x: 'boat',
                    y: 74,
                },
                {
                    x: 'train',
                    y: 85,
                },
                {
                    x: 'subway',
                    y: 190,
                },
                {
                    x: 'bus',
                    y: 173,
                },
                {
                    x: 'car',
                    y: 125,
                },
                {
                    x: 'moto',
                    y: 12,
                },
                {
                    x: 'bicycle',
                    y: 128,
                },
                {
                    x: 'horse',
                    y: 293,
                },
                {
                    x: 'skateboard',
                    y: 159,
                },
                {
                    x: 'others',
                    y: 267,
                },
            ],
        },
        {
            id: 'us',
            color: 'hsl(165, 70%, 50%)',
            data: [
                {
                    x: 'plane',
                    y: 1,
                },
                {
                    x: 'helicopter',
                    y: 49,
                },
                {
                    x: 'boat',
                    y: 43,
                },
                {
                    x: 'train',
                    y: 4,
                },
                {
                    x: 'subway',
                    y: 244,
                },
                {
                    x: 'bus',
                    y: 140,
                },
                {
                    x: 'car',
                    y: 32,
                },
                {
                    x: 'moto',
                    y: 268,
                },
                {
                    x: 'bicycle',
                    y: 258,
                },
                {
                    x: 'horse',
                    y: 14,
                },
                {
                    x: 'skateboard',
                    y: 37,
                },
                {
                    x: 'others',
                    y: 259,
                },
            ],
        },
        {
            id: 'germany',
            color: 'hsl(51, 70%, 50%)',
            data: [
                {
                    x: 'plane',
                    y: 113,
                },
                {
                    x: 'helicopter',
                    y: 80,
                },
                {
                    x: 'boat',
                    y: 132,
                },
                {
                    x: 'train',
                    y: 286,
                },
                {
                    x: 'subway',
                    y: 262,
                },
                {
                    x: 'bus',
                    y: 222,
                },
                {
                    x: 'car',
                    y: 122,
                },
                {
                    x: 'moto',
                    y: 296,
                },
                {
                    x: 'bicycle',
                    y: 26,
                },
                {
                    x: 'horse',
                    y: 254,
                },
                {
                    x: 'skateboard',
                    y: 77,
                },
                {
                    x: 'others',
                    y: 70,
                },
            ],
        },
        {
            id: 'norway',
            color: 'hsl(183, 70%, 50%)',
            data: [
                {
                    x: 'plane',
                    y: 167,
                },
                {
                    x: 'helicopter',
                    y: 33,
                },
                {
                    x: 'boat',
                    y: 39,
                },
                {
                    x: 'train',
                    y: 137,
                },
                {
                    x: 'subway',
                    y: 97,
                },
                {
                    x: 'bus',
                    y: 250,
                },
                {
                    x: 'car',
                    y: 97,
                },
                {
                    x: 'moto',
                    y: 127,
                },
                {
                    x: 'bicycle',
                    y: 107,
                },
                {
                    x: 'horse',
                    y: 189,
                },
                {
                    x: 'skateboard',
                    y: 27,
                },
                {
                    x: 'others',
                    y: 60,
                },
            ],
        },
    ];

    return (
        <Layout pageName="Dashboard">
            <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    >
                       Registrations
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <MetricCard
                        title="Total"
                        stat='10000'
                    />
                </Grid>
                <Grid item xs={3}>
                    <MetricCard
                        title="This Month"
                        stat='5000'
                    />
                </Grid>
                <Grid item xs={3}>
                    <MetricCard
                        title="Today"
                        stat='500'
                    />
                </Grid>
                {/* <Grid item xs={2}>
                    <MetricCard
                        title="Monthly Sales"
                        stat={dashboard && '$' + dashboard.monthlySales}
                    />
                </Grid>
                <Grid item xs={2}>
                    <MetricCard
                        title="Total Sales"
                        stat={dashboard && '$' + dashboard.totalSales}
                    />
                </Grid> */}
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    >
                        Total Subscription
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ height: '400px' }}>
                        <MyResponsiveLine
                            data={data}
                            xLabel="months"
                            yLabel="Total Subscription"
                        />
                    </div>
                </Grid>
                {/* <Grid item xs={6}>
                    <Typography
                        variant="h4"
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    >
                        Upcoming Notification
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="h4"
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    >
                        Leads
                    </Typography>
                </Grid> */}
                {/* {notifications && (
                    <Grid item xs={6}>
                        <div
                            style={{
                                height: '400px',
                                maxHeight: '450px',
                                overflow: 'auto',
                            }}
                        >
                            <table className={classes.table}>
                                <thead>
                                    <tr>
                                        <th className={classes.th}>Date</th>
                                        <th className={classes.th}>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notifications.map((notification) => (
                                        <tr className={classes.tr}>
                                            <td
                                                className={classes.td}
                                                style={{ width: '30%' }}
                                            >
                                                {customDate(notification.date)}
                                            </td>
                                            <td
                                                className={classes.td}
                                                style={{ width: '70%' }}
                                            >
                                                {notification.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Grid>
                )}
                <Grid item xs={6}>
                    <div style={{ height: '400px' }}>
                        <MyResponsiveLine data={data} />
                    </div>
                </Grid> */}
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        style={{ marginTop: '1em', textAlign: 'center' }}
                    >
                        Reports
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ height: '400px' }}>
                        <MyResponsiveBar />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ height: '400px' }}>
                        <MyResponsivePie />
                    </div>
                </Grid>
                {/* <Grid item xs={12}>
                    {locations && (
                        <MyMapComponent
                            locations={locations}
                            isMarkerShown
                            height="400px"
                        />
                    )}
                </Grid> */}
            </Grid>
        </Layout>
    );
}

export default DashboardPage;
