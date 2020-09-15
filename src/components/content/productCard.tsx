import React from "react";
import { Product } from "../../store/masterData/modals/modal";

type ProductCardProps = {
  product: Product;
};

const styles = {
  cardImage: {
    width: "100%",
    height: "280px",
    cursor: "pointer",
    // margin: "auto",
  },
  footerIcons: {
    fontSize: "95%",
    color: 'aqua',
  
  },
  card: {
    height: "500px",
  },
  cardText: {
    height: "40px",
    overflow: "hidden",
  },
};

const ProductCardHeader = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  const { cardText } = styles;
  return (
    <>
      <h6 className="card-text" style={cardText}>
        {name}.
      </h6>
      <p className="card-text" style={cardText}>
        {price}.
      </p>
    </>
  );
};

const ProductCardImage = ({ image }: { image: string }) => {
  const { cardImage } = styles;
  return (
    <img
      className="card-img-top mt-2"
      alt={"Card cap"}
      src={require("../../images/" + image)}
      style={cardImage}
    />
  );
};

const ProductCardFooter = () => {
  const { footerIcons } = styles;
  const leftSideButtons = () => {
    return ["View", "Add to Cart"].map((btn) => (
      <button type="button" className="btn btn-sm primary-btn" key={btn}>
        {btn}
      </button>
    ));
  };

  //   const rightSideButtons = () => {
  //     return ["fa-heart", "fa-shopping-cart"].map((icon) => (
  //       // <button className='p-2' key={icon}>
  //       //   <i className={`fa ${icon}`}></i>
  //       // </button>
  //     //   <Icon key={icon} type={icon} />
  //     ));
  //   };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">{leftSideButtons()}</div>
      <small className="text-muted" style={footerIcons}>
        {/* {rightSideButtons()} */}
      </small>
    </div>
  );
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { card } = styles;
  return (
    <div className="mb-2 shadow-sm text-center border" style={card}>
      <ProductCardImage image={product.image} />
      <div className="card-body">
        <ProductCardHeader name={product.name} price={product.price} />
        <ProductCardFooter />
      </div>
    </div>
  );
};

export default ProductCard;
