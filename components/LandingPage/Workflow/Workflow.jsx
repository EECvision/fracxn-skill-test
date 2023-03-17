import classes from "./Workflow.style";
import workflow from "../../../assets/workflow.png";
import Image from "next/image";

const Workflow = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}><span>Our Customised</span> <span className={classes.accent}>Workflow</span></div>
      <Image src={workflow} alt="" />
    </div>
  );
};

export default Workflow;
