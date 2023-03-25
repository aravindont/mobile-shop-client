import { Route, Routes } from "react-router-dom";
import { Topbar } from "./components/Topbar";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>
    </>
  );
}
export default App;
