import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
