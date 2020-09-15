import React, { Component } from "react";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div
                class="banner_item align-items-center"
                style={{
                  backgroundImage: `url(${require("../../images/banner_1.jpg")})`,
                }}
              >
                <div class="banner_category">
                  <a href="categories.html">Fruits</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="banner_item align-items-center"
                style={{
                  backgroundImage: `url(${require("../../images/banner_2.jpg")})`,
                }}
              >
                <div class="banner_category">
                  <a href="categories.html">Groceries</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="banner_item align-items-center"
                style={{
                  backgroundImage: `url(${require("../../images/banner_3.jpg")})`,
                }}
              >
                <div class="banner_category">
                  <a href="categories.html">Vegetables</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
