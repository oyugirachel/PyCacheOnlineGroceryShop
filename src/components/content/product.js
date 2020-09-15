import React, { Component } from "react";
import _ from "lodash";
// import "./product.css";
import { fetchAllProducts } from "./../../store/masterData/actions/product.action";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ProductCard from "./productCard";
import { Product } from "../../store/masterData/modals/modal";
import Banner from "./banner";
import Slider from "./slider";

const styles = {
  cardImage: {
    maxHeight: "700px",
    width: "100%",
    margin: "auto",
  },
  footerIcons: {
    fontSize: "95%",
  },
  card: {
    height: "500px",
  },
  cardText: {
    height: "70px",
    overflow: "hidden",
  },
};

class AllProduct extends Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }
  render() {
    const { products } = this.props;
    const iterateProducts = () => {
      return products.map((product) => (
        <div className="col-md-3" key={product._id}>
          <ProductCard product={product} />
        </div>
      ));
    };
    return (
      <>
        <Slider />
        <Banner />

        <div class="new_arrivals">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title new_arrivals_title">
                  <h2>Fresh & Fleshy</h2>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col text-center">
                <div class="new_arrivals_sorting">
                  <ul class="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li
                      class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                      data-filter="*"
                    >
                      Groceries
                    </li>
                    <li
                      class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".fruits"
                    >
                      Fruits
                    </li>
                    <li
                      class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".vegetables"
                    >
                      Vegetables
                    </li>
                    <li
                      class="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".cereals"
                    >
                      Cereals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="products p-3">
              <div className="row">{iterateProducts()}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.masterData.products,
});
const mapDispatchToProps = {
  fetchAllProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AllProduct));
