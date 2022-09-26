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
  const [projects, setProj] = useState([
    {
      name: "PROJECT NAME",
      description: "Description...",
      link: "https://projectlink.com",
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

  const changePreview = (e) => {
    setIsPreview(!isPreview);
    const btns = document.querySelectorAll(".add, .delete, form ");
    btns.forEach((btn) => {
      return !isPreview
        ? btn.classList.remove("hidden")
        : btn.classList.add("hidden");
    });
    !isPreview ? e.classList.remove("active") : e.classList.add("active");
  };

  const editGeneral = (index, key, value) => {
    const copy = general;
    copy[index][key] = value;
    setGeneral([...copy]);
  };

  const addEducation = (edu) => setEdu([...education, edu]);

  const editEducation = (index, key, value) => {
    const copy = education;
    copy[index][key] = value;
    setEdu([...copy]);
  };

  const delEducation = (index) =>
    setEdu(education.filter((edu) => education.indexOf(edu) !== index));

  const addProject = (proj) => setProj([...projects, proj]);

  const editProject = (index, key, value) => {
    const copy = projects;
    copy[index][key] = value;
    setProj([...copy]);
  };

  const delProject = (index) =>
    setProj(projects.filter((proj) => projects.indexOf(proj) !== index));

  const addExperience = (exp) => setExp([...experience, exp]);

  const editExperience = (index, key, value) => {
    const copy = experience;
    copy[index][key] = value;
    setExp([...copy]);
  };

  const delExperience = (index) =>
    setExp(experience.filter((exp) => experience.indexOf(exp) !== index));

  const addSkill = (skill) => setSkill([...skills, skill]);

  const editSkills = (index, key, value) => {
    const copy = skills;
    copy[index][key] = value;
    setSkill([...copy]);
  };

  const delSkill = (index) =>
    setSkill(skills.filter((skill) => skills.indexOf(skill) !== index));

  return (
    <>
      <header className="header-container">
        <h1>Resume Builder</h1>
        <button
          className="toggle-prev"
          onClick={(e) => changePreview(e.target)}
        >
          Preview
        </button>
      </header>
      <div className="cv-container">
        <div className="general-container">
          <Details type={"general"} details={general} editFnc={editGeneral} />
        </div>
        <div className="education-container">
          <h3>Education</h3>
          <Details
            type={"education"}
            details={education}
            addFnc={addEducation}
            editFnc={editEducation}
            delFnc={delEducation}
          />
        </div>
        <div className="projects-container">
          <h3>Projects</h3>
          <Details
            type={"projects"}
            details={projects}
            addFnc={addProject}
            editFnc={editProject}
            delFnc={delProject}
          />
        </div>
        <div className="experience-container">
          <h3>Experience</h3>
          <Details
            type={"experience"}
            details={experience}
            addFnc={addExperience}
            editFnc={editExperience}
            delFnc={delExperience}
          />
        </div>
        <div className="skills-container">
          <h3>Skills</h3>
          <Details
            type={"skills"}
            details={skills}
            addFnc={addSkill}
            editFnc={editSkills}
            delFnc={delSkill}
          />
        </div>
      </div>
    </>
  );
};

export default App;
