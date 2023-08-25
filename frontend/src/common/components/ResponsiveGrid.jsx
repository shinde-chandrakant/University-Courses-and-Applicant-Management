import { Grid } from "@mui/material";

const ResponsiveGrid = ({children}) => {
    return <Grid item md={3} xl={3} lg={3}>
            {children}
    </Grid>
};

export default ResponsiveGrid;