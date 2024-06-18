import Navbar from "../../components/Navbar/index.js";
import PageLayout from "../../components/PageLayout/index.js";
import Hero from "./components/Hero.js"

export default function Homepage() {
  return <PageLayout>
    <div>
      <Hero />
    </div>
  </PageLayout>;
}
