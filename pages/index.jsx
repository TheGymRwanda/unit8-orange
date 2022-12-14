import CompanyOverview from "./../components/sections/CompanyOverview";
import Projects from "../components/sections/Projects";
import Expertise from "../components/sections/Expertise";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("../components/sections/Gallery"), {
  ssr: false,
});
import Blog from "../components/sections/Blog";

const Home = () => {
  return (
    <>
      <Projects />
      <Expertise />
      <CompanyOverview />
      <Gallery />
      <Blog />
    </>
  );
};

export default Home;
