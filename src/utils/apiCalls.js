import axios from "axios";
const serverURL = "https://mobile-shop-server.cyclic.app";
export const getProducts = () => {
  const dataURL = `${serverURL}/products`;
  return axios.get(dataURL);
};
