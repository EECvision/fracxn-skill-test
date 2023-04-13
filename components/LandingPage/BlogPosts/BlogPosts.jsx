import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "./BlogPosts.script";
import classes from "./BlogPosts.module.css";
import SearchIcon from "../../../assets/icon-search.svg";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const BlogPosts = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.heading}>
          <div className={classes.title}>Latest blog posts</div>
          <div className={classes.searchBar}>
            <input type="text" placeholder="search" />
            <SearchIcon />
          </div>
        </div>
      </FadeAnimation>
      <div className={classes.blogList}>
        {blogPosts.map((data, index) => (
          <FadeAnimation>
            <BlogPostCard key={index} data={data} />
          </FadeAnimation>
        ))}
      </div>
      <div className={classes.control}>
        <div className={classes.btn}>Previous</div>
        <div className={classes.indicators}>
          <div className={classes.indicator}>1</div>
          <div className={classes.indicator}>2</div>
          <div className={classes.indicator}>3</div>
        </div>
        <div className={classes.btn}>Next</div>
      </div>
    </div>
  );
};

export default BlogPosts;
