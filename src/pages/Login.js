import { magic } from "../lib/magic";
import { FaDiscord } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "discord",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic Auth + Discord</h1>
      <button onClick={handleSocialLogin}>
        <FaDiscord size={"2.5rem"} />
        Log in with Discord
      </button>
    </div>
  );
};

export default Login;
