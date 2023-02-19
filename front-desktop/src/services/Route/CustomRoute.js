import React, { useContext } from 'react';
import { UserContext } from '../UserService'
import Unauthorized from "../../scenes/Error/Unauthorized";
import { Navigate } from "react-router-dom";

const CustomRoute = ({ component: Component, roles }) => {

    const { role } = useContext(UserContext);

    const hasRoles = roles => {
        if (roles.includes("*")) {
            return true;
        } if (roles.includes(role)) {
            return true;
        } else {
            return false;
        }
    };

    const isAuth = () => {
        if (role != null) {
            return true
        }
        return false;
    };

    roles = roles || ["*"];
    return (
        hasRoles(roles) ? (
            Component
        ) : (
            isAuth() ? (
                <Unauthorized />
            ) : (
                <Navigate to="/login"></Navigate>
            )
        )
    );
}

export default CustomRoute;