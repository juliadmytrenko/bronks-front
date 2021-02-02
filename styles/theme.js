import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffab00',
            dark: '#212121',
            hot: '#f50057',

        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
            yellow: '#ffd600'
        },
        common: {
            orange: orange.A400,
            black: '#484848',
            white: '#FFF',
        }
    },
});

export default theme;
