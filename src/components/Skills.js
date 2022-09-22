import { useState } from "react";
import NewDetail from "./AddDetail";

const Skills = ({ skills, addSkill, editSkill }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="skills-container">
      <div onClick={() => setIsShown((current) => !current)}>Add New Skill</div>
      {isShown && <NewDetail />}
    </div>
  );
};

export default Skills;
