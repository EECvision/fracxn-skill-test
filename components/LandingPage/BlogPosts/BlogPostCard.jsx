import classes from "./BlogPostCard.style";
import Viewicon from "../../../assets/icon-view.svg";
import DurationIcon from "../../../assets/icon-duration.svg";
import CalenderIcon from "../../../assets/icon-calendar.svg";

const BlogPostCard = ({ data }) => {
  const { coverImage, avatar, name, title, category, views, duration, date } =
    data;
  return (
    <div style={{boxShadow: "0px 0px 4px #37F2AD"}} className={classes.container}>
      <img src={coverImage} alt="" className={classes.coverImage} />
      <div className={classes.details}>
        <div className={classes.author}>
          <img src={avatar} alt="" className={classes.avatar} />
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.title}>{title}</div>
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
