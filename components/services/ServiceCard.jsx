import Card from "./Card";
import CarouselBrand from "./CarouselBrand";

export default async function Section() {
  const data = [
    {
      section_number: 1,
      title: " 1.1 PRBO",
      description: "Learn more",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "Revealing the true science and urban legends.",
          nameTitle: "Skeptoid",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "This product changed my life!",
          nameTitle: "Jane Doe, CEO",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "This product changed my life!",
          nameTitle: "Jane Doe, CEO",
        },
      ],
      cta_text: "Learn More",
      cta_link: "/learn",
    },
    {
      section_number: 2,
      title: "1.2 Explore Categories",
      description:
        "Start with the main category as a title + learn more CTA to direct them to it's explanation article to 'learn more' + Cards displaying subcategories 'Picture - Title - H2 description' In the middle Clients breaker - Then proceed with the rest of the sections - idea services as a quick promotion & social proof while viewing the services to enforce the decision making process.",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "Great service!",
          nameTitle: "Client 1",
        },
      ],
      cta_text: "Explore Now",
      cta_link: "/explore",
    },
    {
      section_number: 3,
      title: "1.3 Highlight Results and Build Trust",
      description:
        "Highlight the impact with testimonials + a strong CTA to seal the deal",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "This product changed my life!",
          nameTitle: "Jane Doe, CEO",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "Amazing results in just a week!",
          nameTitle: "John Smith, Entrepreneur",
        },
      ],
      cta_text: "Get Started",
      cta_link: "/signup",
    },
  ];

  return (
    <div className="space-y-10">
      {data.map((sectionData, index) => (
        <div key={index}>
          {/* Render the section */}
          <section className="py-8 px-4 rounded-lg shadow-sm">
            <h2 className="text-4xl font-bold text-center text-prime mb-6">
              {` ${sectionData.title}`}
            </h2>
            <p className="text-center text-white mb-6">
              {sectionData.description}
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {sectionData.cards.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  image={card.image}
                  quote={card.quote}
                  nameTitle={card.nameTitle}
                />
              ))}
            </div>
          </section>
          {/* Render ServiceCarousel after each section, except the last one */}
          {index < data.length - 1 && (
            <div className="py-6">
              <CarouselBrand />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
