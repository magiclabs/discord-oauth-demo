const OAuthInfo = ({ data }) => {
  return (
    <div>
      <h2>OAuth Info</h2>
      <p>Provider: {data.provider}</p>
      <p>
        Username:{" "}
        {data.userInfo.sources["https://discord.com/api/users/@me"].username}
      </p>
      <p>Access Token: {data.accessToken}</p>
    </div>
  );
};

export default OAuthInfo;
