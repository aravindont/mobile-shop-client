import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
export const Product = ({ id, title, image, price }) => {
  const dispath = useDispatch();
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-between shadow-sm p-4 shadow-black rounded-xl">
        <img src={image} alt="phone" className="w-48 h-48" />
        <h2 className="font-bold">{title}</h2>
        <p>
          <span className="font-bold">$ </span>
          {price}
        </p>
        <button
          className="p-2 text-white bg-green-600 w-24 border-none rounded-xl text-xl"
          onClick={() => dispath(addToCart({ id, title, image, price }))}
        >
          Add
        </button>
      </div>
    </>
  );
};
