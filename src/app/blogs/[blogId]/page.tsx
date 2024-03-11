import BlogDetails from "@/components/ui/BlogDetails";
import { TBlog } from "@/types";

type TBlogDetailProps = {
  params: {
    blogId: string;
  };
};

// static site generation.
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: TBlog) => ({
    blogId: blog.id, // here blogId is name convention with file name.
  }));
};

const BlogDetailPage = async ({ params }: TBlogDetailProps) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-16">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailPage;
