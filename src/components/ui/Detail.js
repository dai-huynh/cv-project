const Detail = ({ id, data }) => {
  return (
    <h1>
      {id}: {data[id]}
    </h1>
  );
};

export default Detail;
