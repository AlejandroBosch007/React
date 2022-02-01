import  QuotesCreator  from "../components/QuotesCreator/QuotesCreator";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Quotes({ quotesDB }) {
  const [token] = useLocalStorage("TOKEN", {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!token.token) {
      navigate("/login");
    }
  }, []);

  return <QuotesCreator quotesDB={quotesDB} />;
}

export { Quotes };
