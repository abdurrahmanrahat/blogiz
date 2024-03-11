import { TBlogs } from "@/types";

const LatestBlogs = ({ blogs }: { blogs: TBlogs[] }) => {
  return (
    <div>
      <h2 className="text-4xl text-center my-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h2>
      <p className="text-gray-400 text-xl text-center max-w-[60ch] mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
    </div>
  );
};

export default LatestBlogs;
