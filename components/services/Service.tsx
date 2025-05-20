import { NextPage } from "next";
import ServicesSection from "./ServiceSection";
import Testimonials from "./Testimonials";
import PartnersShowcase from "./PatnerShowcase";

const Service: NextPage = () => {
  return (
    <>
      <ServicesSection />
      <Testimonials />;
      <PartnersShowcase/>
    </>
  );
};

export default Service;
