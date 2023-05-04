import { useEffect, useState } from "react";
import { magic } from "../lib/magic";
import { useNavigate } from "react-router-dom";
import MagicInfo from "../components/MagicInfo";
import OAuthInfo from "../components/OAuthInfo";

const Dashboard = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const finishSocialLogin = async () => {
    try {
      const result = await magic.oauth.getRedirectResult();
      setUser(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    finishSocialLogin();
  }, []);

  const logout = async () => {
    try {
      await magic.user.logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
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
