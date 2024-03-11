import { TBlog } from "@/types";
import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div className="w-[90%] mx-auto my-16 md:my-24">
      <h2 className="text-4xl text-center my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-gray-400 text-xl text-center max-w-[60ch] mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
