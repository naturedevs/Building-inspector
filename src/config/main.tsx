import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import { AuthProvider } from './authcontext';
import App from '../pages/app';
import "../index.scss";
import CrmDashboard from '../container/crm/dashboard/crmdashboard';
import { Custom } from '../pages/custom';
import Register from '../container/custompages/register/register';
import Login from "../container/custompages/login/login";
import LockScreen from '../container/custompages/lockscreen/lockscreen';
import ForgotPassword from '../container/custompages/forgotpassword/forgotpassword';
import Error404 from '../container/custompages/error404/error404';

import PrivateRoute from './privateroute';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <BrowserRouter>
      <AuthProvider>
        <React.Suspense>
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Custom />}>
              <Route index path={`${import.meta.env.BASE_URL}`} element={<Login /> }/>
              <Route path={`${import.meta.env.BASE_URL}forgotpassword`} element={<ForgotPassword /> }/>
              <Route path={`${import.meta.env.BASE_URL}register`} element={<Register /> }/>
              <Route path={`${import.meta.env.BASE_URL}login`} element={<Login /> }/>
            </Route> 

            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<CrmDashboard />} />
            </Route>

            <Route path="*" element={<Error404 />} />
          </Routes>
          <Toaster position="top-right" />
        </React.Suspense >
      </AuthProvider>
    </BrowserRouter>
  </Fragment>
);
