import { useState, useEffect } from "react";
import { Product } from "./Product";
import { getProducts } from "../utils/apiCalls";
import { Spinner } from "./Spinner";
import { useDispatch } from "react-redux";

export const Products = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    loading: false,
    allProducts: [],
    errorMessage: "",
  });
  useEffect(() => {
    const handleResp = async () => {
      try {
        setState({ ...state, loading: true });
        const response = await getProducts();
        setState({ ...state, loading: false, allProducts: response.data });
      } catch (err) {
        setState({ ...state, loading: false, errorMessage: err.message });
      }
    };
    handleResp();
  }, []);
  let { loading, allProducts, errorMessage } = state;
  return (
    <>
      <div className="m-10 flex flex-wrap items-center justify-center gap-8 py-4">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {allProducts.length > 0 &&
              allProducts.map((product) => {
                return (
                  <div key={product.id}>
                    <Product
                      id={product.id}
                      title={product.name}
                      image={product.img}
                      price={product.price}
                    />
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};
