import React, { useState } from "react";

const AddInput = ({ updateData }) => {
  const [detail, setDetail] = useState("");
  const updateDetail = (e) => {
    e.preventDefault();
    return detail !== ""
      ? (updateData(detail), setDetail(""))
      : alert("Please enter a detail name.");
  };
  return (
    <div className="add-detail">
      <label>Detail Name: </label>
      <input
        type="text"
        value={detail}
        className="add-detail input"
        onChange={(e) => setDetail(e.target.value)}
      />
      <button onClick={(e) => updateDetail(e)}>Add Detail Input</button>
    </div>
  );
};

export default AddInput;
