import NewDetail from "./NewDetail";

const Detail = ({ type, details, editFnc }) => {
  return (
    <div className={`${type}-container`}>
      {details.map((detail, index) => {
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
      })}
    </div>
  );
};

export default Detail;
