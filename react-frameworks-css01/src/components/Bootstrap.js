import React from "react";

function Navbar() {
  return (
    <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
      <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="index.html">
          Navbar
        </a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li classNameName="nav-item">
              <a classNameName="nav-link active" aria-current="page" href="index.html">
                Home
              </a>
            </li>
            <li classNameName="nav-item">
              <a classNameName="nav-link" href="index.html">
                Link
              </a>
            </li>
            <li classNameName="nav-item dropdown">
              <a
                classNameName="nav-link dropdown-toggle"
                href="index.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a classNameName="dropdown-item" href="index.html">
                    Action
                  </a>
                </li>
                <li>
                  <a classNameName="dropdown-item" href="index.html">
                    Another action
                  </a>
                </li>
                <li>
                  <hr classNameName="dropdown-divider" />
                </li>
                <li>
                  <a classNameName="dropdown-item" href="index.html">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li classNameName="nav-item">
              <a
                classNameName="nav-link disabled"
                href="index.html"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form classNameName="d-flex">
            <input
              classNameName="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button classNameName="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default function Bootstrap() {
  return (
    <>
      <h2>Bootstrap</h2>
      <Navbar/>
    </>
  );
}
