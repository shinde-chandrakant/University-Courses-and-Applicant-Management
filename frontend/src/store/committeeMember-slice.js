import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Repository from "../feature-admissionCommittee/data/repository/Repository";

const committeeMemberSlice = createSlice({
    name: 'committeeMember',
    initialState: {
        members: []
    },
    extraReducers(reducers) {
        reducers.addCase(initializeCommitteeMembers.fulfilled, (state, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                state.members = data;
            }
        });
        reducers.addCase(addCommitteeMember.fulfilled, ({ members }, payload) => {
            const result = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                members.push(data);
            }
        });

        reducers.addCase(updateCommitteeMember.fulfilled, ({ members }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                const data = result.value;
                members[index] = data;
            }
        });
        reducers.addCase(deleteCommitteeMember.fulfilled, ({ members }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                members.splice(index, 1);
            }
        })
    }
});

const repo = new Repository();

export const initializeCommitteeMembers = createAsyncThunk(
    '/initializeCommitteeMembers',
    async () => {
        const result = await repo.getAllMember();
        return result;
    }
);

export const addCommitteeMember = createAsyncThunk(
    '/addCommitteeMember',
    async (member) => {
        const result = await repo.addMember(member);
        console.log(result);
        return result;
    }
);

export const updateCommitteeMember = createAsyncThunk(
    '/updateCommitteeMember',
    async ({ member, index }) => {
        const result = await repo.updateMember(member);
        return {
            result,
            index
        }
    }
);

export const deleteCommitteeMember = createAsyncThunk(
    '/deleteCommitteeMember',
    async ({ memberId, index }) => {
        const result = await repo.deleteMember(memberId);
        return {
            result, index
        }
    }
)


export default committeeMemberSlice;