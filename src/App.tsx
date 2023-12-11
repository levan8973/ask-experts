import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Component/header/Header";
import HomeMain from "./pages/home/main/HomeMain";
import Footer from "./Component/footer/Footer";
import Services from "./pages/services/Services";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={HomeMain} />
        <Route path="/Services" Component={Services} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
