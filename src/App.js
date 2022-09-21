import React, { useState } from "react";
import General from "./components/General";

// you want to create an id for each obj so it is easily searched

const App = () => {
  const [general, setGeneral] = useState([
    {
      name: "Joe",
      active: false,
    },
    {
      title: "Software Developer",
      active: false,
    },
    {
      phone: "123-456-7890",
      active: false,
    },
    {
      email: "joe@gmail.com",
      active: false,
    },
    {
      address: "704 Hauser St., New York, N.Y.",
      active: false,
    },
    {
      description: "Aspiring Software Developer",
      active: false,
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
      to: "208",
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

  const toggleGeneral = (keyNode) => {
    const key = keyNode.dataset.detailName;
    const copy = general;
    const index = general.findIndex((obj) => obj[key]);
    copy[index].active = !copy[index].active;
    setGeneral([...copy]);
  };

  const editGeneral = (key, value) => {
    const copy = general;
    const index = general.findIndex((obj) => obj[key]);
    copy[index][key] = value;
    setGeneral([...copy]);
  };

  return (
    <General
      general={general}
      toggleGeneral={toggleGeneral}
      editGeneral={editGeneral}
    />
  );
};

export default App;
