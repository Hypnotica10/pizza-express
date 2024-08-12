import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Blog, Cart, Contact, Discount, Home, Policy } from "./screen";

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
