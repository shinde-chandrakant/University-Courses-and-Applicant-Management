import { Avatar, Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Footer from "../common/components/Footer";
import NavBar from "../common/components/navBar/NavBar";

import universityImage from '../styles/raw/university_img.png';
import background from '../styles/raw/university_img.png';

const AboutUsScreen = () => {
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
                <Card sx={{ mt: 2, mb: 8 }}>
                    <CardContent>

                        <Typography variant="h3" sx={{ mt: 2, textAlign: 'center' }}>
                            About Us
                        </Typography>

                        <Divider sx={{ mt: 4 }} />

                        <Box
                            textAlign='center'
                            display='flex'
                            justifyContent='center'
                            mt={4}
                        >
                            <Avatar
                                src={universityImage}
                                sx={{ width: 350, height: 350, borderRadius: 4 }}
                            />
                        </Box>

                        <Typography variant="h5" sx={{ mt: 8 }}>
                            Who we are
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 4 }}>
                            The University of London is the UK’s leading provider of digital and blended distance education internationally, offering programmes to 45,000 students in 190 countries around the world. Although proudly rooted in London, our community and impact are global.
                        </Typography>

                        <Typography variant="body1" sx={{ mt: 2 }}>
                            We are a national leader in the humanities, and we promote their value to society and the economy through knowledge creation and exchange.
                        </Typography>

                        <Typography variant='body1' sx={{ mt: 2 }}>
                            We are also a federation of 17 esteemed higher education institutions, with collaboration at the heart of our ethos. The University of London federation is a collective community of more than 240,000 learners and 50,000 staff, delivering world-leading research across all disciplines.
                        </Typography>

                        <Typography variant='body1' sx={{ mt: 2 }}>
                            Our passion for increasing access to education and mobilising the collective power and expertise of the federation is central to our ability to transform lives around the world and address the global challenges of the future.
                        </Typography>


                    </CardContent>
                </Card>
            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default AboutUsScreen;
