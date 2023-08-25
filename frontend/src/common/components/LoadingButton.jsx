import { Box, Button, CircularProgress } from "@mui/material";

const LoadingButton = ({ loading, ...others }) => {

    return <Box sx={{ position: 'relative' }}>
        <Button
            variant="contained"
            disabled={loading}
            {...others}
        >
            {others.children}
        </Button>
        {loading && (
            <CircularProgress
                size={24}
                color='secondary'
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                }}
            />
        )}
    </Box>
};

export default LoadingButton;