import classes from "./Verification.style";
import audit from "../../../assets/audit.png";
import Image from "next/image";

const Verification = () => {
  return (
    <div className={classes.container}>
      <div className={classes.lhs}>
        <h1 className={classes.title}>
          <span>Verification</span> <span className={classes.accent}>and</span>{" "}
          <span>Audit checks</span>
        </h1>
        <p className={classes.description}>
          The company believes in maintaining very compliant procedure for
          carbon trading and will appoint top rate audit firms to conduct
          periodic checks and verification.
        </p>
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
  );
};

export default Verification;
