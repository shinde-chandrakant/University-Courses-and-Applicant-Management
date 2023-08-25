import { AppBar, Box, Card, CardHeader, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

import Footer from "../../common/components/Footer";
import NavBar from "../../common/components/navBar/NavBar";
import background from '../../styles/raw/university_img.png';

const HomeScreen = () => {


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
            <Container sx={{ mt: 2 }} maxWidth='xl'>

                <Box width='100%' mt={32} display='flex' justifyContent='center'>

                    <Typography width='80%' textAlign='center' color='white' variant='h2'>
                        University life will give you much more than just a degree - get ready for all the adventures
                    </Typography>
                </Box>

            </Container>
        </main>

        <Footer />

    </React.Fragment>;
}

export default HomeScreen;