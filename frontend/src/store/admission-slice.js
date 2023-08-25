import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Repository from "../feature-admission/data/repository/Repository";

const admissionSlice = createSlice({
    name: 'admission',
    initialState: {
        admissions: []
    },
    extraReducers(reducers) {
        reducers.addCase(deleteAdmission.fulfilled, ({ admissions }, payload) => {
            const { result, index } = payload.payload;

            if (result.isSuccess) {
                admissions.splice(index, 1);
            }
        });
        reducers.addCase(updateAdmission.fulfilled, ({ admissions }, payload) => {
            const { result, index } = payload.payload;

            if (result.isSuccess) {
                const data = result.value;
                admissions[index] = data;
            }
        });
        reducers.addCase(addAdmission.fulfilled, ({ admissions }, payload) => {
            const result = payload.payload;

            if (result.isSuccess) {
                const data = result.value;
                admissions.push(data);
            }
        });
        reducers.addCase(getAdmissionsByCourseId.fulfilled, (state, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                state.admissions = data;
            }
        });

        reducers.addCase(getAdmissionsByDate.fulfilled, (state, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                state.admissions = data;
            }
        });
    }
});

const repo = new Repository();


export const getAdmissionsByCourseId = createAsyncThunk(
    '/getAdmissionsByCourseId',
    async (courseId) => {
        const result = await repo.getAdmissionsByCourseId(courseId);
        return result;
    }
);

export const getAdmissionsByDate = createAsyncThunk(
    '/getAdmissionsByDate',
    async (date) => {
        const result = await repo.getAdmissiosnByDate(date);
        return result;
    }
)

export const deleteAdmission = createAsyncThunk(
    '/deleteAdmission',
    async ({ admissionId, index }) => {
        const result = await repo.deleteAdmission(admissionId);
        return {
            result,
            index
        }
    }
);

export const updateAdmission = createAsyncThunk(
    '/updateAdmission',
    async ({ admission, index }) => {
        const result = await repo.updateAdmission(admission);
        return {
            result,
            index
        }
    }
);

export const addAdmission = createAsyncThunk(
    '/addAdmission',
    async (admission) => {
        const result = await repo.addAdmission(admission);
        return result;
    }
);


export default admissionSlice;