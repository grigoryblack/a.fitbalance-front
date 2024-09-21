import React from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "./features/store.ts";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const auth =  useSelector((state: RootState) => state.auth.token);

    return !!auth ? <>{children}</> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
