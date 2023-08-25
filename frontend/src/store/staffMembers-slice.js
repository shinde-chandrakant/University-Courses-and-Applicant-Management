import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Repository from "../feature-staffMember/data/repository/Repository";

const staffMembersSlice = createSlice({
    name: 'staffMembers',
    initialState: {
        staffMembers: []
    },
    extraReducers(reducers) {
        reducers.addCase(initializeStaffMembers.fulfilled, (state, payload) => {
            const value = payload.payload;
            if (value.isSuccess) {
                state.staffMembers = value.value;
            }
        });
        reducers.addCase(addStaffMember.fulfilled, (state, payload) => {
            const value = payload.payload;
            if (value.isSuccess) {
                const data = value.value;
                state.staffMembers.push({ staffId: data.staffId, role: data.role });
            }
        });
        reducers.addCase(updateStaffMember.fulfilled, ({ staffMembers }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                const data = result.value;

                staffMembers[index] = {
                    staffId: data.staffId,
                    role: data.role
                };
            }
        });
        reducers.addCase(deleteStaffMember.fulfilled, ({ staffMembers }, payload) => {
            const { result, index } = payload.payload;
            if (result.isSuccess) {
                staffMembers.splice(index, 1);
            }
        })
    }
});

export const initializeStaffMembers = createAsyncThunk(
    '/initStaffMembers',
    async () => {
        const repo = Repository.getInstance();
        const result = await repo.getAllStaffMember();
        return result;
    }
);

export const addStaffMember = createAsyncThunk(
    '/addStaffMember',
    async (member) => {
        const repo = Repository.getInstance();
        const result = await repo.addStaffMember(member);
        return result;
    }
);

export const updateStaffMember = createAsyncThunk(
    '/updateStaffMember',
    async ({ member, index }) => {
        const repo = Repository.getInstance();
        const result = await repo.updateStaffMember(member);
  
        return {
            result: result,
            index: index
        };
    }
);

export const deleteStaffMember = createAsyncThunk(
    '/deleteStaffMember',
    async ({ id, index }) => {
        const repo = Repository.getInstance();
        const result = await repo.deleteStaffMember(id);
        return {
            result: result,
            index: index
        };
    }
)


export const StaffMemberActions = staffMembersSlice.actions;
export default staffMembersSlice;