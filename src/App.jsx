import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-pink-100 h-screen w-screen">
    <Header />
    <Body />
    </div>
  );
}

export default App;
