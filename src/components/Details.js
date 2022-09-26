import Detail from "./Detail";
import AddDetail from "./AddDetail";
import DelDetail from "./DelDetail";

const Details = ({ type, details, addFnc, editFnc, delFnc }) => {
  return details.length > 1 && type !== "general" ? (
    <>
      {details.map((detail, index) => (
        <div key={detail + index} className={`${type} ${type + index}`}>
          <Detail detail={detail} index={index} editFnc={editFnc} />
          <DelDetail delFnc={delFnc} index={index} />
        </div>
      ))}
      <AddDetail details={Object.keys(details[0])} addFnc={addFnc} />
      <div className="line-break"></div>
    </>
  ) : (
    <>
      {type !== "general" ? (
        <>
          {details.map((detail, index) => (
            <div key={detail + index} className={`${type} ${type + index}`}>
              <Detail detail={detail} index={index} editFnc={editFnc} />
            </div>
          ))}
          <AddDetail details={Object.keys(details[0])} addFnc={addFnc} />
          <div className="line-break"></div>
        </>
      ) : (
        <>
          {details.map((detail, index) => (
            <div key={detail + index} className={`${type} ${type + index}`}>
              <Detail detail={detail} index={index} editFnc={editFnc} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Details;
