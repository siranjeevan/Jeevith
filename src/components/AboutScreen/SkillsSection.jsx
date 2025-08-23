// SkillsSection.jsx
import React from "react";
import SkillCard from "./SkillCard";
import { GrSwift } from "react-icons/gr";
import { SiReacttable, SiMysql, SiDatastax } from "react-icons/si";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";

function SkillsSection() {
  const skills = [
    { percentage: 70, icon: <GrSwift size={30} />, label: "Swift" },
    { percentage: 80, icon: <SiReacttable size={30} />, label: "React" },
    { percentage: 35, icon: <SiMysql size={40} />, label: "MySQL" },
    { percentage: 50, icon: <SiDatastax size={30} />, label: "Data Structure" },
    { percentage: 50, icon: <HiOutlinePhotograph size={30} />, label: "Photography" },
    { percentage: 70, icon: <CgWebsite size={30} />, label: "HTML & CSS" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center px-5 sm:px-10 md:px-20 py-0">
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}

export default SkillsSection;
