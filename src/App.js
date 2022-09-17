import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { AuthProvider } from "./components/Auth/Auth";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// import Homepage from "./pages/Homepage";
// import DirectoryPage from "./pages/DirectoryPage";
// import Detail from "./pages/Detail/Detail";
// import MyAccount from "./components/MyAccount/MyAccount";
import PrivateRoute from "./PrivateRoute";
// import SignInAndUp from "./pages/SignInAndUp";

import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/Homepage")), 300);
  })
  });
const SignInAndUp = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/SignInAndUp/SignInAndUp")), 300);
  })
  });
const MyAccount = lazy(() => import("./pages/MyAccount/MyAccount"));
const DirectoryPage = lazy(() => import("./pages/DirectoryPage"));
const Detail = lazy(() => import("./pages/Detail/Detail"));

// const Footer = lazy(() => import("./components/footer/footer"));

export const SuspenseComponent = Component => {
  return(
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={SuspenseComponent(HomePage)} />
            <Route
              path="/:category"
              element={SuspenseComponent(DirectoryPage)}
            />
            <Route
              path="/:category/search/:keyword"
              element={SuspenseComponent(DirectoryPage)}
            />
            <Route path="/:category/:id" element={SuspenseComponent(Detail)} />
            <Route path="/myaccount" element={SuspenseComponent(MyAccount)} />

            <Route
              path="/login"
              element={
                <PrivateRoute>
                  {SuspenseComponent(SignInAndUp)}
                </PrivateRoute>
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
