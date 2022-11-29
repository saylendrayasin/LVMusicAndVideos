import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Navigation from "./components/Navigation";
import MoviesDetails from "./components/MoviesDetail";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path={"/about"} element={<AboutUs />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/details" element={<Details />}>
          <Route path=":movie_id" element={<MoviesDetails />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
