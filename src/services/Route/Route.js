import { Route } from "react-router-dom"


const Route = ({ component: Component, roles, path }) => {
    roles = roles || [];
    return (
        <Route
            path={path}
            exact={true}
            element={() => 
                hasRoles(roles) ? (
                    <Component/>
                ) : (
                    isAuth() ? (
                        <Unauthorized />
                    ) : (
                        <Redirect to="/login" />
                    )
                )
            }
        />
    );
}