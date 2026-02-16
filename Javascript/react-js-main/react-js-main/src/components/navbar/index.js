import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = (props) => {
  const auth = getAuth();

  console.log("props ", props);
  const navigate = useNavigate();
  const routerLocation = useLocation();
  let path = routerLocation.pathname;
  const [loading, setLoading] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLogin(true);
      } else {
        setIsUserLogin(false);
      }
    });
  }, [isUserLogin]);
  const pages = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/sign-up",
    },
     {
      title: "Profile",
      path: "/profile",
    },
  ];
  const logoutHandler = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        // An error happened.
      });
  };
  return (
    <div
      style={{
        backgroundColor: "#0e35e2ff",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 10px",
      }}
    >
      <div>
        {pages.map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                navigate(val.path);
              }}
              style={{ backgroundColor: path === val.path ? "blue" : "yellow" }}
            >
              {val.title}
            </button>
          );
        })}
      </div>
      {isUserLogin && (
        <button onClick={logoutHandler}>
          {loading ? "Loading..." : "Log Out"}
        </button>
      )}
      <p>Active Page:- {props.activePage}</p>
    </div>
  );
};
export default Navbar;
