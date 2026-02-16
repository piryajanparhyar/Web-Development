import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Login, Contact, NotFound ,BlogDetails,SignUp,Profile} from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
