/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const Checkout = () => {
  const product = {
    name: "Mountain Bike",
    price: 500,
    stock: 10,
  };

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("SurjoPay");

  const handleQuantityChange = (e: any) => {
    const value = Math.min(product.stock, Math.max(1, Number(e.target.value)));
    setQuantity(value);
  };

  const handleOrder = () => {
    alert(
      `Order placed for ${quantity} ${product.name}(s) via ${paymentMethod}`
    );
    // Integrate SurjoPay, Stripe, or other payment gateways here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-gray-600">Price: ${product.price}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full p-2 border rounded-lg"
            min="1"
            max={product.stock}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="SurjoPay">SurjoPay</option>
            <option value="Stripe">Stripe</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">
            Total: ${product.price * quantity}
          </p>
        </div>
        <button
          onClick={handleOrder}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
