import logo from "./logo.svg";
import "./App.css";
import { lazy, useEffect, useState } from "react";
// import Products from "./products/products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./lazy-loading/main";
import MainCustomHook from "./cutom-hook/Main";
import ParentReduxComp from "./redux-latest/Main";
import ParentMemoCallback from "./memoize-callback/Main";
const Products = lazy(() => import("./products/products"));

function App() {
  return (
    <>
      <h1>My-app</h1>
      <a href="/products"> Products </a>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/lazy" element={<Main />} />
          <Route path="/custom-hook" element={<MainCustomHook />} />
          <Route path="/redux-latest" element={<ParentReduxComp />} />
          <Route path="/memo-callback" element={<ParentMemoCallback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
