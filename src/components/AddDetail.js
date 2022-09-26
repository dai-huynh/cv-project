import { useState } from "react";
import AddDetailInput from "./AddDetailInput";
import { FiPlus } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

const AddDetail = ({ details, addFnc }) => {
  const [isAdding, setIsAdding] = useState(false);

  const setAdding = () => setIsAdding(!isAdding);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formProps = Object.fromEntries(new FormData(e.target));
    addFnc(formProps);
    setAdding();
  };

  return isAdding ? (
    <form onSubmit={(e) => handleSubmit(e)}>
      {details.map((detail) => (
        <AddDetailInput key={detail} detail={detail} />
      ))}
      <button type="submit">submit</button>
      <MdOutlineCancel
        className="btn cancel"
        onClick={() => setAdding()}
      ></MdOutlineCancel>
    </form>
  ) : (
    <FiPlus className="btn add" onClick={() => setAdding()}></FiPlus>
  );
};

export default AddDetail;
