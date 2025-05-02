import ServicesHero from '@/components/services/ServicesHero'; 
import ServicesBenefits from "@/components/services/ServicesBenefits";
import Service from '@/components/services/Service';
import  BrandLogos from '@/components/services/BrandLogos';


const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesBenefits />
      <Service />
      <BrandLogos />
    </>
  );
};

export default Services;
