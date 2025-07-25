"use client";
// React imports
import { useState, useEffect } from "react";

// Components
import List from "./List";

// Data
import ProjectCard from "./ProjectCard";
import Placeholder from "./Placeholder";

export default function ProjectList({ columns = 1, searchable = false }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "projects";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Receive status: ${response.status}`);
        }

        const result = await response.json();
        setProjects(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    if (projects.length > 0) {
      setLoading(false);
    }

    fetchData();
  }, [projects]);

  return loading ? (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((item, index) => (
        <Placeholder key={index} />
      ))}
    </div>
  ) : (
    <List
      items={projects}
      renderItem={(item) => <ProjectCard data={item} key={item._id} />}
      searchable={searchable}
      columns={columns}
    />
  );
}
