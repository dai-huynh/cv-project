import { useState } from "react";
import { FiCheck } from "react-icons/fi";

// if user is editing, replace text with an input to allow user
// to edit

const NewDetail = ({ index, detailName, detailVal, editFnc }) => {
  const [isEdited, setIsEdited] = useState(false);

  const toggleEdit = () => setIsEdited(!isEdited);

  return isEdited ? (
    <form
      className={`form-control ${detailName}`}
      data-detail-name={detailName}
      onSubmit={(e) => {
        e.preventDefault();
        toggleEdit();
      }}
    >
      <input
        autoFocus
        className={detailName}
        value={detailVal}
        onChange={(e) => editFnc(index, detailName, e.target.value)}
      />
      <FiCheck onClick={() => toggleEdit()}>+</FiCheck>
    </form>
  ) : (
    <div className={`detail ${detailName}`}>
      <div onClick={() => toggleEdit()}>{detailVal}</div>
    </div>
  );
};

export default NewDetail;
