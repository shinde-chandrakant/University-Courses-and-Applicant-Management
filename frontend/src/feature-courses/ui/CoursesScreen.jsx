import React, { useState } from "react";
import { Container, Fab, Dialog, DialogContent, DialogTitle, Divider, Box } from "@mui/material";
import AddOutlined from '@mui/icons-material/AddOutlined';

import NavBar from "../../common/components/navBar/NavBar";
import AddNewCourse from "./components/AddNewCourse";
import Courses from "./Courses";
import background from '../../styles/raw/course_bg_1.jpg';
import Footer from "../../common/components/Footer";

const CoursesScreen = () => {

    const [openAddNewCourse, setOpenAddNewCourse] = useState(false);
    const [editItem, setCurrentEditItem] = useState(undefined);

    const handleOpenNewCourse = () => {
        setOpenAddNewCourse(value => {
            const val = !value;
            if (!val) {
                setCurrentEditItem(undefined);
            }
            return val;
        });
    }

    const handleOnClickEdit = (editItem, index) => {
        setCurrentEditItem({ item: editItem, index: index });
        handleOpenNewCourse();
    }

    return <React.Fragment>

        <Box
            position='absolute'
            width='100%'
            height='100%'
            zIndex={-1}
            sx={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', opacity: '0.7' }}
        />

        <header>
            <NavBar />
        </header>
        <main>
            <Container maxWidth='xl'>

                <Courses
                    sx={{ mt: 2 }}
                    onClickEdit={handleOnClickEdit}
                />

                <Dialog
                    open={openAddNewCourse}
                    onClose={handleOpenNewCourse}
                    maxWidth={'xs'}
                    fullWidth
                >
                    <DialogTitle>
                        {
                            editItem ? "Update Course" : "Add New Course"
                        }
                    </DialogTitle>

                    <Divider />

                    <DialogContent>
                        <AddNewCourse
                            handleOnClickCancel={handleOpenNewCourse}
                            editItem={editItem}
                        />
                    </DialogContent>
                </Dialog>

                <Fab color="secondary"
                    variant='extended'
                    sx={{ position: 'fixed', bottom: 0, mb: 8 }}
                    onClick={handleOpenNewCourse}
                >
                    <AddOutlined sx={{ mr: 2 }} /> Add Course
                </Fab>

            </Container>
        </main>

        <Footer />
    </React.Fragment>
}

export default CoursesScreen;