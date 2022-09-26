import React, { useState } from "react";
import Details from "./components/Details";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const App = () => {
  const [isPreview, setIsPreview] = useState(false);
  const [general, setGeneral] = useState([
    {
      name: "Name",
    },
    {
      title: "Title",
    },
    {
      email: "email@email.com",
    },
    {
      phone: "123-456-7890",
    },
    {
      linkedIn: "// username",
    },
  ]);
  const [education, setEdu] = useState([
    {
      attended: "School",
      degree: "Degree",
      subject: "Subject",
      from: "From",
      to: "To",
    },
  ]);
  const [projects, setProj] = useState([
    {
      name: "PROJECT NAME",
      link: "https://projectlink.com",
      description: "Description...",
    },
  ]);
  const [experience, setExp] = useState([
    {
      company: "Company",
      location: "Location",
      role: "Role",
      description: "Description",
      from: "From",
      to: "To",
    },
  ]);

  const [skills, setSkill] = useState([
    {
      skill: "Skill",
      description: "Description",
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
    <Container maxWidth="md">
      <header className="header-container">
        <h1>Resume Builder</h1>
        <Button
          className="toggle-prev"
          onClick={(e) => changePreview(e.target)}
        >
          Preview
        </Button>
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
    </Container>
  );
};

export default App;
