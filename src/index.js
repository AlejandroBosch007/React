import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Quotes } from "./pages/Quotes";
import { Counter } from "./pages/Counter";
import { Pokemon } from "./pages/Pokemon";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav/Nav";
import { GlobalProvider } from "./context/GlobalContext";







ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/quotes" element={<Quotes/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </GlobalProvider>
  ,document.getElementById("root")
);
