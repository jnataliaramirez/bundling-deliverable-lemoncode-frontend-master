import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Logo />
  </>
);