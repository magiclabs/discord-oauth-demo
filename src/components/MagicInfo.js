const MagicInfo = ({ data }) => {
  return (
    <div>
      <h2>Magic Info</h2>
      <p>Public Address: {data.publicAddress}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default MagicInfo;
