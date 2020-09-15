import { connect } from "react-redux";
import React, { useEffect } from "react";
import { Product } from "../../store/masterData/modals/modal";
import { fetchAllProducts } from "./../../store/masterData/actions/product.action";

const TopProducts = (props: {
  allProducts: Product[];
  fetchAllProducts: () => {};
}) => {
  const { allProducts, fetchAllProducts } = props;
  console.log(fetchAllProducts, "fetchAllProducts");

  useEffect(() => {
    // fetchAllProducts();
  }, [fetchAllProducts]);

  //   const iterateProducts = () => {
  //     if (topProducts.length === 0) {
  //       return <ContentLoader />;
  //     }
  //     return topProducts.slice(0, 4).map((product: Product) => (
  //       <div className="col-md-3" key={product._id}>
  //         <ProductCard product={product} />
  //       </div>
  //     ));
  //   };
  return <div className="row">Hello</div>;
};

// const mapStateToProps = (state: { products: { allProducts: Product[] } }) => ({
//   allProducts: state.products,
// });

const mapDispatchToProps = {
  fetchAllProducts,
};

export default connect(null, mapDispatchToProps)(TopProducts);
