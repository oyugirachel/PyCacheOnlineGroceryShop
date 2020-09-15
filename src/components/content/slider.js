import React, { Component } from "react";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="main_slider"
        style={{
          backgroundImage: `url(${require("../../images/slider_1.jpg")})`,
        }}
      >
        {/* <img src={require("../../images/slider_1.jpg")} /> */}
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Very Fresh Groceries at Your Door Step!</h6>
                <h1>Get up to 50% Discount on goods above KES.500</h1>
                <div className="red_button shop_now_button">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
