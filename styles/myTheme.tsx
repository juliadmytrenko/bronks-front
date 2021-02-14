import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
    primary: '#ffab00',
    light: 'floralwhite',
    contrastText: '#050505',
    secondary: '#ffd600',
    error: '#E44C65',
    background: 'rgb(178, 119, 0)',
    text: '#bbe1fa',
}

export const paletteColorsLight = {
    primary: '#FFF',
    light: 'ghostwhite',
    contrastText: '#050505',
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
                light: paletteColors.light,
                dark: paletteColors.primary,
                contrastText: paletteColors.contrastText,
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
                black: '#000',
                white: '#FFF',

            },
        },
        overrides: {
            MuiTypography: {
                'h1': {
                    fontFamily: 'Yusei Magic',
                },
                h2: {
                    fontFamily: 'Yusei Magic',
                },
                h3: {
                    fontFamily: 'Yusei Magic',
                },
                h4: {
                    fontFamily: 'Yusei Magic',
                },
                h5: {
                    fontFamily: 'Yusei Magic',
                },
                h6: {
                    fontFamily: 'Yusei Magic',
                },
            }
        },
    }
}

// TODO: ogarnąć jak zrobić zmianę motywu po stronie klienta
// export const darkTheme = createMuiTheme(options(true))
// export const lightTheme = createMuiTheme(options(false))

const myTheme = createMuiTheme(options(true));
export default myTheme;
