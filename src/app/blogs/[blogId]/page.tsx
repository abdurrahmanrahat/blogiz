import BlogDetails from "@/components/ui/BlogDetails";

type TBlogDetailProps = {
  params: {
    blogId: string;
  };
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
