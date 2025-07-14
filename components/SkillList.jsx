"use client";
// Components
import List from "./List";

// Data
import skills from "@/data/skills.json";
import SkillCard from "@/components/SkillCard";

export default function SkillList({ columns = 1, searchable = false }) {
  return (
    <>
      <List
        items={skills}
        renderItem={(item) => <SkillCard data={item} key={item.id} />}
        searchable={searchable}
        columns={columns}
      />
    </>
  );
}
