import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Repository from '../feature-courses/data/repository/Repository';

const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: []
    },
    extraReducers(reducers) {
        reducers.addCase(initializeCourses.fulfilled, (state, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                state.courses = result.value;
            }
        });
        reducers.addCase(addCourse.fulfilled, ({ courses }, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                courses.push(data);
            }
        });
        reducers.addCase(deleteCourse.fulfilled, ({ courses }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                courses.splice(index, 1);
            }
        });
        reducers.addCase(updateCourse.fulfilled, ({ courses }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                courses[index] = result.value;
            }
        })
    }
});

const repository = new Repository();

export const initializeCourses = createAsyncThunk(
    '/initializeCourses',
    async () => {
        const result = await repository.getAllCourse();
        return result;
    }
);

export const addCourse = createAsyncThunk(
    '/addCourse',
    async (course) => {
        const data = {
            ...course,
            courseStartDate: course.courseStartDate.toISOString(),
            courseEndDate: course.courseEndDate.toISOString(),
        };

        const result = await repository.addCourse(data);
        return result;
    }
)

export const deleteCourse = createAsyncThunk(
    '/deleteCourse',
    async ({ courseId, index }) => {
        const result = await repository.deleteCourse(courseId);
        return {
            result, index
        }
    }
);

export const updateCourse = createAsyncThunk(
    '/updateCourse',
    async ({ course, index }) => {
        const result = await repository.updateCourse(course);
        console.log(result);
        return {
            result, index
        };
    }
)



export const CourseActions = courseSlice.actions;
export default courseSlice;
