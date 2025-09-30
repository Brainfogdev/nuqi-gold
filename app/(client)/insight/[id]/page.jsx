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
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <header className="flex-1 space-y-3">
            <p className="text-sm uppercase tracking-wide text-gray-400">
              Insights
            </p>
            <h1 className="text-4xl font-semibold text-nuqi-gold">
              {blog.title}
            </h1>
            <p className="text-sm text-gray-400">
              By {blog.author ?? "Team Nuqi"}
            </p>
          </header>

          <div className="md:w-[28%] lg:w-[22%] xl:w-[20%] -ml-2 md:-ml-6 lg:-ml-8 xl:-ml-10">
            <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 aspect-square max-h-[220px]">
              {blog.imageurl ? (
                <img
                  src={blog.imageurl}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                  Image unavailable
                </div>
              )}
            </div>
          </div>
        </div>

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
