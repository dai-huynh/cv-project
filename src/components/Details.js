import Detail from "./Detail";
import AddDetail from "./AddDetail";
import DelDetail from "./DelDetail";

// for each detail obj in details, create a new detail for each key
// in detail
// because general doesn't have an addFnc, don't create add/del btns

const Details = ({ details, addFnc, editFnc, delFnc }) => {
  return addFnc
    ? details.map((detail, index) => (
        <div key={index} className="detail-container">
          <Detail detail={detail} index={index} editFnc={editFnc} />
          <DelDetail delFnc={delFnc} index={index} />
          <AddDetail details={Object.keys(details[0])} addFnc={addFnc} />
        </div>
      ))
    : details.map((detail, index) => (
        <div key={index} className="detail-container">
          <Detail detail={detail} index={index} editFnc={editFnc} />
        </div>
      ));
};

export default Details;
