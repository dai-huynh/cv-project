import Detail from "./Detail";

const Personal = ({ personal }) => {
  return (
    <div className="personal-tab">
      {Object.keys(personal).map((key) => {
        return <Detail key={key} id={key} data={personal} />;
      })}
    </div>
  );
};

export default Personal;
