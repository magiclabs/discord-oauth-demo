import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const finishSocialLogin = async () => {
    const result = await magic.oauth.getRedirectResult();
    setUser(result);
    console.log(result);
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
      {!user && <div>Loading...</div>}
      {user && <div>{}</div>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
