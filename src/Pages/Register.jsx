import React, { useState } from "react";
import Avatar from "../img/addAvatar.png";
import Google from "../img/google.png";
import vector1 from "../img/Add User-pana.svg";
import Login from "./Login";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate ,Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const currentPassword = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL:downloadURL,
            });
            await setDoc(doc(db,"usersChats",res.user.uid),{})
            navigate('/')



          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="container">
      <img className="svg1" src={vector1} />
      <div className="wrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Registor</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Current Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img className="Avatar" src={Avatar} alt="" />
            <span>Add a Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="footer">
          You don't have an Account? <Link to ="/login">Login</Link>
        </p>
        <button className="google">
          <img className="g-img" src={Google} />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
