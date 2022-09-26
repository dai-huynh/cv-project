import { useState } from "react";
import { Button } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import AddDetailInput from "./AddDetailInput";

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
    <form onSubmit={(e) => handleSubmit(e)} className="form-control add">
      {details.map((detail) => (
        <AddDetailInput key={detail} detail={detail} />
      ))}
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button className="btn cancel" onClick={() => setAdding()}>
        Cancel
      </Button>
    </form>
  ) : (
    <FiPlus className="btn add" onClick={() => setAdding()}></FiPlus>
  );
};

export default AddDetail;
