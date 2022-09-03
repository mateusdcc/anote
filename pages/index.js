import Navbar from "../components/Navbar";
import { OpenSourceHero, HomeHero, FeaturesHero } from "../components/home/InfoHeros";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div id="content" className="min-h-screen mt-5">
        <div className="mt-36">
          <HomeHero />
        </div>
        <FeaturesHero />
      </div>
      <Navbar/>
      <Footer/>
    </div>
  )
}
