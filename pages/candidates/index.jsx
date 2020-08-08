import { Box, Container, IconButton, Typography, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { useRouter } from 'next/router';
import React from 'react';
import { Table } from '../../components/tables';
import Layout from '../../layout';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../lib/api';
import CircularLoader from '../../components/loader/CircularLoader';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function CandidatesPage() {
  const router = useRouter();
  const [candidates, setCandidates] = useState([{id:1,name:"John",email:"john@co",contact:"123123"}]);
  const [isLoading,setIsLoading] = useState(true);

  if (!candidates) {
    return <Layout pageName="Customer"><CircularLoader /></Layout>
  }

  return (
    <Layout pageName="Candidates">
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
                Candidates
              </Typography>
              {/* <IconButton onClick={addCustomer}>
                <AddIcon />
              </IconButton> */}
            </Box>
            <Box padding={3} clone>
              <Table
                columns={[
                  { title: 'Name', field: 'name' },
                  { title: 'Email', field: 'email' },
                  { title: 'Cantact', field: 'contact'},
                ]}
                data={candidates}
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
                  icon: () => <AcUnitIcon color="primary" />,
                  tooltip: 'Screen Test',
                  onClick: (event, rowData) => {
                    router.push(`/candidates/screenTest/${rowData.id}`);
                  },
                },
                  {
                    icon: () => <EditIcon color="primary" />,
                    tooltip: 'Edit Customer',
                    onClick: (event, rowData) => {
                      router.push(`/customers/edit/[id]`, `/customers/edit/${rowData.id}`);
                    },
                  },
                  {
                    icon: () => <VisibilityIcon color="primary" />,
                    tooltip: 'View',
                    onClick: (event, rowData) => { setDialogOpen(true); setUsers(rowData.users) },
                }
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
