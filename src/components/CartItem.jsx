import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../redux/features/cartSlice";

export const CartItem = ({ id, image, title, price, quantity = 0 }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex mt-5 mb-5 border-b border-indigo-300 pb-5">
        <img className="object-contain w-44 h-44" src={image} alt="item" />
        <div className="pl-5">
          <p className="text-xl font-normal">{title}</p>
          <p className="text-xl ">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="flex justify-between items-center my-2.5 mx-0 w-28">
            <button
              className="w-6 h-6 p-4 rounded-full bg-slate-900 text-white text-3xl flex items-center justify-center"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </button>
            <p className="font-bold text-xl">{quantity}</p>
            <button
              onClick={() => dispatch(incrementQuantity(id))}
              className="w-6 h-6 p-4 rounded-full bg-green-900 text-white text-2xl flex items-center justify-center"
            >
              +
            </button>
          </div>
          <button className="mt-6 " onClick={() => dispatch(removeItem(id))}>
            <DeleteIcon color="warning" fontSize="large" />
          </button>
        </div>
      </div>
    </>
  );
};
