"use client";
import { useState } from "react";
import Card from "./Card";
import CarouselBrand from "./CarouselBrand";
import Modal from "./ServiceModal";

export default function Section() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const data = [
    {
      section_number: 1,
      title: "1.RPO Recruitment Process Outsourcing",
      description: "Talent delivered. Business moves forward",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "Build your workforce fast, with no compromise on quality.",
          nameTitle: "Mass Hiring",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "Find visionary leaders who align with your mission.",
          nameTitle: "Executive Hiring",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "Expand across borders with vetted, remote-ready profession",
          nameTitle: "Global Talent Solutions",
        },
      ],
      cta_text: "Learn More",
      cta_link: "/learn",
    },
    {
      section_number: 2,
      title: "2.BPO- Business Process Outsourcing",
      description:
        "Your operational teams, built for performance.",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "Sales, customer service, and field support",
          nameTitle: "Skilled, Ready-to-Go Teams",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "Matched to your business goals and market needs",
          nameTitle: "Industry-Focused Talent",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "Flexible team sizes that grow with you",
          nameTitle: "Scalable Support",
        },
      ],
      cta_text: "Explore Now",
      cta_link: "/explore",
    },
    {
      section_number: 3,
      title: "3.HR Consultation ",
      description:
        "We guide businesses through people challenges — from HR audits to culture building and policy development.",
      cards: [
        {
          image: "/images/heroServices.jpg",
          quote: "",
          nameTitle: "Company structuring & team planning",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "",
          nameTitle: "Culture & value alignment",
        },
        {
          image: "/images/heroServices.jpg",
          quote: "",
          nameTitle: "Performance systems, KPIs & policy rollout",
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
          {/* Render the section with an ID */}
          <section
            id={`section-${sectionData.section_number}`}
            className="py-8 px-4 rounded-lg shadow-sm"
          >
            <h2 className="text-4xl font-bold text-center text-prime mb-6">
              {sectionData.title}
            </h2>
            <p
              href="/"
              className="cursor-pointer text-center text-white mb-6 text-2xl italic"
            >
              Learn More
            </p>
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
                  onClick={() => handleCardClick(card)}
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
      {/* Render Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        card={selectedCard}
      />
    </div>
  );
}
