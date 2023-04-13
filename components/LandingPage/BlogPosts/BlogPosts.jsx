import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "./BlogPosts.script";
import classes from "./BlogPosts.module.css";
import SearchIcon from "../../../assets/icon-search.svg";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";
import Paginate from "../../Paginate/Paginate";

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
        <Paginate
          items={blogPosts}
          countPerPage={6}
          renderItem={(blogPosts) =>
            blogPosts.map((data, index) => (
              <FadeAnimation>
                <BlogPostCard key={index} data={data} />
              </FadeAnimation>
            ))
          }
        />
      </div>
    </div>
  );
};

export default BlogPosts;
