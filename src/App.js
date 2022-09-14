import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { AuthProvider } from "./components/Auth/Auth";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Homepage from "./pages/Homepage";
import DirectoryPage from "./pages/DirectoryPage";
import Detail from "./pages/Detail/Detail";
import MyAccount from "./components/MyAccount/MyAccount";
import PrivateRoute from "./PrivateRoute";
import SignInAndUp from "./pages/SignInAndUp";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/:category" element={<DirectoryPage />} />
            <Route
              path="/:category/search/:keyword"
              element={<DirectoryPage />}
            />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/myaccount" element={<MyAccount />} />

            <Route
              path="/login"
              element={
                <PrivateRoute>
                  <SignInAndUp />
                </PrivateRoute>
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
