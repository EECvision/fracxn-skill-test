import classes from "./Verification.module.css";
import audit from "../../../assets/audit.png";
import Image from "next/image";
import FadeAnimation from "../../CustomAnimations/FadeAnimation/FadeAnimation";

const Verification = () => {
  return (
    <FadeAnimation>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <h1 className={classes.title}>
            <span>Verification</span>{" "}
            <span className={classes.accent}>and</span>{" "}
            <span>Audit checks</span>
          </h1>
          <p className={classes.description}>
            The company believes in maintaining very compliant procedure for
            carbon trading and will appoint top rate audit firms to conduct
            periodic checks and verification.
          </p>
          <br />
          <p className={classes.description}>
            The audit reports to be made available on the website so as to make
            sure that investors are secured and everything happens in full
            transparency.
          </p>
        </div>
        <div className={classes.rhs}>
          <Image className={classes.image} src={audit} alt="" />
        </div>
      </div>
    </FadeAnimation>
  );
};

export default Verification;
