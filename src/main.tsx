import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import { AuthProvider } from './config/authcontext';
import "./index.scss";
import App from './layout/app';
import { Custom } from './layout/custom';
import CrmDashboard from './pages/dashboard/crmdashboard';
import Register from './pages/custompages/register/register';
import Login from "./pages/custompages/login/login";
import LockScreen from './pages/custompages/lockscreen/lockscreen';
import ForgotPassword from './pages/custompages/forgotpassword/forgotpassword';
import Error404 from './pages/custompages/error404/error404';
import UserListView from './pages/dashboard/user/listview';
import ViolationListView from './pages/dashboard/violation/listview';
import RoleListView from './pages/dashboard/role/listview';
import TestListView from './pages/dashboard/test/listview';

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
