"use client";
import Search from "@/components/Search";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import List from "./List";

export default function SearchProjects({ projects }) {
  const [searchString, setSearchString] = useState("");

  const filtered = projects.filter((project) =>
    project.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <>
      <div className="w-fit">
        <Search inputChange={(e) => setSearchString(e.target.value)} />
      </div>

      {/* List of filtered projects based on search input */}
      <List
        items={filtered}
        renderItem={(project) => <ProjectCard data={project} />}
        columns={2}
      />
    </>
  );
}
