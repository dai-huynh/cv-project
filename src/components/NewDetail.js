import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TextField from "@mui/material/TextField";

// if user is editing, replace text with an input to allow user
// to edit

const NewDetail = ({ index, detailName, detailVal, editFnc }) => {
  const [isEdited, setIsEdited] = useState(false);

  const toggleEdit = () => setIsEdited(!isEdited);

  return isEdited ? (
    <ClickAwayListener onClickAway={() => toggleEdit()}>
      <form
        className={`form-control ${detailName}`}
        data-detail-name={detailName}
        onSubmit={(e) => {
          e.preventDefault();
          toggleEdit();
        }}
      >
        <TextField
          id="outlined-textarea"
          autoFocus
          className={detailName}
          value={detailVal}
          onChange={(e) => editFnc(index, detailName, e.target.value)}
        />
        <FiCheck onClick={() => toggleEdit()}></FiCheck>
      </form>
    </ClickAwayListener>
  ) : (
    <>
      <div onClick={() => toggleEdit()} className={detailName}>
        {detailVal}
      </div>
    </>
  );
};

export default NewDetail;
