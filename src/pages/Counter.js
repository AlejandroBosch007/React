import { CounterFuntion } from "../components/CounterFuntion/CounterFuntion";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Counter() {
  const [token] = useLocalStorage("TOKEN", {});
  const navigate = useNavigate();
  useEffect(() => {
    if (!token.token) {
      navigate("/login");
    }
  }, []);

  return <CounterFuntion />;
}

export { Counter };
