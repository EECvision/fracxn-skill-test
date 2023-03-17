import classes from "./Footer.style";
import Logo from "../../assets/logo.svg";
import {
  companys,
  platforms,
  socialMediaConnections,
  supports,
} from "./Footer.script";
import MailIcon from "../../assets/icon-mail.svg";
import SendIcon from "../../assets/icon-send.svg";
import CompanyLogo from "../../assets/icon-company.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.tSide}>
        <div className={classes.logoWrapper}>
          <Logo className={classes.logo} />
          <div>Blockchain, based company to offset carbon emission</div>
          <div className={classes.socialMediaLinks}>
            {socialMediaConnections.map((socialLink, index) => (
              <div key={index}>{socialLink.icon}</div>
            ))}
          </div>
        </div>
        <div className={classes.detailsContainer}>
          <div className={classes.detailsWrapper}>
            <div className={classes.title}>Platform</div>
            {platforms.map((platform, index) => (
              <div className={classes.list} key={index}>
                {platform.name}
              </div>
            ))}
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.title}>Company</div>
            {companys.map((comapany, index) => (
              <div className={classes.list} key={index}>
                {comapany.name}
              </div>
            ))}
          </div>
          <div className={classes.detailsWrapper}>
            <div className={classes.title}>Support</div>
            {supports.map((support, index) => (
              <div className={classes.list} key={index}>
                {support.name}
              </div>
            ))}
          </div>
        </div>
        <div className={classes.form}>
          <div className={classes.title}>Get Notified by Sustainology</div>
          <div
            style={{ boxShadow: "0px 0px 4px #94D600" }}
            className={classes.inputContainer}
          >
            <MailIcon />
            <input
              className={classes.input}
              type="text"
              placeholder="enter your email"
            />
            <SendIcon />
          </div>
        </div>
      </div>
      <div className={classes.base}>
        <div>Copyright 2022 carbonbank.io</div>
        <div className={classes.company}>
          <div style={{ color: "#999999" }} className={classes.bText}>
            POWERED BY
          </div>{" "}
          <CompanyLogo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
