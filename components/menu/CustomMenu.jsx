import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';
import Divider from '@material-ui/core/Divider';
import AccountIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

const accountData = [
  // { id: 1, name: 'Account Profile', path: '/account' },
  // { id: 2, name: 'Businesses', path: '/businesses' },
  // { id: 3, name: 'Subscription', path: '/dashboard' },
  // { id: 4, name: 'Invoices', path: '/dashboard' },
  // { id: 5, name: 'Payment', path: '/dashboard' },
];

const securityData = [
  // { id: 1, name: 'Firewall', path: '/firewall' },
  // { id: 2, name: 'Two Factor Auth', path: '/twofactorauth' },
  // { id: 3, name: 'Security Questions', path: '/dashboard' },
  // { id: 4, name: 'Users', path: '/users' },
  // { id: 5, name: 'Audit Log', path: '/dashboard' },
  // { id: 6, name: 'Sessions', path: '/sessions' },
  { id: 7, name: 'Change Password', path: '/changepassword' },
  { id: 8, name: 'Log Out', path: '/logout' },
];

export function CustomMenuItem({ item, setMenu }) {
  const router = useRouter();

  return (
    <MenuItem key={item.id} onClick={() => router.push(item.path)}>
      {item.name}
    </MenuItem>
  );
}
export default function CustomMenu() {
  const [menu, setMenu] = useState(false);

  const handleOpen = event => {
    setMenu(true);
  };

  const handleClose = () => {
    setMenu(false);
  };

  return (
    <>
      <IconButton onClick={handleOpen} style={{ marginLeft: '1em', color:'white' }}>
        <AccountIcon/>
      </IconButton>
      <Menu
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="simple-menu"
        keepMounted
        open={menu}
        onClose={handleClose}
      >
        {/* {accountData.map(item => (
          <CustomMenuItem key={item.id} item={item} setMenu={setMenu} />
        ))}
        <Divider /> */}
        {securityData.map(item => (
          <CustomMenuItem key={item.id} item={item} setMenu={setMenu} />
        ))}
      </Menu>
    </>
  );
}
