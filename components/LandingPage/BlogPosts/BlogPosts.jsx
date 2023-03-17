import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "./BlogPosts.script";
import classes from "./BlogPosts.style";
import SearchIcon from "../../../assets/icon-search.svg";

const BlogPosts = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <div className={classes.title}>Latest blog posts</div>
      </div>
      <div className={classes.blogList}>
        {blogPosts.map((data, index) => (
          <BlogPostCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
