import React, { useState } from "react";
import Form from "./components/Form/Form";
import Preview from "./components/Preview";

const App = () => {
  const [personal, setPersonal] = useState({
    name: "pinkToot",
    address: "The Mall",
    phone: "646-384-9341",
    email: "hi@gmail.com",
    github: "github.com/PinkTooty",
  });
  const [skills, setSkills] = useState([
    "Eating",
    "Sleeping",
    "Pooping",
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
      tasks: ["nothing", "eating"],
      date: "2004-2022",
    },
    {
      company: "McDonalds",
      position: "Tech Lead",
      tasks: ["nothing", "cleaned bathrooms"],
      date: "2016-2017",
    },
  ]);

  // Change Personal
  const updatePersonal = (key, value) => {
    setPersonal({ ...personal, [key]: value });
  };

  return (
    <div className="container">
      <Form personal={personal} updatePersonal={updatePersonal} />
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
