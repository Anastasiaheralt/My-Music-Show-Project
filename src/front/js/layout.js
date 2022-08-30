import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

import injectContext from "./store/appContext";
import { Terminos } from "./pages/terminos";
import { ProviderProfile } from "./pages/providerProfile";
import { UserPage } from "./pages/userPage";
import { ProviderPage } from "./pages/providerPage";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Terminos />} path="/terms" />
            <Route element={<Register />} path="/register" />
            <Route element={<ProviderProfile />} path="/provider" />
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            <Route element={<UserPage />} path="/userpage" />
            <Route element={<ProviderPage />} path="/providerpage" />
            <Route path="/provider/:username" element={<UserPage />}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
