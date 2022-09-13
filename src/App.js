import React, { useState } from "react";
import Preview from "./components/Preview";
import Form from "./components/form/Form";
const App = () => {
  const [personal, setPersonal] = useState({
    name: "pinkToot",
    address: "The Mall",
    phone: "646-384-9341",
    email: "hi@gmail.com",
    github: "github.com/dai-huynh",
  });
  const [skills, setSkills] = useState([
    {
      skill: "eating",
      description: "eating food",
    },
    {
      skill: "pooping",
      description: "eating foodd",
    },
  ]);
  const [education, setEducation] = useState([
    {
      school: "Harvard",
      major: "Computer Science",
      date: "Class of 2026",
    },
    {
      school: "Pre School",
      major: "Biology",
      date: "Class of 2006",
    },
  ]);
  const [experience, setExperience] = useState([
    {
      company: "Basement Dweller",
      position: "Intern Lead",
      task: "doing nothing",
      date: "2004-2022",
    },
    {
      company: "McDonald's",
      position: "Tech Lead",
      task: "nothing",
      date: "2016-2017",
    },
  ]);

  // Delete Input
  const deleteInput = (id, data, setData) => {
    const copy = { ...data };
    delete copy[id];
    setData({ ...copy });
  };

  // Update Personal
  const updatePersonal = (key, value = "") => {
    setPersonal({ ...personal, [key]: value });
  };

  // Update Skills
  const updateSkills = (key, value = "") => {
    setSkills({ ...skills, [key]: value });
  };

  // Update Education

  // Update Experience

  return (
    <div className="container">
      <form className="form-container general">
        <Form
          data={personal}
          updateData={updatePersonal}
          deleteInput={deleteInput}
          setter={setPersonal}
        />
      </form>
      <form className="form-container skills">
        <Form
          data={skills}
          updateData={updateSkills}
          deleteInput={deleteInput}
          setter={setSkills}
        />
      </form>
      <Preview
        personal={personal}
        skills={skills}
        education={education}
        experience={experience}
      />
    </div>
  );
};

export default App;
