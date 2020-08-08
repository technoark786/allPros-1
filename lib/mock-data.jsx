import React from 'react';
import LockIcon from '@material-ui/icons/Lock';

export const countriesMockData = [
  { id: 1, name: 'United Kingdom' },
  { id: 2, name: 'Ireland' },
  { id: 3, name: 'United Arab Emirates' },
];

export const currenciesMockData = [
  { id: 1, name: 'Purchase journal' },
  { id: 2, name: 'Sales journal' },
  { id: 3, name: 'Cash receipts journal' },
  { id: 4, name: 'Cash payment/disbursement journal' },
  { id: 5, name: 'Purchase return journal' },
  { id: 6, name: 'Sales return journal' },
  { id: 7, name: 'Journal proper/General journal' },
];

export const categoryData = [
  {
    id: 1,
    name: 'Category 1',
    parentCategory: '',
  },
  {
    id: 2,
    name: 'Category 2',
    parentCategory: '',
  },
  {
    id: 3,
    name: 'Category 3',
    parentCategory: '',
  },
  {
    id: 4,
    name: 'Category 4',
    parentCategory: '',
  },
  {
    id: 5,
    name: 'Category 5',
    parentCategory: '',
  },
];

export const customerData = [
  {
    id: 1,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 1 First Name',
    lastName: 'Customer 1 Last Name',
  },
  {
    id: 2,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 2 First Name',
    lastName: 'Customer 2 Last Name',
  },
  {
    id: 3,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 3 First Name',
    lastName: 'Customer 3 Last Name',
  },
  {
    id: 4,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 4 First Name',
    lastName: 'Customer 4 Last Name',
  },
  {
    id: 5,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 5 First Name',
    lastName: 'Customer 5 Last Name',
  },
  {
    id: 6,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 6 First Name',
    lastName: 'Customer 6 Last Name',
  },
  {
    id: 7,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 7 First Name',
    lastName: 'Customer 7 Last Name',
  },
  {
    id: 8,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 8 First Name',
    lastName: 'Customer 8 Last Name',
  },
  {
    id: 9,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 9 First Name',
    lastName: 'Customer 9 Last Name',
  },
  {
    id: 10,
    companyName: 'Technoark Solutions',
    firstName: 'Customer 10 First Name',
    lastName: 'Customer 10 Last Name',
  },
];

export const financialData = [
  {
    id: 1,
    name: 'Financial 1',
    start: '01/01/2019',
    end: '01/01/2020',
  },
  {
    id: 2,
    name: 'Financial 2',
    start: '01/01/2020',
    end: '01/01/2021',
  },
  {
    id: 3,
    name: 'Financial 3',
    start: '01/01/2021',
    end: '01/01/2022',
  },
  {
    id: 4,
    name: 'Financial 4',
    start: '01/01/2022',
    end: '01/01/2023',
  },
  {
    id: 5,
    name: 'Financial 5',
    start: '01/01/2023',
    end: '01/01/2024',
  },
];

export const accountsMockData = [
  { id: 1, name: 'Account 1' },
  { id: 2, name: 'Account 2' },
  { id: 3, name: 'Account 3' },
];

export const purchaseproductData = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Product 3 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Product 4 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Product 5 Description',
    price: 100,
    tax: 1,
  },
];

export const salesproductData = [
  {
    id: 1,
    name: 'Sales Product 1',
    description: 'Sales Product 1 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 2,
    name: 'Sales Product 2',
    description: 'Sales Product 2 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 3,
    name: 'Sales Product 3',
    description: 'Sales Product 3 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 4,
    name: 'Sales Product 4',
    description: 'Sales Product 4 Description',
    price: 100,
    tax: 1,
  },
  {
    id: 5,
    name: 'Sales Product 5',
    description: 'Sales Product 5 Description',
    price: 100,
    tax: 1,
  },
];

export const twoFactorAuthMockData = [
  {
    id: 1,
    name: 'Mobile OTP',
    type: 'mobile',
  },
  {
    id: 2,
    name: 'Email OTP/Notification',
    type: 'email',
  },
  {
    id: 3,
    name: 'Push Notification',
    type: 'push',
  },
  {
    id: 4,
    name: 'Auth0 App',
    type: 'auth0',
  },
  {
    id: 5,
    name: 'Duck Auth App',
    type: 'duck',
  },
];

export const chartOfAccountsMockData = [
  {
    name: 'Assets',
    id: 1,
    categories: [
      {
        id: 1,
        name: 'Cash & Bank',
        accounts: [
          {
            id: 1,
            name: 'Axis Bank',
            lastTransactionDate: '',
            details: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Liabilities & Credit Cards',
    id: 2,
    categories: [
      {
        id: 1,
        name: 'Cash & Bank',
        accounts: [
          {
            id: 1,
            name: 'Axis Bank',
            lastTransactionDate: '',
            details: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Income',
    id: 3,
    categories: [
      {
        id: 1,
        name: 'Cash & Bank',
        accounts: [
          {
            id: 1,
            name: 'Axis Bank',
            lastTransactionDate: '',
            details: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Expenses',
    id: 4,
    categories: [
      {
        id: 1,
        name: 'Cash & Bank',
        accounts: [
          {
            id: 1,
            name: 'Axis Bank',
            lastTransactionDate: '',
            details: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Equity',
    id: 5,
    categories: [
      {
        id: 1,
        name: 'Cash & Bank',
        accounts: [
          {
            id: 1,
            name: 'Axis Bank',
            lastTransactionDate: '',
            details: '',
          },
        ],
      },
    ],
  },
];

export const ledgersMockData = [
  {
    account: 'Technoark', description: 'Description', credit: 'Credit', debit: 'Debit',
  },
  {
    account: 'Technoark', description: 'Description', credit: 'Credit', debit: 'Debit',
  },
  {
    account: 'Technoark', description: 'Description', credit: 'Credit', debit: 'Debit',
  },
];

export const activeBusinessesMockData = [
  {
    id: 1,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
  {
    id: 2,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
  {
    id: 3,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
];

export const archivedBusinessesMockData = [
  {
    id: 1,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
  {
    id: 2,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
  {
    id: 3,
    name: 'Technoark',
    date: 'FY 2019/2020',
    actions: [
      { tip: 'Lock Business', icon: <LockIcon /> },
    ],
  },
];

export const vendorData = [
  {
    id: 1,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 1 First Name',
    lastName: 'Vendor 1 Last Name',
  },
  {
    id: 2,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 2 First Name',
    lastName: 'Vendor 2 Last Name',
  },
  {
    id: 3,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 3 First Name',
    lastName: 'Vendor 3 Last Name',
  },
  {
    id: 4,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 4 First Name',
    lastName: 'Vendor 4 Last Name',
  },
  {
    id: 5,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 5 First Name',
    lastName: 'Vendor 5 Last Name',
  },
  {
    id: 6,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 6 First Name',
    lastName: 'Vendor 6 Last Name',
  },
  {
    id: 7,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 7 First Name',
    lastName: 'Vendor 7 Last Name',
  },
  {
    id: 8,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 8 First Name',
    lastName: 'Vendor 8 Last Name',
  },
  {
    id: 9,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 9 First Name',
    lastName: 'Vendor 9 Last Name',
  },
  {
    id: 10,
    companyName: 'Technoark Solutions',
    firstName: 'Vendor 10 First Name',
    lastName: 'Vendor 10 Last Name',
  },
];

export const businessTypes = [
  { id: 1, name: 'Sole Proprietor' },
  { id: 1, name: 'Partnership' },
  { id: 1, name: 'Limited Liability' },
];

export const currencyData = [
  {
    id: 1,
    name: 'Euro',
    symbol: '€',
  },
  {
    id: 2,
    name: 'Pound',
    symbol: '£',
  },
  {
    id: 3,
    name: 'Dollar',
    symbol: '$',
  },
];

export const chartofaccountsDropdownData = [
  {
    name: 'Assets',
    value: '1',
  },
  {
    name: 'Liabilities & Credit Cards',
    value: '2',
  },
  {
    name: 'Income',
    value: '3',
  },
  {
    name: 'Expenses',
    value: '4',
  },
  {
    name: 'Equity',
    value: '5',
  },
];

export const userListMockData = [
  {
    id: 1,
    name: 'Shabbir Vohra 1',
    avtar: 'S',
    role: 'Super Admin',
    title: 'CEO',
    email: 'shabbir@technoark.in',
    status: true,
  },
  {
    id: 2,
    name: 'Shabbir Vohra 2',
    avtar: 'A',
    role: 'Admin',
    title: 'CTO',
    email: 'shabbir@technoark.in',
    status: true,
  },
  {
    id: 3,
    name: 'Shabbir Vohra 3',
    avtar: 'B',
    role: 'Employee',
    title: 'CFO',
    email: 'shabbir@technoark.in',
    status: true,
  },
  {
    id: 4,
    name: 'Shabbir Vohra 4',
    avtar: 'C',
    role: 'Customer',
    title: 'MD',
    email: 'shabbir@technoark.in',
    status: false,
  },
  {
    id: 5,
    name: 'Shabbir Vohra 5',
    avtar: 'D',
    role: 'Supervisor',
    title: 'CEO',
    email: 'shabbir@technoark.in',
    status: false,
  },
];
