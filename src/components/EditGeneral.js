const EditGeneral = ({ detail, detailName, toggleFnc, editFnc }) => {
  return (
    <div data-detail-name={detailName}>
      <input
        className={detailName}
        value={detail[detailName]}
        onChange={(e) => editFnc(detailName, e.target.value)}
      />
      <span onClick={(e) => toggleFnc(e.target.parentNode)}>+</span>
    </div>
  );
};

export default EditGeneral;
