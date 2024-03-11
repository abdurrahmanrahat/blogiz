import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    }, // call the fetch method after every 30 seconds.
  });
  const blogs = await res.json();

  return (
    <div>
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
