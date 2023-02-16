import withNavbarContainer from "@/components/Nav";
import Banner from "@/section/Banner";
import CoreFeature from "@/section/CoreFeature";
import Feature from "@/section/Feature";
import KeyFeature from "@/section/KeyFeature";
import Testimonial from "@/section/Testimonial";
import WorkFlow from "@/section/WorkFlow";
import Security from "@/section/Security";
import Faq from "@/section/Faq";
import Newsletter from "@/section/Newsletter";
import Contact from "@/section/Contact";
import SEO from "@/components/Seo";

function Home() {
  return (
    <>
      <SEO />
      <main style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <Banner />
        <KeyFeature />
        <CoreFeature />
        <Feature />
        <WorkFlow />
        <Testimonial />
        <Security />
        <Faq />
        <Newsletter />
        <Contact />
      </main>
    </>
  );
}

export default withNavbarContainer(Home);
