import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import React from "react";

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

function extractParagraphs(content) {
  const normalized = parseContent(content);

  const paragraphs = [];

  if (normalized?.para1) {
    paragraphs.push(normalized.para1);
  }

  if (normalized?.para2) {
    paragraphs.push(normalized.para2);
  }

  if (!paragraphs.length && typeof content === "string") {
    paragraphs.push(content);
  }

  return paragraphs;
}

export default async function InsightDetailsPage({ params }) {
  const { id } = params;

  let blog = null;

  try {
    const blogs = await fetchBlogs();
    blog = blogs.find((item) => String(item?.id) === String(id));
  } catch (error) {
    console.error("Failed to load blog details:", error);
  }

  if (!blog) {
    notFound();
  }

  const paragraphs = extractParagraphs(blog.content);

  return (
    <section>
      <Container className="py-20 space-y-10">
        <header className="space-y-3">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Insights
          </p>
          <h1 className="text-4xl font-semibold text-nuqi-gold">
            {blog.title}
          </h1>
          <p className="text-gray-400 text-sm">
            By {blog.author ?? "Team Nuqi"}
          </p>
        </header>

        <article className="space-y-6 text-lg leading-relaxed text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>

        <div className="flex gap-3">
          <Button asChild variant="outline">
            <a href="/insight">Back to all insights</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
