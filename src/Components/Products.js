import React,{ useState, useEffect} from 'react'
import ProductCard from './ProductCard';


const API = "./mocks/product.json";

function Products() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setProducts(res.data))
      .catch();
  }, []);

  function handleAddToCart(d = {}) {
    if (d.id) {
      const matchedItem = cart.find((item) => item.id === d.id);
      if (matchedItem) {
        matchedItem.quantity += 1;
      } else {
        let cartCopy = [...cart];
        cartCopy.push({ ...d, quantity: 1 });
        setCart(cartCopy);
      }
    }
  }

  function handleRemoveFromCart(id = "") {
    const cartCopy = [...cart];
    const matchedIndex = cartCopy.findIndex((item) => item.id === id);
    if (matchedIndex !== -1) {
      const matchedItem = cartCopy[matchedIndex];
      if (matchedItem.quantity > 1) {
        matchedItem.quantity -= 1;
      } else {
        cartCopy.splice(matchedIndex, 1);
      }
      setCart(cartCopy);
    }
  }

  return (
    <div>
      <div className="header-bar">
        <div className="cart-cta">
          <img
            alt="cart"
            className="cart-icon"
            src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
          />
          <div className="cart-count">{cart?.length || 0}</div>
        </div>
      </div>
      <div className="listing-container">
        {products?.map((d, i) => (
          <ProductCard
            data={d}
            key={`products-${i}-${d.id}`}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            cartItems={cart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;