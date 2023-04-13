import classes from "./Workflow.module.css";
import workflow from "../../../assets/workflow.png";
import workflowMobile from "../../../assets/workflow-mobile.png";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Workflow = () => {
  return (
    <div className={classes.container}>
      <FadeAnimation>
        <div className={classes.title}>
          <span>Our Customised</span>{" "}
          <span className={classes.accent}>Workflow</span>
        </div>
      </FadeAnimation>
      <FadeAnimation>
        <Image
          className={`${classes.image} ${classes.mobile}`}
          src={workflowMobile}
          alt=""
        />
        <Image className={classes.image} src={workflow} alt="" />
      </FadeAnimation>
    </div>
  );
};

export default Workflow;
