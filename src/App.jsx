import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Blog from "./Pages/Blogp";



function App() {
 return <BrowserRouter>
   <Navbar />
   <Home />
   <Community />
   <Blog />
   <Footer />
 </BrowserRouter>
}

export default App;
