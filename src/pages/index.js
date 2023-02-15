import withNavbarContainer from "@/components/Nav";
import Banner from "@/section/Banner";
import CoreFeature from "@/section/CoreFeature";
import Feature from "@/section/Feature";
import KeyFeature from "@/section/KeyFeature";
import Testimonial from "@/section/Testimonial";
import WorkFlow from "@/section/WorkFlow";
import Security from "@/section/Security";
import Head from "next/head";
import Faq from "@/section/Faq";
import Newsletter from "@/section/Newsletter";
import Contact from "@/section/Contact";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
