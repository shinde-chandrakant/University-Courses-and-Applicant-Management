import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import React from "react";
import NavBar from "../common/components/navBar/NavBar";
import Footer from '../common/components/Footer';

import background from '../styles/raw/university_img.png';

const ContactUsScreen = () => {
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
            <Container maxWidth='xl'>
                <Box display='flex' justifyContent='center'>

                    <Card sx={{ width: 500, mt: 12 }}>
                        <CardContent>
                            <Typography variant='h2' textAlign='center'>
                                Contact Us
                            </Typography>

                            <Divider sx={{ mt: 4 }} />

                            <Box sx={{ mt: 4 }}>

                                <Typography variant='body1'>
                                    Email - contactus@university.com
                                </Typography>

                                <Typography variant='body1' sx={{ mt: 2 }}>
                                    Contact - 1234567897
                                </Typography>

                            </Box>
                        </CardContent>
                    </Card>
                </Box>

            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default ContactUsScreen;