import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Navigation from "./components/Navigation";
import MoviesDetails from "./components/MoviesDetail";
<<<<<<< HEAD
import AboutUs from "./pages/AboutUs";
=======
import Footer from "./components/Footer";
>>>>>>> c8742cb0cbc0fc24b7dbe81843d5e93e069b81e3

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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
