import { Container, Box } from "@mui/material";
import React from "react";

import NavBar from "../../common/components/navBar/NavBar";
import FabDialog from "../../common/components/FabDialog";
import useOpenEdit from "../../hooks/useOpenEdit";
import AddCommitteeMember from "./components/AddCommitteeMember";
import CommitteeMembers from "./components/CommitteeMembers";
import Footer from '../../common/components/Footer';

import background from '../../styles/raw/committe_bg.jpg';

const AdmissionCommitteeScreen = () => {

    const { open, handleEditItem, handleOpen, editItem } = useOpenEdit();

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

                <CommitteeMembers
                    onClickEdit={handleEditItem}
                    sx={{ mt: 2 }}
                />

                <FabDialog
                    open={open}
                    fabText={"Add Committee Member"}
                    handleOpen={handleOpen}
                >
                    <AddCommitteeMember
                        editItem={editItem}
                        onClickCancel={handleOpen}
                    />
                </FabDialog>
            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default AdmissionCommitteeScreen;