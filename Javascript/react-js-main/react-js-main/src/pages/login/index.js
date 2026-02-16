import React, { useState } from "react";
import { Input, Layout } from "../../components";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState(false);
  const loginHandler = () => {
    if (email === "") {
      toast.error("Email Required!");
    } else if (
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      toast.error("Please enter valid email address!");
    } else if (password === "") {
      toast.error("Password Required!");
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Signed in ");
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
        });
    }
  };
  return (
    <Layout activePage={"Login"}>
      <Input
        title="Email Address"
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        title="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      />
      <button onClick={loginHandler}>
        {loading ? <CircularProgress size="10px" /> : "Login"}
      </button>
    </Layout>
  );
};
export default Login;
