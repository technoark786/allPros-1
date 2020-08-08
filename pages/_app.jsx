import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import 'date-fns';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { SnackbarProvider } from '../components/snackbar';
import theme from '../lib/theme';
import { AuthProvider } from '../context/authContext';
import { ConfigProvider } from '../context/globalSettings';

export default class MyApp extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>
                        All Pros
                    </title>
                </Head>
                <Providers>
                    <Component {...pageProps} />
                </Providers>
            </>
        );
    }
}

function Providers({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider>
                <AuthProvider>
                    <ConfigProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            {children}
                        </MuiPickersUtilsProvider>
                    </ConfigProvider>
                </AuthProvider>
            </SnackbarProvider>
         </ThemeProvider>
    );
}
