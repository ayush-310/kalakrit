import LandingPage from "@/components/portfolio/landingPage/LandingPage";
import PortfolioTestmonials from "@/components/portfolio/testimonials/PortfolioTestmonials";
import Approach from "@/components/portfolio/approach/Approach";
import React from "react";
import Clients from "@/components/portfolio/clients/Clients";

const Portfolio = () => {
  return (
    <main>
      <LandingPage />
      <Clients />
      <Approach />
      <PortfolioTestmonials />
    </main>
  );
};

export default Portfolio;
