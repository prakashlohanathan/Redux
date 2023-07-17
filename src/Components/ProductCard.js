import React from "react";

function ProductCard({
  data = {},
  handleAddToCart = () => {},
  handleRemoveFromCart = () => {},
  cartItems = [],
}) {
  const isAddedToCart = cartItems.find((item) => item.id === data.id);

  const handleCartQuantityClick = () => {
    handleRemoveFromCart(data.id);
  };

  const handleCartButtonClick = () => {
    if (isAddedToCart) {
      handleRemoveFromCart(data.id);
    } else {
      handleAddToCart(data);
    }
  };

  return (
    <div className="item">
      <div className="img-box">
        <img src={data.images} alt="Phones" />
      </div>
      <div className="details">
        <h2>{data.title}</h2>
        <div className="price">{data.price}</div>
        {isAddedToCart ? (
          <div>
            <button onClick={handleCartButtonClick}>Remove from cart</button>
            <button onClick={handleCartQuantityClick}>-</button>
            <p>{isAddedToCart.quantity}</p>
            <button onClick={() => handleAddToCart(data)}>+</button>
          </div>
        ) : (
          <button onClick={handleCartButtonClick}>Add to cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
