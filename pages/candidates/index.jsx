import {
    Box,
    Container,
    IconButton,
    Typography,
    Paper,
    Chip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useRouter } from "next/router";
import React from "react";
import { Table } from "../../components/tables";
import Layout from "../../layout";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../lib/api";
import CircularLoader from "../../components/loader/CircularLoader";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DescriptionIcon from "@material-ui/icons/Description";

function CandidatesPage() {
    const router = useRouter();
    const [candidates, setCandidates] = useState([
        {
            id: 1,
            firstName: "Louisa",
            lastName: "B",
            email: "dummyemail@tesdomain.com",
            phone: "+1-832-533-2620",
            status: "Approved",
        },
        {
            id: 2,
            firstName: "Mark",
            lastName: "Smith",
            email: "dummyemail@tesdomain.com",
            phone: "+1-832-533-2620",
            status: "Approved",
        },
    ]);
    const [isLoading, setIsLoading] = useState(true);

    if (!candidates) {
        return (
            <Layout pageName="Customer">
                <CircularLoader />
            </Layout>
        );
    }

    return (
        <Layout pageName="Candidates">
            <Container>
                <Box padding={3} clone>
                    <Paper>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            marginBottom={3}
                        >
                            <Typography variant="h5">Candidates</Typography>
                            {/* <IconButton onClick={addCustomer}>
                <AddIcon />
              </IconButton> */}
                        </Box>
                        <Box padding={3} clone>
                            <Table
                                columns={[
                                    { title: "First Name", field: "firstName" },
                                    { title: "Last Name", field: "lastName" },
                                    { title: "Phone Number", field: "phone" },
                                    { title: "Email", field: "email" },
                                    {
                                        title: "Status",
                                        field: "status",
                                        render: (rowData) => {
                                            return (
                                                <Chip
                                                    // variant='filled'
                                                    size="large"
                                                    color="primary"
                                                    style={{
                                                        backgroundColor:
                                                            rowData.status ==
                                                            "Approved"
                                                                ? "green"
                                                                : "red",
                                                    }}
                                                    label={rowData.status}
                                                />
                                            );
                                        },
                                    },
                                ]}
                                data={candidates}
                                options={{
                                    pageSize: 25,
                                    pageSizeOptions: [5, 10, 25, 50, 75, 100],
                                    toolbar: true,
                                    paging: true,
                                    actionsColumnIndex: -1,
                                    headerStyle: {
                                        backgroundColor: "#1f54bf",
                                        color: "#FFF",
                                    },
                                }}
                                // isLoading={isLoading}
                                // data={query =>
                                //   new Promise((resolve, reject) => {
                                //     // let url = 'https://reqres.in/api/users?'
                                //     // url += 'per_page=' + query.pageSize
                                //     // url += '&page=' + (query.page + 1)
                                //     // fetch(url)
                                //     api.get('/customers')
                                //       // .then(response => response.json())
                                //       .then(result => {
                                //         resolve({
                                //           data: result.data,
                                //           page: result.page - 1,
                                //           totalCount: result.total,
                                //         })
                                //       })
                                //   })
                                // }
                                actions={[
                                    {
                                        icon: () => (
                                            <AcUnitIcon color="primary" />
                                        ),
                                        tooltip: "Screen Test",
                                        onClick: (event, rowData) => {
                                            router.push(
                                                `/candidates/screenTest/${rowData.id}`
                                            );
                                        },
                                    },
                                    {
                                        icon: () => (
                                            <DescriptionIcon color="primary" />
                                        ),
                                        tooltip: "Form",
                                        onClick: (event, rowData) => {
                                            router.push("/candidates/form/1");
                                        },
                                    },
                                ]}
                            />
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Layout>
    );
}

export default CandidatesPage;
