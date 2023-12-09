import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvide";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()

    if (loading) {
        return <><div className=" h-96 w-full flex justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div></>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;