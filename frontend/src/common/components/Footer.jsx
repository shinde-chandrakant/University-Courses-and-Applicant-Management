import { Box, useTheme } from "@mui/material";

const Footer = () => {

    const theme = useTheme();

    const color = theme.palette.primary.main;
    return <footer>
        <Box
            position='fixed'
            bottom={0}
            height='56px'
            width='100%'
            sx={{ backgroundColor: `${color}` }}
        />
    </footer>
}
export default Footer;