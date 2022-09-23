import Detail from "./Detail";
import AddDetail from "./AddDetail";
import DelDetail from "./DelDetail";

// for each detail obj in details, create a new detail for each key
// in detail
// because general doesn't have an addFnc, don't create add/del btns
// need to have at least one detail obj in state to refer to

const Details = ({ details, addFnc, editFnc, delFnc }) => {
  return addFnc && details.length > 1 ? (
    <>
      {details.map((detail, index) => (
        <div key={index} className="detail-container">
          <Detail detail={detail} index={index} editFnc={editFnc} />
          <DelDetail delFnc={delFnc} index={index} />
        </div>
      ))}
      <AddDetail details={Object.keys(details[0])} addFnc={addFnc} />
    </>
  ) : (
    <>
      {details.map((detail, index) => (
        <div key={index} className="detail-container">
          <Detail detail={detail} index={index} editFnc={editFnc} />
        </div>
      ))}
      <AddDetail details={Object.keys(details[0])} addFnc={addFnc} />
    </>
  );
};

export default Details;
