"use client";
// Components
import List from "./List";

// Data
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ columns = 1, searchable = false }) {
  return (
    <>
      <List
        items={projects}
        renderItem={(item) => <ProjectCard data={item} key={item.id} />}
        searchable={searchable}
        columns={columns}
      />
    </>
  );
}
