import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Repository from "../feature-applicant/data/repository/Repository";

const applicantSlice = createSlice({
    name: 'applicant',
    initialState: {
        applicants: []
    },
    reducers: {
        add(state, applicant) {
            const item = applicant.payload;
            state.applicants.push(item);
        },
        update(state, updateItem) {
            const index = updateItem.payload.index;
            const item = updateItem.payload.item;
            state.applicants[index] = item;
        },
        delete(state, deleteIndex) {
            const index = deleteIndex.payload;
            state.applicants.splice(index, 1);
        }
    },
    extraReducers(reducers) {
        reducers.addCase(addApplicant.fulfilled, ({ applicants }, action) => {
            const result = action.payload;
            if (result.isSuccess) {
                applicants.push(result.value);
            }
        });
        reducers.addCase(getApplicantsByStatus.fulfilled, (state, action) => {
            const result = action.payload;
            if (result.isSuccess) {
                state.applicants = result.value;
            }
        });
        reducers.addCase(updateApplicant.fulfilled, ({ applicants }, action) => {
            const { result, index } = action.payload;
            if (result.isSuccess) {
                const data = result.value;
                applicants[index] = data;
            }
        });
        reducers.addCase(deleteApplicant.fulfilled, ({ applicants }, action) => {
            const { result, index } = action.payload;
            if (result.isSuccess) {
                applicants.splice(index, 1);
            }
        });
    }
});

const repo = new Repository();

export const getApplicantsByStatus = createAsyncThunk(
    '/initializeApplicants',
    async (status) => {
        const result = await repo.getApplicantByStatus(status);
        return result;
    }
);

export const addApplicant = createAsyncThunk(
    '/addApplicant',
    async (applicant) => {
        const result = await repo.addApplicant(applicant);
        return result;
    }
);

export const updateApplicant = createAsyncThunk(
    '/updateApplicant',
    async ({ applicant, index }) => {
        const result = await repo.updateApplicant(applicant);
        return {
            result, index
        }
    }
);

export const deleteApplicant = createAsyncThunk(
    '/deleteApplicant',
    async ({ applicant, index }) => {
        const result = await repo.deleteApplicant(applicant);
        return {
            result, index
        }
    }
)

export const ApplicantsAction = applicantSlice.actions;
export default applicantSlice;