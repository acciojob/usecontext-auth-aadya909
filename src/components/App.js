import React from "react";
import Auth from "./Auth";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <Auth />
      </div>
    </AuthProvider>
  );
};

export default App;

