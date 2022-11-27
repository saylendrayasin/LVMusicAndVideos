import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Navigation from "./components/Navigation";
import MoviesDetails from "./components/MoviesDetail";
import Home from "./pages/home";


function App() {
  return <div><Home /></div>
  // (
  //   <BrowserRouter>
  //     <Navigation />
  //     <Routes>
  //       <Route path="/" element={<Movies />} />
  //       {/* <Route path="/About" element={<About />} /> */}
  //       <Route path="/details" element={<Details />}>
  //         <Route path=":movie_id" element={<MoviesDetails />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
