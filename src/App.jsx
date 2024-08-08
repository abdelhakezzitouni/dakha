//import pages

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./app/Home/Home";
import Header from "./app/Layout/Header";
import Zarbia from "./app/Zarbia/Zarbia";
import Tagines from "./app/Tagines/Tagines";
import Teapots from "./app/Teapots/Teapots";
import Details from "./app/Layout/Details";
import Footer from "./app/Layout/Footer";


function App() {
  
  return (
    <>
    <Router>
      <Header />
      <Routes >
        <Route path="/" Component={Home} />
        <Route path="/:id" Component={Details} />
        <Route path="/zarbia" Component={Zarbia} />
        <Route path="/tagines" Component={Tagines} />
        <Route path="/teapots" Component={Teapots} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App