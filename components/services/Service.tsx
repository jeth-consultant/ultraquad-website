import { NextPage } from "next";
import ServicesSection from "./ServiceSection";
import Testimonials from "./Testimonials";

const Service: NextPage = () => {
  return (
    <>
      <ServicesSection />
      <Testimonials />;
    </>
  );
};

export default Service;
