import { AccountCircleRounded, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Popover, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ActionTabs from "./ActionsTabs";

const HomeButton = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return <React.Fragment>

        <Button
            size='large'
            aria-describedby={id}
            onClick={handleClick}
            endIcon={
                open ? <ExpandLess /> : <ExpandMore />
            }
            color='inherit'
            startIcon={
                smallScreen && <AccountCircleRounded />
            }
            sx={{ mr: 1 }}
        >
            {
                !smallScreen && <Typography variant='button'
                    sx={{
                        textTransform: 'capitalize', whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '84px',
                        textAlign: 'center',
                        fontSize: 'inherit'
                    }}>

                    Home
                </Typography>
            }

        </Button>

        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <ActionTabs />
        </Popover>
    </React.Fragment>;
};

export default HomeButton;