import React from "react";
import ReactDOM from "react-dom";
import { global } from "./global/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Quotes } from "./pages/Quotes";
import { Counter } from "./pages/Counter";
import { Pokemon } from "./pages/Pokemon";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login";
import { Nav } from "./components/Nav/Nav";

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Pokemon />} />
      <Route path="/quotes" element={<Quotes quotesDB={global.quotesDB} />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
