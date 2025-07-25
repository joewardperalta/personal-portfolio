"use client";
// React imports
import { useState, useEffect } from "react";

// Components
import List from "./List";

// Data
import ProjectCard from "./ProjectCard";

export default function ProjectList({ columns = 1, searchable = false }) {
  const [projects, setProjects] = useState();

  useEffect(() => {
    async function fetchData() {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "projects";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Resoinse status: ${response.status}`);
        }

        const result = await response.json();
        setProjects(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <List
        items={projects}
        renderItem={(item) => <ProjectCard data={item} key={item._id} />}
        searchable={searchable}
        columns={columns}
      />
    </>
  );
}
