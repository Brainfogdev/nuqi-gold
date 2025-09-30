import Container from "@/components/Container";
import React from "react";
import BlogCarousel from "./BlogCarousel";

const BLOGS_ENDPOINT = "http://150.129.118.10:7000/blog/getblog";

async function fetchBlogs() {
  const response = await fetch(BLOGS_ENDPOINT, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data?.blog) ? data.blog : [];
}

function parseContent(content) {
  if (content && typeof content === "object") {
    return content;
  }

  if (typeof content === "string") {
    try {
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
    } catch (error) {
      return { para1: content };
    }
  }

  return { para1: "" };
}

function createSnippet(content) {
  const normalized = parseContent(content);
  const paragraph =
    typeof normalized?.para1 === "string" ? normalized.para1 : "";

  if (!paragraph) {
    return "";
  }

  if (paragraph.length <= 220) {
    return paragraph;
  }

  return `${paragraph.slice(0, 217).trimEnd()}...`;
}

const FALLBACK_BLOGS = [
  {
    id: "fallback-1",
    title: "How to start Investing Journey ?",
    snippet:
      "Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.",
  },
  {
    id: "fallback-2",
    title: "How to start Investing Journey ?",
    snippet:
      "Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.",
  },
  {
    id: "fallback-3",
    title: "How to start Investing Journey ?",
    snippet:
      "Lorem ipsum dolor quasi non officiis consectetur ipsa temporibus voluptatibus architecto excepturi ratione, maiores eum aspernatur quas soluta, mollitia earum impedit.",
  },
];

const page = async () => {
  let blogs = [];

  try {
    const fetchedBlogs = await fetchBlogs();
    blogs = fetchedBlogs
      .filter((blog) => blog?.status === "active")
      .map((blog) => ({
        ...blog,
        snippet: createSnippet(blog.content),
      }));
  } catch (error) {
    console.error("Failed to load blogs:", error);
  }

  const cardsToRender = blogs.length ? blogs : FALLBACK_BLOGS;

  return (
    <section>
      <Container className={"py-20"}>
        <h1 className="text-4xl font-semibold text-nuqi-bgfade">
          Dive into{" "}
          <span className="text-nuqi-gold">
            Expert Insights,& Market Trends
          </span>
        </h1>
        <div className="mt-10">
          <BlogCarousel blogs={cardsToRender} />
        </div>
      </Container>
    </section>
  );
};

export default page;
