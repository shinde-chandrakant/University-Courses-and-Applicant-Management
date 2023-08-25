import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Card, CardContent, CardHeader, Divider, Typography, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import NavBar from "../../common/components/navBar/NavBar";
import SignInForm from "./components/SignInForm";
import signInModes from "../domain/utils/SignInModes";
import background from '../../styles/raw/auth_bg.jpg';
import Footer from "../../common/components/Footer";

const SignInScreen = () => {

    const { mode } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(store => store.auth);

    useEffect(() => {

        const isValidMode = mode === signInModes.applicant ||
            mode === signInModes.committeeMember ||
            mode === signInModes.staffMember;

        if (mode === undefined || !isValidMode) {
            navigate('/sign-in');
        }

    }, [mode]);

    return <React.Fragment>

        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={-1}
            sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', opacity: '0.8' }}
        />
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='sm'>
                <Card sx={{ mt: 28 }}>
                    <CardHeader title={`Sign in as ${mode}`} />

                    <Divider />

                    <CardContent>
                        <SignInForm
                            mode={mode}
                        />
                    </CardContent>
                </Card>
            </Container>
        </main>
        <Footer />
    </React.Fragment>
}

export default SignInScreen;