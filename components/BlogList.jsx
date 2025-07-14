"use client";
// Components
import List from "@/components/List";
import BlogCard from "./BlogCard";

// Data
import blogs from "@/data/blogs.json";

export default function BlogList({ columns = 1, searchable = false }) {
  return (
    <List
      items={blogs}
      renderItem={(item) => <BlogCard data={item} key={item.id} />}
      searchable={searchable}
      columns={columns}
    />
  );
}
