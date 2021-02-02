import { createMuiTheme } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        common: {
            orange: orange.A400
        }
    },
});

export default theme;
