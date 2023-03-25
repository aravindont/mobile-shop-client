import { useSelector } from "react-redux";
export const CartSummary = () => {
  const cart = useSelector((state) => state.cartItems);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <>
      <div className="flex flex-col justify-around w-64 h-28 p-5 rounded">
        <h2 className="font-semi-bold text-2xl border-b border-slate-400 mb-4">
          ORDER SUMMARY
        </h2>
        <p className="text-lg border-b border-slate-400">
          <span className="font-normal">total quantity :</span>{" "}
          {getTotal().totalQuantity} items
        </p>
        <p className="text-lg border-b border-slate-400">
          <span className="font-normal">total price : </span>
          <small>$ </small>
          {getTotal().totalPrice}
        </p>
      </div>
    </>
  );
};
