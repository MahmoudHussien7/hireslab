import { Slot } from "@radix-ui/react-slot";

export default function Card({ image, quote, nameTitle }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden min-w-[280px] max-w-[280px] h-[450px] bg-gradient-to-b from-sec to-sec shadow-lg">
      {/* Image Section */}
      <div className="h-2/3 w-full">
        <img
          src={image}
          alt={nameTitle}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center p-4 h-1/3 text-left">
        <h3 className="text-xl font-bold text-black uppercase mb-2">
          {nameTitle}
        </h3>
        <p className="text-sm text-black leading-tight">{quote}</p>
      </div>
    </div>
  );
}
