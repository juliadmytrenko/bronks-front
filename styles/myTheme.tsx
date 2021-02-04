import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
    primary: '#ffab00',
    secondary: '#ffd600',
    error: '#E44C65',
    background: 'rgb(178, 119, 0)',
    text: '#bbe1fa',
}

export const paletteColorsLight = {
    primary: '#FFF',
    secondary: '#f50057',
    error: '#E44C65',
    background: '#f9f9f9',
    text: '#050505',
}

const options = (dark: boolean): ThemeOptions => {
    const paletteColors = dark ? paletteColorsDark : paletteColorsLight
    return {
        palette: {
            type: dark ? 'dark' : 'light',
            primary: {
                main: paletteColors.primary,
            },
            secondary: {
                main: paletteColors.secondary,
            },
            error: {
                main: paletteColors.error,
            },
            background: {
                default: paletteColors.background,
            },
            common: {
                black: '#484848',
                white: '#FFF',
            }
        }
    }
}

// TODO: ogarnąć jak zrobić zmianę motywu po stronie klienta
// export const darkTheme = createMuiTheme(options(true))
// export const lightTheme = createMuiTheme(options(false))

const myTheme = createMuiTheme(options(true));
export default myTheme;
