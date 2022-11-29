import React from "react";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
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
