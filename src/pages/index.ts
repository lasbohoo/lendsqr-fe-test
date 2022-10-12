import React from "react";

// ! Please add all pages as exotic components as below

const Login = React.lazy(() => import("./Login"));
const Users = React.lazy(() => import("./Users"));
const UserDetails = React.lazy(() => import("./UserDetails"));

export { Login, Users, UserDetails };
    