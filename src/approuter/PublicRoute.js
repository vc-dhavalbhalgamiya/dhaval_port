import React from "react";
import { Route } from "react-router-dom";
// import Mainlayout from "../layouts/mainLayout";
import AdminLayout from "../Layouts/adminLayouts";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    //console.log({rest});
    return (
        <Route
            {...rest}
            component={(props) => {
                //console.log({props})
                if (rest.fulllayout) {
                    return (
                        <>

                        </>
                    );
                } else {
                    return (
                        <AdminLayout props={props}>
                            <Component {...props} />{" "}
                        </AdminLayout>
                    );
                }
            }}
        />
    );
};


export default PublicRoute;
