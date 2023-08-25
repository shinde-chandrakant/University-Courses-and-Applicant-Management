import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isVisible: false,
    message: '',
    severity: undefined
}

export const severity = {
    success: 'success',
    info: 'info',
    warining: 'warning',
    error: 'error'
}

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: { initialState },
    reducers: {
        showSnackBar(state, action) {
            const { message, severity } = action.payload;
            state.isVisible = true;
            state.message = message;
            state.severity = severity;
        },
        hideSnackBar(state) {
            state.isVisible = false;
        },
    }
});

export const UiActions = uiSlice.actions;
export default uiSlice;