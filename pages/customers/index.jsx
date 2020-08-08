import { Box, Container, IconButton, Typography, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';
import React from 'react';
import { Table } from '../../components/tables';
import Layout from '../../layout';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../lib/api';
import CircularLoader from '../../components/loader/CircularLoader';

function CustomersPage() {
  const router = useRouter();
  const [customer, setCustomer] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/customers');
      setCustomer(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  const addCustomer = () => {
    router.push('/customers/add');
  };

  if (!customer) {
    return <Layout pageName="Customer"><CircularLoader /></Layout>
  }

  return (
    <Layout pageName="Customers">
      <Container>
        <Box
          padding={3}
          clone
        >
          <Paper>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginBottom={3}
            >
              <Typography variant="h5">
                Customers
              </Typography>
              <IconButton onClick={addCustomer}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box padding={3} clone>
              <Table
                columns={[
                  { title: 'Company Name', field: 'companyName' },
                  { title: 'First Name', field: 'firstName' },
                  { title: 'Last Name', field: 'lastName' },
                ]}
                data={customer}
                options={{
                  pageSize: 25,
                  pageSizeOptions: [ 5, 10, 25, 50 , 75, 100 ],
                  toolbar: true,
                  paging: true,
                  actionsColumnIndex:-1,
                  headerStyle: {
                    backgroundColor: '#3f0f3f',
                    color: '#FFF'
                  }
                }}
                isLoading={isLoading}
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
                    icon: () => <EditIcon color="primary" />,
                    tooltip: 'Edit Customer',
                    onClick: (event, rowData) => {
                      router.push(`/customers/edit/[id]`, `/customers/edit/${rowData.id}`);
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

export default CustomersPage;
