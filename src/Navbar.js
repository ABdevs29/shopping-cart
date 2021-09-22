import React from "react";

function Navbar({ cart }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://png.pngtree.com/png-vector/20191017/ourlarge/pngtree-shop-icon-png-image_1820095.jpg"
              alt="shop"
              width="33px"
            />{" "}
            Shopping Cart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mobiles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tablets
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button
            type="button"
              className="btn btn-outline-success"
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ width: "9rem" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="cart"
                width="22px"
              />{" "}
              {"  "}
              Cart {cart.length}
            </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
