import { useEffect, useContext } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../lib/UserContext";

const Callback = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const finishSocialLogin = async () => {
    const result = await magic.oauth.getRedirectResult();
    setUser(result);
    localStorage.setItem("user", result);
    navigate("/dashboard");
  };

  useEffect(() => {
    finishSocialLogin();
  }, []);

  return <div>Loading...</div>;
};

export default Callback;
