"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { Paragraph, Title } from "@/components/typography";

export default function Page({ params }) {
  const [project, setProject] = useState();

  useEffect(() => {
    async function fetchData() {
      const { title } = await params;
      const url = process.env.NEXT_PUBLIC_SERVER_URL + `/projects/${title}`;

      try {
        // Fetch the project
        const response = await fetch(url);

        // Throw an error if error occurs
        if (!response.ok) {
          throw new Error(`Receive status: ${response.status}`);
        }

        // Set the project state using the result
        const result = await response.json();
        setProject(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, [params]);

  return (
    <main className="main-content">
      <Section>
        <Wrapper>
          <Title>{project && project.title}</Title>
          <Paragraph>{project && project.description}</Paragraph>
        </Wrapper>
      </Section>
    </main>
  );
}
