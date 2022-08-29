import React from "react";
import "./register.css";

export const Sidebar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <link rel="stylesheet" href="styles.css"></link>
      <div className="d-flex">
        <div id="sidebar">
          <div className="p-2">
            <a
              href="#"
              className="navbar-brand text-center text-light w-100 p-4 border-bottom"
            >
              Sidebar
            </a>
          </div>
          <div id="sidebar-accordion" class="accordion">
            <div className="list-group">
              <a
                href="#dashboard-items"
                data-toggle="collapse"
                aria-expanded="false"
                className="list-group-item list-group-item-action bg-dark text-light"
              >
                <i className="fa fa-tachometer mr-3" aria-hidden="true"></i>
                Dashboard
              </a>
              <div
                id="dashboard-items"
                className="collapse"
                data-parent="#sidebar-accordion"
              >
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light pl-5"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light pl-5"
                >
                  Item 2
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light pl-5"
                >
                  Item 3
                </a>
              </div>
              <a
                href="#profile-items"
                data-toggle="collapse"
                aria-expanded="false"
                className="list-group-item list-group-item-action bg-dark text-light"
              >
                <i className="fa fa-user mr-3" aria-hidden="true"></i>Profile
              </a>
              <div
                id="profile-items"
                className="collapse"
                data-parent="#sidebar-accordion"
              >
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light pl-5"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action bg-dark text-light pl-5"
                >
                  Item 2
                </a>
              </div>
              <a
                href="#"
                className="list-group-item list-group-item-action bg-dark text-light"
              >
                <i className="fa fa-shopping-cart mr-3" aria-hidden="true"></i>
                Buy Now!
              </a>
              <a
                href="#setting-items"
                data-toggle="collapse"
                aria-expanded="false"
                className="list-group-item list-group-item-action bg-dark text-light"
              >
                <i className="fa fa-cog mr-3" aria-hidden="true"></i>Settings
              </a>
              <div
                id="setting-items"
                className="collapse"
                data-parent="#sidebar-accordion"
              >
                <div className="d-flex flex-row text-center">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-light"
                  >
                    Item 1
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-light"
                  >
                    Item 2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
