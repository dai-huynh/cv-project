import Personal from "./ui/Personal";

const Preview = ({ personal, skills, education, experience }) => {
  return (
    <div className="preview-container">
      <Personal personal={personal} />
    </div>
  );
};

export default Preview;
