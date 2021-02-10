import '../styles/global.scss';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import myTheme from '../styles/myTheme';
import {AppProps} from 'next/app';
import React from "react";
import { Provider } from "next-auth/client";

const App = ({Component, pageProps}: AppProps) => {

    //  apply a useEffect hook to remove the CSS that were injected on server-side from the client-side app:
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, []); // By doing this, we allow the client to take over styling the app as soon as its ready. https://dev.to/felixmohr/setting-up-a-blog-with-next-js-react-material-ui-and-typescript-2m6k

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline/>
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </ThemeProvider>
       );
};

export default App;
