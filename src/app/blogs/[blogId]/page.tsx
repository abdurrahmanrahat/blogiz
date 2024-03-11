type TBlogDetailProps = {
  params: {
    blogId: string;
  };
};

const BlogDetailPage = ({ params }: TBlogDetailProps) => {
  console.log(params);

  return <div>BlogDetailPage</div>;
};

export default BlogDetailPage;
