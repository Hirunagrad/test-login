import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    
    
    const loggedInRes = await axios.get("http://localhost:4000/sign/loggedIn");
    console.log(loggedInRes);
   

  }

  useEffect(() => {
    getLoggedIn();
  }, []);


  
}

export default AuthContextProvider;