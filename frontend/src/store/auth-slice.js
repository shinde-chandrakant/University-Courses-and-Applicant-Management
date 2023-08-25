import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthRepository from "../feature-auth/data/Repository";
import signInModes from "../feature-auth/domain/utils/SignInModes";

const initialValues = {
    isLoggedIn: false,
    logInMode: '',
    userDetails: ''
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: { initialValues },
    reducers: {
        signOut(state) {
            state.isLoggedIn = false;
            state.logInMode = '';
            state.userDetails = '';
        }
    },
    extraReducers(reducers) {
        reducers.addCase(loginUser.fulfilled, (state, action) => {
            const { logInMode, result } = action.payload;

            if (result.isSuccess) {
                state.isLoggedIn = true;
                state.logInMode = logInMode;
                state.userDetails = result.value;
            }
        });
    }
});

const repo = new AuthRepository();

export const loginUser = createAsyncThunk(
    '/loginUser',
    async ({ loginMode, id, password }) => {
        let result;
        switch (loginMode) {
            case signInModes.applicant: {
                result = await repo.loginAsApplicant(id, password);
                break;
            }
            case signInModes.committeeMember: {
                result = await repo.loginAsCommitteeMember(id, password);
                break;
            }
            case signInModes.staffMember: {
                result = await repo.loginAsStaffMember(id, password);
                break;
            }

            default: {
                result = await repo.loginAsApplicant(id, password);
            }
        }

        if (result.isSuccess) {
            const value = result.value;
            if (value !== 'Login Validated..') {
                result.isSuccess = false;
            }
        }else{
            result.value = result.errorMessage;
        }

        return {
            result,
            loginMode
        }
    }
)

export const AuthActions = authSlice.actions;
export default authSlice;