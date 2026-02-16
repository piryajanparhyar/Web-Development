import React, { useState } from "react";
import { Input, Layout } from "../../components";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebase from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const SignUp = () => {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState(false);
  const loginHandler = async () => {
    if (fullName === "") {
      toast.error("Full Name Required!");
    } else if (email === "") {
      toast.error("Email Required!");
    } else if (
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      toast.error("Please enter valid email address!");
    } else if (password === "") {
      toast.error("Password Required!");
    } else {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(async () => {
            await setDoc(doc(db, "users", user.uid), {
              fullName: fullName,
              email: email,
            });
            console.log("user", user);
            toast.success("Success!");
            setLoading(false);
            navigate("/");
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log("errorMessage", errorMessage);
          toast.error(errorMessage);
          setLoading(false);
        });
    }
  };
  return (
    <Layout activePage={"Login"}>
      <Input
        title="Full Name"
        type="text"
        placeholder="Enter full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
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
        {loading ? "Loading ..." : "Sign Up"}
      </button>
    </Layout>
  );
};
export default SignUp;
