import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { deleteCourse, initializeCourses } from "../../store/courses-slice";
import CourseComp from "./components/CourseComp";

const Courses = ({ onClickEdit, ...others }) => {
    const { courses } = useSelector(store => store.courses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeCourses());
    }, []);

    const handleOnClickDelete = (data, index) => {
        dispatch(deleteCourse({ courseId: data.courseId, index }));
    }

    const handleOnEdit = (data, index) => {
        onClickEdit(data, index);
    }

    return <React.Fragment>
        <Grid container {...others} spacing={2}>
            {
                courses.map((data, index) => (
                    <Grid item
                        md={3} xl={3} lg={3}
                        key={`${data.courseId}`}
                    >
                        <CourseComp
                            data={data}
                            onClickEdit={() => handleOnEdit(data, index)}
                            onClickDelete={() => handleOnClickDelete(data, index)}
                        />
                    </Grid>
                ))
            }
        </Grid>
    </React.Fragment >
}

export default Courses;