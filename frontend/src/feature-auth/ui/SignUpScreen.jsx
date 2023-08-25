import { Card, CardContent, CardHeader, Container, Divider } from "@mui/material";
import React from "react";
import NavBar from "../../common/components/navBar/NavBar";
import SignUpForm from "./components/SignUpForm";

const SignUpScreen = () => {
    return <React.Fragment>
        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='sm'>
                <Card sx={{ mt: 28 }}>
                    <CardHeader title='Sign Up' />
                    <Divider />
                    <CardContent>
                        <SignUpForm />
                    </CardContent>
                </Card>
            </Container>
        </main>
    </React.Fragment>
}

export default SignUpScreen;