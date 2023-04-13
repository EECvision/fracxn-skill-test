import classes from "./BlogPostCard.module.css";
import Viewicon from "../../../assets/icon-view.svg";
import DurationIcon from "../../../assets/icon-duration.svg";
import CalenderIcon from "../../../assets/icon-calendar.svg";
import LinkIcon from "../../../assets/icon-link.svg";

const BlogPostCard = ({ data }) => {
  const { coverImage, avatar, name, title, category, views, duration, date } =
    data;
  return (
    <div className={`${classes.container} ${classes.container}`}>
      <div className={classes.imageContainer}>
        <img src={coverImage} alt="" className={classes.coverImage} />
      </div>
      <div className={classes.details}>
        <div className={classes.author}>
          <img src={avatar} alt="" className={classes.avatar} />
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.title}>
          <span>{title}</span>
          <LinkIcon />
        </div>
        <div className={classes.category}>
          <div className={classes.line}></div>
          <div className={classes.text}>{category}</div>
        </div>
        <div className={classes.engagements}>
          <div className={classes.item}>
            <Viewicon />
            <div>{views}</div>
          </div>
          <div className={classes.item}>
            <DurationIcon />
            <div>{duration}</div>
          </div>
          <div className={classes.item}>
            <CalenderIcon />
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
