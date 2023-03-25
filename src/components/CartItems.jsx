import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const CartItems = () => {
  const cart = useSelector((state) => state.cartItems);
  return (
    <>
      <div>
        <h3 className="border-b border-slate-400 font-bold text-xl mb-8">
          Cart Items
        </h3>
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
    </>
  );
};
