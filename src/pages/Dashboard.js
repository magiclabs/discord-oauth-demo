import { useEffect, useContext } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../lib/UserContext";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const finishSocialLogin = async () => {
    const result = await magic.oauth.getRedirectResult();
    setUser(result);
  };

  useEffect(() => {
    finishSocialLogin();
  }, []);

  const logout = async () => {
    await magic.user.logout();
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? <p>User Info:{JSON.stringify(user)}</p> : <div>Loading...</div>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
