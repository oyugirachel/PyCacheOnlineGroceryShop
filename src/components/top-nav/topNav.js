import React from "react";
import "./topNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default class TopNav extends React.Component {
  render() {
    return (
      //   <div class="super_container">
      //     <header class="header trans_300">
      <div class="top_nav">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="top_nav_left">
                Free Delivery on all orders above KES.400
              </div>
            </div>
            <div class="col-md-6 text-right">
              <div class="top_nav_right">
                <ul class="top_nav_menu">
                  <li class="currency">
                    <a href="#">
                      KES
                      <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <ul class="currency_selection">
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">USH</a>
                      </li>
                      <li>
                        <a href="#">eur</a>
                      </li>
                      <li>
                        <a href="#">TSH</a>
                      </li>
                    </ul>
                  </li>
                  <li class="language">
                    <a href="#">
                      English
                      <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <ul class="language_selection">
                      <li>
                        <a href="#">SWAHILI</a>
                      </li>
                      <li>
                        <a href="#">FRENCH</a>
                      </li>
                      <li>
                        <a href="#">German</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </li>
                  <li class="account">
                    <a href="#">
                      My Account
                      <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                    <ul class="account_selection">
                      <li>
                        <a href="https://login-signup.vercel.app/">
                          <i class="fa fa-sign-in" aria-hidden="true"></i>
                          <FontAwesomeIcon icon={faSignInAlt} />
                          Sign In
                        </a>
                      </li>
                      <li>
                        <a href="https://login-signup.vercel.app/">
                          <FontAwesomeIcon icon={faUserPlus} />
                          Register
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      //     </header>
      //   </div>
    );
  }
}
