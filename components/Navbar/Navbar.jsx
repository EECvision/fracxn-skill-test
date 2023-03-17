import classes from "./Navbar.style";
import Logo from "../../assets/logo.svg";
import HamburgerIcon from "../../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Logo className={classes.logo} />
        <nav className={classes.navContainer}>
          <div className={classes.navItem}>About</div>
          <div className={classes.navItem}>Ecosystem</div>
          <div className={classes.navItem}>Solution</div>
          <div className={classes.navItem}>Contact Us</div>
        </nav>
        <div className={classes.lunchBtn}>Launch App</div>
        <HamburgerIcon className={classes.toggleIcon}/>
      </div>
    </div>
  );
};

export default Navbar;
