import React, { lazy, Suspense, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Loader } from "./Component/Loader/Loader";
import Footer from "./Layout/Footer/Footer";
import MainNav from "./Layout/Header/Navbar/MainNav";
import AOS from "aos";


export default function App() {
  const Home = lazy(() => import("./Pages/Home/Home"));
  const About = lazy(() => import("./Pages/About/About"));
  const Services = lazy(() => import("./Pages/Services/Services"));
  const Contact = lazy(() => import("./Pages/Contact/Contact"));
  const ReactForm = lazy(() => import("./Pages/ReactForm"));
  const Blog = lazy(() => import("./Pages/Blog/Blog"));
  const SingleBlog = lazy(() => import("./Pages/Blog/SingleBlog"));
  const [toggle, settoggle] = useState(true);

  AOS.init({
    duration: 1500
   });

  return (
    // localStorage.setItem('id' , 5678)
    // localStorage.getItem('id')
    // localStorage.removeItem('id')
    <div className={toggle ? "bg-light" : "bg-dark"}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <MainNav settoggle={settoggle} toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="*" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/rfrom" element={<ReactForm />} />
            <Route path="/blog/:name" element={<SingleBlog />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
