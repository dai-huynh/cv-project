const Personal = ({ data }) => {
  return (
    <div className="personal-tab">
      <ul>
        <li>{data.name}</li>
        <li>{data.address}</li>
        <li>{data.phone}</li>
        <li>{data.email}</li>
        <li>{data.github}</li>
      </ul>
    </div>
  );
};

export default Personal;
