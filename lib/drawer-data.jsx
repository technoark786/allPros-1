import React from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import StorageIcon from '@material-ui/icons/Storage';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from "@material-ui/icons/Work";

export default [
    {
        id: 1,
        title: 'Dashboard',
        icon: <DashboardIcon />,
        link: '/dashboard',
    },
    { id: 2, icon: <SearchIcon />, title: 'Search', link: '/search' },
    { id: 3, icon: <PeopleIcon />, title: 'Owners', link: '/owners' },
    { id: 4, icon: <PeopleIcon />, title: 'Candidate', link: '/candidates' },
    { id: 4, icon: <WorkIcon />, title: 'Jobs', link: '/jobs' },
    { id: 6, icon: <ExitToAppIcon />, title: 'Logout', link: '/logout', },
];
