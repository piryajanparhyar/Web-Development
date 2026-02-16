import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setLoading(false)
          console.log("Current data: ", doc.data());
        });
      } else {
        navigate("/login");
      }
    });
  }, []);
  return (
    <Layout activePage="Profile" hideFooter={true}>
      <h1>Profile Data</h1>
      {
        loading?
        <p>Loading .....</p>:
        <p>Data available</p>
      }
    </Layout>
  );
};
export default Profile;
