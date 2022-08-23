import React from "react";
import { Footer } from "../component/footer";
import { Registerclient } from "../component/registerclient";
import { Registerprovider } from "../component/registerprovider";
import "./../component/register.css";

export const Register = () => {
  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center text-center bg-light mt-2"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active fuente "
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Registro como Cliente
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link fuente"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Registro como Proveedor
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
          <Registerclient />
        </div>

        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <Registerprovider />
        </div>
      </div>
      <Footer />
    </>
  );
};
