import EditGeneral from "./EditGeneral";

const General = ({ general, toggleGeneral, editGeneral }) => {
  return (
    <>
      {general.map((detail, index) => {
        const keys = Object.keys(detail);
        return detail[keys[1]] ? (
          <EditGeneral
            key={index}
            detail={detail}
            detailName={keys[0]}
            toggleFnc={toggleGeneral}
            editFnc={editGeneral}
          />
        ) : (
          <div key={index} data-detail-name={keys[0]}>
            <h1 onClick={(e) => toggleGeneral(e.target.parentNode)}>
              {detail[keys[0]]}
            </h1>
          </div>
        );
      })}
    </>
  );
};

export default General;
