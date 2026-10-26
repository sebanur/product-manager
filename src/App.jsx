import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Header from "./components/Header";
import Test from "./pages/Test";

BrowserRouter;
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Product />} />
          <Route index path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
