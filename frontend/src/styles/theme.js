import {createTheme} from "@mui/material/styles";

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: '#263238',
        },
        secondary: {
            main: '#f50057',
        },
        text: {
            primary: '#000000',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto',
    },
    shape:{
        borderRadius:4
    },
    breakpoints: {
        values: {
            xs:0,
            sm:640,
            md:900,
            lg:1260,
            xl:1536
        }
    }
});

export default defaultTheme;