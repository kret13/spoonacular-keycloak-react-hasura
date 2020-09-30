import React from "react";
import App from "../App/App";
import AuthProvider from "../AuthProvider/AuthProvider";

const AppSecured: React.FC = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppSecured;
