import React from "react";
import Header from "./components/Header/Header.js";
import MyServices from "./components/MyServices/MyServices";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MyServices />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
