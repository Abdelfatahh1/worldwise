import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const navigation = useNavigate();
  const { loggedIn } = useAuth();
  useEffect(() => {
    if (!loggedIn) navigation("/");
  }, [loggedIn]);
  return children;
}
