import Personal from "./ui/Personal";

const Preview = ({ personal, skills, education, experience }) => {
  return (
    <div className="preview-container">
      <Personal data={personal} />
    </div>
  );
};

export default Preview;
