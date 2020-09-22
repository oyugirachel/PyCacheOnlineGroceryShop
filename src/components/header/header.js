import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <div class="main_nav_container">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ">
              <div class="logo_container">
                <a href="#">
                  Pycache<span>GreenGrocers</span>
                </a>
              </div>
              <nav class="navbar">
                <ul class="navbar_menu">
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                  </li>
                  <li>
                    <a href="#">promotion</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="contact.html">contact</a>
                  </li>
                </ul>
                <ul class="navbar_user">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faSearch} />
                    </a>
                  </li>
                  <li>
                    <a href="https://login-signup.vercel.app/">
                      <FontAwesomeIcon icon={faUser} />
                    </a>
                  </li>
                  <li class="checkout">
                    <a href="#">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      <span id="checkout_items" class="checkout_items">
                        1
                      </span>
                    </a>
                  </li>
                </ul>
                <div class="hamburger_container">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
