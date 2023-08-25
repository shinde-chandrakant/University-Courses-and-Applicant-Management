import { Container, Dialog, Box } from "@mui/material";
import React, { useState } from "react";

import NavBar from '../../common/components/navBar/NavBar';
import AddFab from '../../common/components/AddFab';
import AddAdmission from "./components/AddAdmission";
import FilterAdmissions from "./components/FilterAdmissions";
import Admissions from "./components/Admissions";
import Footer from '../../common/components/Footer';
import background from '../../styles/raw/admissions_bg.jpg';

const AddmissionScreen = () => {

    const [open, setOpen] = useState(false);
    const [editItem, setEditItem] = useState();

    const handleOpen = () => {
        setOpen(value => {
            const val = !value;
            if (!val) {
                setEditItem(undefined);
            }
            return val;
        });
    }

    const handleEditItem = (value, index) => {
        setEditItem({
            item: value,
            index
        });
        handleOpen();
    }

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

                <FilterAdmissions />

                <Admissions
                    sx={{ mt: 2 }}
                    onClickEdit={handleEditItem}
                />

                <Dialog
                    open={open}
                    onClose={handleOpen}
                    maxWidth='xs'
                    fullWidth
                >
                    <AddAdmission
                        onClickCancel={handleOpen}
                        editItem={editItem}
                    />
                </Dialog>

                <AddFab
                    onClick={handleOpen}
                    text={"Add New Admission"}
                />
            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default AddmissionScreen;