import { useState } from "react";
import AddDetailInput from "./AddDetailInput";

const AddDetail = ({ details, addFnc }) => {
  const [isAdding, setIsAdding] = useState(false);

  const setAdding = () => setIsAdding(!isAdding);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formProps = Object.fromEntries(new FormData(e.target));
    addFnc(formProps);
    setAdding();
    console.log(formProps);
  };

  return isAdding ? (
    <form onSubmit={(e) => handleSubmit(e)}>
      {details.map((detail) => (
        <AddDetailInput key={detail} detail={detail} />
      ))}
      <button type="submit">submit</button>
    </form>
  ) : (
    <div className="btn add" onClick={() => setAdding()}>
      +
    </div>
  );
};

export default AddDetail;
