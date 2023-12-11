import React from "react";
import ServicesHeader from "./servicesHeader/ServicesHeader";
import ServicesCard from "./servicesCard/ServicesCard";
import Transformation from "./transformation/Transformation";
import Accordion from "./accordion/Accrodion";

const Services: React.FC = () => {
  return (
    <main>
      <ServicesHeader />
      <ServicesCard />
      <Transformation />
      <Accordion />
    </main>
  );
};
export default Services;
