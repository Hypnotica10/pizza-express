import React, { useState } from "react";
import { Preloader } from "./components";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home, Blog, Discount, Contact, Policy, Cart } from "./screen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Preloader setIsLoading={setIsLoading} isLoading={isLoading} />
      {!isLoading && (
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
