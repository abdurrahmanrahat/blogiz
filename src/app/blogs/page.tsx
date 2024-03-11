"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store", // it does not save in build time. when user request, then data will come from database.
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);
  // console.log(blogs);

  return (
    <div className="w-[90%] mx-auto my-16">
      <h2 className="text-4xl text-center my-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-gray-400 text-xl text-center max-w-[60ch] mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {blogs?.map((blog: TBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
