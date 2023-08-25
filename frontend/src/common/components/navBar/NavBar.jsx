import React from "react";
import { AppBar, Box, Container, Toolbar, Button, CssBaseline, Avatar, Stack } from "@mui/material";

import SpaceBetweenBox from "../SpaceBetweenBox";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../../store/auth-slice";
import logo from '../../../styles/raw/university_logo.png';
import HomeButton from "./HomeButton";

const NavBar = () => {
    const { isLoggedIn } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnClickSignIn = () => {
        if (isLoggedIn) {
            dispatch(AuthActions.signOut());
        } else {
            navigate('/sign-in');
        }
    }

    return <React.Fragment>
        <CssBaseline />
        <Box flexGrow={1}>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar>
                        <SpaceBetweenBox width='100%'>
                            <Stack flexDirection='row' alignItems='center'>

                                <Link to="/">

                                    <Avatar
                                        src={logo}
                                        sx={{ width: 64, height: 64 }}
                                    />

                                </Link>

                                <Link to='/about-us'>
                                    <Button
                                        variant='text'
                                        color='inherit'
                                        sx={{ ml: 2 }}
                                    >
                                        About Us
                                    </Button>
                                </Link>

                                <Link to='/contact-us'>
                                    <Button
                                        variant='text'
                                        color='inherit'
                                        sx={{ ml: 2 }}
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </Stack>

                            <Stack flexDirection='row' alignItems='center'>
                                {
                                    isLoggedIn &&
                                    <HomeButton />
                                }

                                <Button
                                    variant='text'
                                    color='inherit'
                                    onClick={handleOnClickSignIn}
                                >
                                    {
                                        isLoggedIn ? "Sign Out" : "Sign In"
                                    }
                                </Button>
                            </Stack>

                        </SpaceBetweenBox>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    </React.Fragment>;
}

export default NavBar;