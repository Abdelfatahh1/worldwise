import Button from "../components/Button";
import styles from "./Login.module.css";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { email, password, loggedIn, login } = useAuth();
  const [user, setUser] = useState({ email, password });
  const navigation = useNavigate();
  console.log(user, "user state");
  console.log("hello");
  function handleLogin(e) {
    e.preventDefault();
    login(user.email, user.password);
  }
  useEffect(() => {
    if (loggedIn) {
      navigation("/applayout", { replace: true });
    }
  }, [loggedIn]);
  return (
    <main className={styles.login}>
      <Header></Header>
      <form className={styles.form}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="pass">Password</label>

          <input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            id="pass"
            type="Password"
          />
        </div>

        <Button onClick={(e) => handleLogin(e)}>Login </Button>
      </form>
    </main>
  );
}

export default Login;
