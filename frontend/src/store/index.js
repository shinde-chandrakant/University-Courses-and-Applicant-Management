import { combineReducers, configureStore } from "@reduxjs/toolkit";
import admissionSlice from "./admission-slice";
import applicantSlice from "./applicant-slice";
import committeeMemberSlice from "./committeeMember-slice";
import courseSlice from "./courses-slice";
import staffMembersSlice from "./staffMembers-slice";
import authSlice from "./auth-slice";
import uiSlice from "./ui-slice";

const rootReducer = combineReducers({
    courses: courseSlice.reducer,
    applicants: applicantSlice.reducer,
    staffMembers: staffMembersSlice.reducer,
    admissions: admissionSlice.reducer,
    committeeMembers: committeeMemberSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;