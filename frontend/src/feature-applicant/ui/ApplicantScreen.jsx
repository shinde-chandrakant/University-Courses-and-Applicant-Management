import { Container, Dialog, Fab, Box, Card, CardContent, Button } from "@mui/material";
import React, { useState } from "react";
import AddOutlined from '@mui/icons-material/AddOutlined';

import NavBar from '../../common/components/navBar/NavBar';
import Applicants from "./Applicants";
import AddApplicant from "./components/AddApplicant";
import background from '../../styles/raw/applicants_bg.jpg';
import useOpenEdit from "../../hooks/useOpenEdit";
import Footer from "../../common/components/Footer";
import StatusSelector from "../../common/components/StatusSelector";
import SpaceBetweenBox from "../../common/components/SpaceBetweenBox";
import { useDispatch } from "react-redux";
import { getApplicantsByStatus } from "../../store/applicant-slice";
import useSnackbar from "../../hooks/useSnackBar";
import { severity } from "../../store/ui-slice";

const ApplicantScreen = () => {

    const { open, handleOpen, handleEditItem, editItem } = useOpenEdit();
    const [status, setStatus] = useState('');
    const dispatch = useDispatch();
    const { handleOpenSnackbar } = useSnackbar();

    const handleOnChange = (name, value) => {
        setStatus(value);
    }

    const handleOnClickGet = async () => {
        const result = await dispatch(getApplicantsByStatus(status)).unwrap();
        if (result.isSuccess) {
            const data = result.value;
            if (data.length === 0) {
                handleOpenSnackbar("0 item in database", severity.warining);
            }
        } else {

            const errorMessage = result.errorMessage;

            handleOpenSnackbar(errorMessage, severity.error);
        }
    }

    return <React.Fragment>

        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={-1}
            sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', opacity: '0.6' }}
        />

        <header>
            <NavBar />
        </header>
        <main>
            <Container
                maxWidth='xl'
            >

                <Card sx={{ mt: 2, maxWidth: '300px' }}>
                    <CardContent>
                        <SpaceBetweenBox>

                            <StatusSelector
                                sx={{ width: '100%' }}
                                label='Status'
                                name='status'
                                onChange={handleOnChange}
                                value={status}
                            />
                            <Button sx={{ ml: 2 }} variant='outlined' onClick={handleOnClickGet}>
                                Get
                            </Button>
                        </SpaceBetweenBox>
                    </CardContent>
                </Card>

                <Applicants
                    sx={{ mt: 2 }}
                    onClickEdit={handleEditItem}
                />

                <Dialog
                    open={open}
                    onClose={handleOpen}
                    maxWidth='xs'
                    fullWidth
                >
                    <AddApplicant
                        onClickCancel={handleOpen}
                        editItem={editItem}
                    />
                </Dialog>

                <Fab
                    color="secondary"
                    variant='extended'
                    sx={{ position: 'fixed', bottom: 0, mb: 8 }}
                    onClick={handleOpen}
                >
                    <AddOutlined sx={{ mr: 2 }} /> Add Applicant
                </Fab>
            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default ApplicantScreen;