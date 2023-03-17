import Banner from "../components/LandingPage/Banner/Banner";
import Benefits from "../components/LandingPage/Benefits/Benefits";
import BlogPosts from "../components/LandingPage/BlogPosts/BlogPosts";
import CardbonCard from "../components/LandingPage/CarbonCard/CardbonCard";
import Details from "../components/LandingPage/Details/Details";
import Features from "../components/LandingPage/Features/Features";
import HowTo from "../components/LandingPage/HowTo/HowTo";
import Partnership from "../components/LandingPage/Partnership/Partnership";
import Verification from "../components/LandingPage/Verification/Verification";
import Workflow from "../components/LandingPage/Workflow/Workflow";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Partnership/>
      <Features />
      <Details />
      <Workflow />
      <HowTo />
      <Benefits />
      <Verification />
      <CardbonCard/>
      <BlogPosts />
    </div>
  );
}
