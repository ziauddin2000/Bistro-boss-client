import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  let [user, setUser] = useState([]);
  let [loading, setLoading] = useState(true);

  //   Google Sign In
  let googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  //   Create User
  let createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile
  let updateProfileUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  //   Sign In User
  let signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Sign Out User
  let signOutUser = () => {
    return signOut(auth);
  };

  // Observe Auth State Change
  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  let authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    googleSignIn,
    updateProfileUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
