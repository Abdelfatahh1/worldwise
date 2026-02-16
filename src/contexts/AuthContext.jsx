import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const FAKE_USER = {
  name: "Abdelfatah",
  email: "abdelfatah@gmail.com",
  password: "123456789",
  loggedIn: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, loggedIn: true };
    case "logout":
      return { ...state, loggedIn: false };
    case "error":
      throw new Error("Invalid email or password");
    default:
      return state;
  }
}
function AuthProvider({ children }) {
  const [{ name, email, password, loggedIn }, dispatch] = useReducer(
    reducer,
    FAKE_USER
  );

  function login(email, password) {
    console.log(email, password, "from login function");
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login" });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{ name, email, password, loggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
export { useAuth, AuthProvider };
