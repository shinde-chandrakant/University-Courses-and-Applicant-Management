import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
    const { isLoggedIn } = useSelector(store => store.auth);

    return isLoggedIn ? children : <Navigate to="/sign-in" replace />;
}

export default RequireAuth;