import ServicesHero from "@/components/services/ServicesHero";
import ServicesBenefits from "@/components/services/ServicesBenefits";
import Service from "@/components/services/Service";
import BrandLogos from "@/components/services/BrandLogos";
import CarouselBrand from "@/components/services/CarouselBrand";
import ServiceCard from "@/components/services/ServiceCard";
import Newsletter from "@/components/home/Newsletter";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesBenefits />
      <ServiceCard />
      <CarouselBrand className="bg-white" />
      {/* <Service /> */}
      <Newsletter />
    </>
  );
};

export default Services;
