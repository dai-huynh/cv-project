import React, { useState } from "react";
import Details from "./components/Details";

const App = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [general, setGeneral] = useState([
    {
      name: "Joe",
    },
    {
      title: "Software Developer",
    },
    {
      email: "joe@gmail.com",
    },
    {
      phone: "123-456-7890",
    },
    {
      linkedIn: "// joe",
    },
  ]);
  const [skills, setSkill] = useState([
    {
      skill: "ReactJS",
      description: "built web applications",
    },
    {
      skill: "JavaScript",
      description: "built web applications",
    },
  ]);
  const [education, setEdu] = useState([
    {
      attended: "Stanford University",
      degree: "Computer Science",
      subject: "Introduction to Computer Science",
      from: "2000",
      to: "2002",
    },
    {
      attended: "Harvard",
      degree: "Computer Science",
      subject: "Data Structures and Algorithms",
      from: "2006",
      to: "2008",
    },
  ]);
  const [experience, setExp] = useState([
    {
      company: "Barnes and Noble",
      city: "New york",
      from: "2002",
      to: "2005",
      role: "Junior Developer",
      description: "",
    },
    {
      company: "MongoDB",
      city: "New York",
      from: "2006",
      to: "2010",
      role: "Senior Developer",
      description: "",
    },
  ]);

  const changePreview = () => {
    setIsPreview(!isPreview);
    const btns = document.querySelectorAll(".add, .delete");
    btns.forEach((btn) => {
      return btn.classList.contains("hidden")
        ? btn.classList.remove("hidden")
        : btn.classList.add("hidden");
    });
  };

  const editGeneral = (index, key, value) => {
    const copy = general;
    copy[index][key] = value;
    setGeneral([...copy]);
  };

  const addSkill = (skill) => setSkill([...skills, skill]);

  const editSkills = (index, key, value) => {
    const copy = skills;
    copy[index][key] = value;
    setSkill([...copy]);
  };

  const delSkill = (index) =>
    setSkill(skills.filter((skill) => skills.indexOf(skill) !== index));

  const addEducation = (edu) => setEdu([...education, edu]);

  const editEducation = (index, key, value) => {
    const copy = education;
    copy[index][key] = value;
    setEdu([...copy]);
  };

  const delEducation = (index) =>
    setEdu(education.filter((edu) => education.indexOf(edu) !== index));

  const addExperience = (exp) => setExp([...experience, exp]);

  const editExperience = (index, key, value) => {
    const copy = experience;
    copy[index][key] = value;
    setExp([...copy]);
  };

  const delExperience = (index) =>
    setExp(experience.filter((exp) => experience.indexOf(exp) !== index));

  return (
    <div className="container">
      dbl click to edit
      <button className="togglePrev" onClick={() => changePreview()}>
        Preview
      </button>
      <div className="general-container">
        <Details type={"general"} details={general} editFnc={editGeneral} />
      </div>
      <div className="skills-container">
        <Details
          type={"skills"}
          details={skills}
          addFnc={addSkill}
          editFnc={editSkills}
          delFnc={delSkill}
        />
      </div>
      <div className="education-container">
        <Details
          type={"education"}
          details={education}
          addFnc={addEducation}
          editFnc={editEducation}
          delFnc={delEducation}
        />
      </div>
      <div className="experience-container">
        <Details
          type={"experience"}
          details={experience}
          addFnc={addExperience}
          editFnc={editExperience}
          delFnc={delExperience}
        />
      </div>
    </div>
  );
};

export default App;
