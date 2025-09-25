import { useState } from "react";
import "./App.css";
import { CookieClicker } from "./components/CookieClicker";
import { CatFacts } from "./components/CatFacts";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <CookieClicker />
      <Catfacts />
      <Users />
    </>
  );
}

export default App;
