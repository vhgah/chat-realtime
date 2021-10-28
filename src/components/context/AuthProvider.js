import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/Config";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
        return;
      }

      setIsLoading(false);
      history.push("/login");
    });

    return () => {
      unsubscribed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
