import React from "react";
import "./App.css";
import RouterNavigation from "./config/router";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <RouterNavigation />
      <ToastContainer />
    </div>
  );
};
export default App;
