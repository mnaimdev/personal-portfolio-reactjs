import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import PortfolioDetails from "./components/PortfolioDetails";
import Service from "./components/Service";

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/blog" element={<Blog />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/portfolio" element={<Portfolio />} ></Route>
        <Route path="/blog-details" element={<BlogDetails />} ></Route>
        <Route path="/portfolio-details" element={<PortfolioDetails />} ></Route>
        <Route path="*" element={<Error />} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
      

      
    </>
  )
}

export default App;
