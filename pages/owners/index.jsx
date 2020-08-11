import {
    Box,
    Container,
    IconButton,
    Typography,
    Paper,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { useRouter } from "next/router";
import React from "react";
import { Table } from "../../components/tables";
import Layout from "../../layout";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../lib/api";
import CircularLoader from "../../components/loader/CircularLoader";
import ListAltIcon from "@material-ui/icons/ListAlt";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BlockIcon from "@material-ui/icons/Block";
import { useSnackbar } from "../../lib/context";
import CheckIcon from "@material-ui/icons/Check";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import WorkIcon from '@material-ui/icons/Work';

function MembersPage() {
    const router = useRouter();
    const { openSnackbar } = useSnackbar();
    const [owner, setOwner] = useState([
        {
            id: 1,
            restaurentName: "Go Foodie",
            email: "testemail@domainname.com",
            contactNo: "+1-832-533-2620",
            businessType: "Catering & Events",
            MobileNo:'+1-832-533-2620',
            Address:'12345 Jones Road Suite# 246',
            duration:'4 Year',
            hours:'8 Hours',
            status: "Active",
        },
        {
            id: 2,
            restaurentName: "Zafran",
            email: "testemail@domainname.com",
            contactNo: "+1-832-533-2620",
            businessType: "Fine Dinning",
            MobileNo:'+1-832-533-2620',
            Address:'12345 Jones Road Suite# 246',
            duration:'4 Year',
            hours:'8 Hours',
            status: "Active",
        },
        {
            id: 3,
            restaurentName: "Aqua Restaurent",
            email: "testemail@domainname.com",
            contactNo: "+1-832-533-2620",
            businessType: "Casual Dinning",
            MobileNo:'+1-832-533-2620',
            Address:'12345 Jones Road Suite# 246',
            duration:'4 Year',
            hours:'8 Hours',
            status: "Inactive",
        },
        {
            id: 4,
            restaurentName: "Royal Club",
            email: "testemail@domainname.com",
            contactNo: "+1-832-533-2620",
            businessType: "Bar or Nightclub",
            MobileNo:'+1-832-533-2620',
            Address:'12345 Jones Road Suite# 246',
            duration:'4 Year',
            hours:'8 Hours',
            status: "Active",
        },
        {
            id: 5,
            restaurentName: "Salt Water Cafe",
            email: "testemail@domainname.com",
            contactNo: "+1-832-533-2620",
            businessType: "Buffet",
            MobileNo:'+1-832-533-2620',
            Address:'12345 Jones Road Suite# 246',
            duration:'4 Year',
            hours:'8 Hours',
            status: "Inactive",
        },
    ]);
    const [isLoading, setIsLoading] = useState(true);

    // const fetchData = async () => {
    //   try {
    //     setIsLoading(true);
    //     const { data } = await api.get(`/customer`);
    //     setIsLoading(false);
    //     setOwner(data);
    //   } catch (error) {
    //     if (
    //       error.response !== undefined &&
    //       error.response.data !== null &&
    //       error.response.data.errors.length !== 0
    //     ) {
    //       openSnackbar('error', error.response.data.errors[0]);
    //     } else {
    //       openSnackbar('error', error.message);
    //     }
    //   }
    // };

    // useEffect(() => {
    //   fetchData();
    // }, []);
    const addMember = () => {
        router.push("/members/add");
    };

    if (!owner) {
        return (
            <Layout pageName="Owners">
                <CircularLoader />
            </Layout>
        );
    }

    return (
        <Layout pageName="Owners">
            <Container>
                <Box padding={3} clone>
                    <Paper>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            marginBottom={3}
                        >
                            <Typography variant="h5">Owners</Typography>
                            <IconButton onClick={addMember}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                        <Box padding={3} clone>
                            <Table
                                columns={[
                                    {
                                        title: "Restaurent Name",
                                        field: "restaurentName",
                                    },
                                    { title: "Email", field: "email" },
                                    {
                                        title: "Contact Number",
                                        field: "contactNo",
                                    },
                                    {
                                        title: "Business Type",
                                        field: "businessType",
                                    },
                                ]}
                                data={owner}
                                options={{
                                    pageSize: 25,
                                    pageSizeOptions: [5, 10, 25, 50, 75, 100],
                                    toolbar: true,
                                    paging: true,
                                    actionsColumnIndex: -1,
                                    headerStyle: {
                                        backgroundColor: "#3f0f3f",
                                        color: "#FFF",
                                    },
                                }}
                                // isLoading={isLoading}
                                actions={[
                                    {
                                        icon: () => (
                                            <VisibilityIcon color="primary" />
                                        ),
                                        tooltip: "View",
                                        onClick: (event, rowData) => {
                                            router.push(
                                                `/owners/view/${rowData.id}`
                                            );
                                        },
                                    },
                                    {
                                      icon: () => (
                                          <WorkIcon color="primary" />
                                      ),
                                      tooltip: "Jobs",
                                      onClick: (event, rowData) => {
                                          router.push(
                                              `/owners/jobs/${rowData.id}`
                                          );
                                      },
                                  },
                                    {
                                        icon: () => (
                                            <EditIcon color="primary" />
                                        ),
                                        tooltip: "Edit",
                                        onClick: (event, rowData) => {
                                            router.push(
                                                `/members/edit/[id]`,
                                                `/Members/edit/${rowData.id}`
                                            );
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

export default MembersPage;
