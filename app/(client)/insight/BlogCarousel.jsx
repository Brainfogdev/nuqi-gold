"use client";

import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VISIBLE_ITEMS = 3;

const BlogCarousel = ({ blogs }) => {
  const [startIndex, setStartIndex] = useState(0);

  const totalBlogs = Array.isArray(blogs) ? blogs.length : 0;
  const isEmpty = totalBlogs === 0;

  const visibleBlogs = useMemo(() => {
    if (isEmpty) {
      return [];
    }

    return blogs.slice(startIndex, startIndex + VISIBLE_ITEMS);
  }, [blogs, startIndex, isEmpty]);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + VISIBLE_ITEMS < totalBlogs;

  const handlePrev = () => {
    if (canScrollLeft) {
      setStartIndex((prev) => Math.max(prev - VISIBLE_ITEMS, 0));
    }
  };

  const handleNext = () => {
    if (canScrollRight) {
      setStartIndex((prev) =>
        Math.min(prev + VISIBLE_ITEMS, totalBlogs - VISIBLE_ITEMS)
      );
    }
  };

  if (isEmpty) {
    return null;
  }

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id ?? blog.title}
            className="flex flex-col justify-between gap-6 p-8 transition-all duration-300 border rounded-xl group hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-nuqi-bgfade hover:to-nuqi-bgdark hover:text-white"
          >
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-medium group-hover:text-nuqi-gold">
                  {blog.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground group-hover:text-white/90">
                  {blog.snippet}
                </p>
              </div>
            </div>
            <div>
              <Button
                asChild
                className="px-6 py-4 text-lg hover:bg-nuqi-gold hover:text-white hover:bg-none group-hover:bg-nuqi-gold group-hover:text-white group-hover:bg-none"
              >
                <Link href={`/insight/${blog.id ?? "#"}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
      {totalBlogs > VISIBLE_ITEMS && (
        <div className="flex gap-5 mt-6">
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            className="p-2 text-lg border rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Previous blogs"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            className="p-2 text-lg border rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Next blogs"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCarousel;
