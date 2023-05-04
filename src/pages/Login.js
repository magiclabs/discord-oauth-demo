import { magic } from "../lib/magic";

const Login = () => {
  const handleSocialLogin = async () => {
    await magic.oauth.loginWithRedirect({
      provider: "discord",
      redirectURI: new URL("/dashboard", window.location.origin).href,
    });
  };

  return (
    <div>
      <h1>Login with Discord</h1>
      <button onClick={handleSocialLogin}>Discord</button>
    </div>
  );
};

export default Login;
