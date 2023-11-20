import { Fragment, useState } from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet, RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './pages/login';
import { Sidebar } from './components/sideBar';
import Dashboard from './pages/dashboard';
import { Header } from './components/header';
import { Users } from './pages/users';
import TFAverify from './pages/tfa';
import ForgotPassword from './pages/forgotpsw';
import ForgotPattern from './pages/forgotptrn';
import ResetPattern from './pages/resetptrn';

function App() {

  const FullPageRouter = () => {
    return (
      <Outlet />
    )
  }

  const SidebarRouter = () => {
    return (
      <Fragment>
            <Sidebar />
        <Header />
        <div className='main-content'>
            <Outlet />
        </div>
      </Fragment>
    )
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<FullPageRouter />}>
          <Route index element={<Login />} />
          <Route path='tfa-auth' element={<TFAverify />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='forgot-pattern' element={<ForgotPattern />} />
          <Route path='reset-pattern' element={<ResetPattern />} />
        </Route>

        <Route path="/" element={<SidebarRouter />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Route>
    )
  )

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeButton={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
