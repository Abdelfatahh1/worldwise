import { useEffect, useState } from "react";
import styles from "./AppLayOut.module.css";
import Logo from "../components/Logo";
import Button from "../components/Button";
import CitiesForm from "../components/CitiesForm";
import Cities from "../components/Cities";
import Map from "../components/Map";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
function AppLayOut() {
  const { logout, loggedIn } = useAuth();
  const navigation = useNavigate();
  function handleLogout() {
    logout();
  }

  return (
    <main className={styles.appLayOut}>
      <header>
        <img></img>
        <h2>Welcome, Jack</h2>

        <Button onClick={handleLogout}>Logout</Button>
      </header>
      <Cities></Cities>
      <Map></Map>
    </main>
  );
}
export default AppLayOut;
