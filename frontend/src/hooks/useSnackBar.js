import { useSelector, useDispatch } from "react-redux";
import { UiActions } from '../store/ui-slice';

function useSnackbar() {
//use
    const snackbarState = useSelector(store => store.ui);

    const dispatch = useDispatch();

    const handleCloseSnackbar = () => {
        dispatch(UiActions.hideSnackBar());
    }

    const handleOpenSnackbar = (message, severity) => {
        dispatch(UiActions.showSnackBar({
            message: message,
            severity: severity
        }));
    }

    return {
        ...snackbarState, handleCloseSnackbar, handleOpenSnackbar
    }
}

export default useSnackbar;