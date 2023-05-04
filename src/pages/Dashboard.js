import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import MagicInfo from "../components/MagicInfo";
import OAuthInfo from "../components/OAuthInfo";

const Dashboard = () => {
  const [user, setUser] = useState();
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
      {!user && <div>Loading...</div>}

      {user && (
        <div>
          <MagicInfo data={user.magic.userMetadata} />
          <OAuthInfo data={user.oauth} />
        </div>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
