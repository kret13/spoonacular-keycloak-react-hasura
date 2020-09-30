/**
 * KEYCLOAK docs
 * https://github.com/keycloak/keycloak/blob/master/adapters/oidc/js/src/main/resources/keycloak.d.ts
 * https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/oidc/javascript-adapter.adoc
 */
import Keycloak from "keycloak-js";
import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

export const keycloak = Keycloak({
  realm: "reg",
  url: "http://localhost:3456/auth/",
  clientId: "reg",
});

interface UserInfo {
  given_name: string;
  name: string;
  account_name: string;
}

const UserInfoContext = React.createContext<UserInfo | null>(null);

export interface AuthenticationOptions {
  loading: boolean;
  userInfo: UserInfo;
}

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let isSubscribed = true;
    const login = async () => {
      try {
        await keycloak.init({
          onLoad: "login-required",
          pkceMethod: "S256",
        });
        const userInfo = await keycloak.loadUserInfo();
        if (isSubscribed) {
          setUserInfo(userInfo as never);
          setLoading(false);
        }
      } catch (e) {
        console.error("login error", e);
      }
    };

    login();

    return () => {
      isSubscribed = false;
    };
  }, []);

  if (loading) {
    return <Spinner height="fullHeight" />;
  }

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => {
  const authState = React.useContext(UserInfoContext);

  if (authState === null) {
    throw new Error("useUserInfo must be used within a AuthProvider");
  }

  return authState;
};

export const useLogout = () => {
  return () => keycloak.logout();
};

export default AuthProvider;
