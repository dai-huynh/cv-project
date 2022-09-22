import React, { useState } from "react";
import Detail from "./components/Detail";

const App = () => {
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

  const editGeneral = (index, key, value) => {
    const copy = general;
    copy[index][key] = value;
    setGeneral([...copy]);
  };

  const editSkills = (index, key, value) => {
    const copy = skills;
    copy[index][key] = value;
    setSkill([...copy]);
  };

  const editEducation = (index, key, value) => {
    const copy = education;
    copy[index][key] = value;
    setEdu([...copy]);
  };

  const editExperience = (index, key, value) => {
    const copy = experience;
    copy[index][key] = value;
    setExp([...copy]);
  };

  return (
    <div className="container">
      dbl click to edit
      <Detail type={"general"} details={general} editFnc={editGeneral} />
      <Detail type={"skills"} details={skills} editFnc={editSkills} />
      <Detail type={"education"} details={education} editFnc={editEducation} />
      <Detail
        type={"experience"}
        details={experience}
        editFnc={editExperience}
      />
    </div>
  );
};

export default App;
