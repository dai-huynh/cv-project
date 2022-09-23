import NewDetail from "./NewDetail";

const Detail = ({ detail, index, editFnc }) => {
  const keys = Object.keys(detail);
  return keys.map((key) => (
    <NewDetail
      key={key + index}
      index={index}
      detailName={key}
      detailVal={detail[key]}
      editFnc={editFnc}
    />
  ));
};

export default Detail;
