import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Topbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartItems);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <>
      <div className="flex items-center justify-between  min-w-full h-12 py-8 px-10 bg-slate-700  sticky z-10 top-0  shadow-md shadow-indigo-100">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <h1 className="text-3xl text-slate-50">Mobile Shop</h1>
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <AddShoppingCartIcon sx={{ fontSize: 40 }} className="text-white" />
          <p className="absolute bg-red-900 text-white rounded-full p-1 bottom-5 left-8">
            {getTotalQuantity() || 0}
          </p>
        </div>
      </div>
    </>
  );
};
