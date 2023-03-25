import { CartItems } from "../components/CartItems";
import { CartSummary } from "../components/CartSummary";

export const Cart = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse my-7 mx-auto py-5 pr-5 pl-0 gap-5 flex-1 h-max">
        <div className="p-5 w-full bg-white">
          <CartItems />
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </>
  );
};
