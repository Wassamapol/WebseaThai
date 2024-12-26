import React, { useState } from "react";

function Shop() {
  // ข้อมูลสินค้าใหม่
  const products = [
    { 
      id: 1, 
      name: 'Seafood Set', 
      price: 500, 
      description: 'A set of fresh seafood', 
      imgUrl: 'https://www.otoptoday.com/images/upload_img/products/product_cover_1733900537.png' 
    },
    { 
      id: 2, 
      name: 'Sushi Platter', 
      price: 350, 
      description: 'Assorted sushi rolls with tuna, salmon, and avocado', 
      imgUrl: 'https://www.otoptoday.com/images/upload_img/products/product_cover_1733900537.png' 
    },
    { 
      id: 3, 
      name: 'Grilled Lobster', 
      price: 800, 
      description: 'Delicious grilled lobster', 
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHX5-QA0nBrxKNvW69FhcC4Q6oj1ktp9iXNI5Z8wlu7LezyOF9r1CEYfACG2ejfubh9mM&usqp=CAU' 
    },
    { 
      id: 4, 
      name: 'Fish and Chips', 
      price: 250, 
      description: 'Crispy fried fish fillets served with fries and tartar sauce', 
      imgUrl: 'https://mms.img.susercontent.com/870719451bd70ce3107d4d972931f496_tn' 
    },
    { 
      id: 5, 
      name: 'Shrimp Tempura', 
      price: 400, 
      description: 'Lightly battered shrimp', 
      imgUrl: 'https://down-th.img.susercontent.com/file/96c3553e24b1679ae61891407a7c4cb2' 
    },
    { 
      id: 6, 
      name: 'Seafood Paella', 
      price: 600, 
      description: 'A flavorful Spanish rice dish with shrimp, mussels, and clams', 
      imgUrl: 'https://www.baantip.com/wp-content/uploads/2016/03/120921152921.jpg' 
    },
    { 
      id: 7, 
      name: 'Seafood Paella', 
      price: 600, 
      description: 'A flavorful Spanish rice dish with shrimp, mussels, and clams', 
      imgUrl: 'https://www.baantip.com/wp-content/uploads/2016/03/120921152921.jpg' 
    },
    { 
      id: 8, 
      name: 'Seafood Paella', 
      price: 600, 
      description: 'A flavorful Spanish rice dish with shrimp, mussels, and clams', 
      imgUrl: 'https://www.baantip.com/wp-content/uploads/2016/03/120921152921.jpg' 
    },
  ];

  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleOrder = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const adjustQuantity = (productId, operation) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: operation === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const completePurchase = () => {
    setCart([]);
    setThankYouVisible(true);
    setTimeout(() => setThankYouVisible(false), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 py-4">
      <div className="w-full md:w-2/3">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={product.imgUrl} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
              <h2 className="text-sm text-white font-semibold text-center mt-2">{product.name}</h2>
              <p className="text-gray-300 text-xs text-center mt-1">{product.description}</p>
              <p className="text-sm text-white font-bold text-center mt-2">{product.price} THB</p>
              <button
                onClick={() => handleOrder(product)}
                className="w-full mt-3 px-3 py-2 bg-cyan-900 text-xs text-white font-semibold rounded-lg hover:bg-cyan-950"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsCartVisible(!isCartVisible)}
          className="bg-gray-200 text-gray-900 p-3 rounded-full shadow-lg"
        >
          Cart ({cart.length})
        </button>
      </div>
      {isCartVisible && (
        <div className="fixed top-0 right-0 bg-white p-4 shadow-lg rounded-lg w-64 h-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={() => setIsCartVisible(false)}
              className="text-red-500 text-lg font-bold"
            >
              X
            </button>
          </div>
          <ul className="mt-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mt-2">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <div className="flex items-center">
                  <button
                    onClick={() => adjustQuantity(item.id, "decrease")}
                    className="px-2 py-1 bg-gray-300 text-xs rounded-full hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => adjustQuantity(item.id, "increase")}
                    className="px-2 py-1 bg-gray-300 text-xs rounded-full hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="w-full mt-4 bg-red-700 text-white p-2 rounded-lg">
            Clear Cart
          </button>
          <button onClick={completePurchase} className="w-full mt-2 bg-green-700 text-white p-2 rounded-lg">
            Purchase
          </button>
        </div>
      )}
      {thankYouVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl">Thank you for your purchase!</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
