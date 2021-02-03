
// @ts-ignore
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffab00',
            dark: '#212121',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffd600',
            contrastText: '#f50057',
        },
        error: {
            main: '#FFF',
        },
        background: {
            default: '#fff',
        },
        common: {
            black: '#484848',
            white: '#FFF',
        }
    },
});

export default theme;
