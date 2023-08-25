import React from "react";
import Container from "@mui/material/Container";
import { Box } from '@mui/material';

import NavBar from "../../common/components/navBar/NavBar";
import SignInModes from "./components/SignInModes";
import background from '../../styles/raw/auth_bg.jpg';
import Footer from '../../common/components/Footer';

const SignInModesScreen = () => {

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
                <SignInModes />
            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default SignInModesScreen;