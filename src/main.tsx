import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import { AuthProvider } from './config/authcontext';
import "./index.scss";
import CrmDashboard from './container/dashboard/crmdashboard';
import App from './layout/app';
import { Custom } from './layout/custom';
import Register from './container/custompages/register/register';
import Login from "./container/custompages/login/login";
import LockScreen from './container/custompages/lockscreen/lockscreen';
import ForgotPassword from './container/custompages/forgotpassword/forgotpassword';
import Error404 from './container/custompages/error404/error404';
import UserListView from './container/dashboard/user/listview';
import ViolationListView from './container/dashboard/violation/listview';
import RoleListView from './container/dashboard/role/listview';
import TestListView from './container/dashboard/test/listview';

import PrivateRoute from './config/privateroute';

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
              {/* <Route path={`${import.meta.env.BASE_URL}lock`} element={<LockScreen /> }/> */}
              <Route path={`${import.meta.env.BASE_URL}login`} element={<Login /> }/>
            </Route> 
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<CrmDashboard />} />
              <Route path={`${import.meta.env.BASE_URL}users`} element={<UserListView />} />
              <Route path={`${import.meta.env.BASE_URL}violations`} element={<ViolationListView />} />
              <Route path={`${import.meta.env.BASE_URL}roles`} element={<RoleListView />} />
              <Route path={`${import.meta.env.BASE_URL}tests`} element={<TestListView />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Toaster position="top-right" toastOptions={{
              success: {
                style: {
                  // background: 'green',
                },
              },
              error: {
                style: {
                  // background: 'red',
                },
              },
            }}
            />
        </React.Suspense >
      </AuthProvider>
    </BrowserRouter>
  </Fragment>
);
