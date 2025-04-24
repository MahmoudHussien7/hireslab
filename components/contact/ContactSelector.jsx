import { ChevronDown } from "lucide-react";

export default function ContactSelector({
  role,
  setRole,
  lookingFor,
  setLookingFor,
}) {
  const handleToggle = () => {
    const newRole = role === "Candidate" ? "Employer" : "Candidate";
    setRole(newRole);
    setLookingFor("Select one"); // Reset "Looking for" when role changes
  };

  const candidateOptions = [
    "Select one",
    "Help with signing up",
    "Help with technical issues",
    "Job application updates",
    "Writing competition entry",
    "YouTube programme entry",
  ];

  const employerOptions = [
    "Select one",
    "Recruitment services",
    "Branding services",
    "Job posting bundle",
    "Help with technical issues",
    "Partnering opportunities",
  ];

  const options = role === "Candidate" ? candidateOptions : employerOptions;

  return (
    <div className="space-y-6">
      {/* Toggle Switch for Role Selection */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Candidate</span>
          <label className="cosmic-toggle">
            <input
              className="toggle"
              type="checkbox"
              checked={role === "Employer"}
              onChange={handleToggle}
            />
            <div className="slider">
              <div className="cosmos"></div>
              <div className="energy-line"></div>
              <div className="energy-line"></div>
              <div className="energy-line"></div>
              <div className="toggle-orb">
                <div className="inner-orb"></div>
                <div className="ring"></div>
              </div>
              <div className="particles">
                <div style={{ "--angle": "30deg" }} className="particle"></div>
                <div style={{ "--angle": "60deg" }} className="particle"></div>
                <div style={{ "--angle": "90deg" }} className="particle"></div>
                <div style={{ "--angle": "120deg" }} className="particle"></div>
                <div style={{ "--angle": "150deg" }} className="particle"></div>
                <div style={{ "--angle": "180deg" }} className="particle"></div>
              </div>
            </div>
          </label>
          <span className="text-sm font-medium text-gray-700">Employer</span>
        </div>
      </div>

      {/* Custom Dropdown for Looking For */}
      <div className="flex flex-col items-center">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Looking for:
        </label>
        <div className="relative w-full max-w-md">
          <select
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            required
            className="appearance-none w-full bg-transparent border-b border-gray-600 text-white text-sm py-2 pl-4 pr-10 focus:outline-none focus:border-blue-400 transition-all duration-300 hover:border-gray-400"
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={option}
                disabled={option === "Select one"}
                className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
              >
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transform transition-transform duration-300 pointer-events-none"
            size={20}
          />
        </div>
      </div>

      {/* Inline Styles for Cosmic Toggle */}
      <style jsx global>{`
        .cosmic-toggle {
          position: relative;
          width: 140px;
          height: 70px;
          transform-style: preserve-3d;
          perspective: 500px;
        }

        .toggle {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #7ed967, #16213e);
          border-radius: 35px;
          transition: 0.5s;
          transform-style: preserve-3d;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5),
            inset 0 0 15px rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .cosmos {
          position: absolute;
          inset: 0;
          background: radial-gradient(
              1px 1px at 10% 10%,
              #fff 100%,
              transparent
            ),
            radial-gradient(1px 1px at 20% 20%, #fff 100%, transparent),
            radial-gradient(2px 2px at 30% 30%, #fff 100%, transparent),
            radial-gradient(1px 1px at 40% 40%, #fff 100%, transparent),
            radial-gradient(2px 2px at 50% 50%, #fff 100%, transparent),
            radial-gradient(1px 1px at 60% 60%, #fff 100%, transparent),
            radial-gradient(2px 2px at 70% 70%, #fff 100%, transparent),
            radial-gradient(1px 1px at 80% 80%, #fff 100%, transparent),
            radial-gradient(1px 1px at 90% 90%, #fff 100%, transparent);
          background-size: 200% 200%;
          opacity: 0.1;
          transition: 0.5s;
        }

        .toggle-orb {
          position: absolute;
          height: 62px;
          width: 62px;
          left: 4px;
          bottom: 4px;
          background: linear-gradient(145deg, #ffc56d, #ffc56d);
          border-radius: 50%;
          transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform-style: preserve-3d;
          z-index: 2;
        }

        .inner-orb {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: linear-gradient(145deg, #fff, #ffc56d);
          transition: 0.5s;
          overflow: hidden;
        }

        .inner-orb::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(0, 0, 0, 0.1) 10deg,
            transparent 20deg
          );
          animation: patternRotate 10s linear infinite;
        }

        .ring {
          position: absolute;
          inset: -3px;
          border: 1px solid #fff;
          border-radius: 50%;
          transition: 0.5s;
        }

        .toggle:checked + .slider {
          background: linear-gradient(45deg, #ffc56d, #ffc56d);
        }

        .toggle:checked + .slider .toggle-orb {
          transform: translateX(70px) rotate(360deg);
          background: linear-gradient(145deg, #7ed967, #7ed967);
        }

        .toggle:checked + .slider .inner-orb {
          background: linear-gradient(145deg, #fff, #7ed967);
          transform: scale(0.9);
        }

        .toggle:checked + .slider .ring {
          border-color: rgba(78, 205, 196, 0.3);
          animation: ringPulse 2s infinite;
        }

        .energy-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(78, 205, 196, 0.5),
            transparent
          );
          transform-origin: left;
          opacity: 0;
          transition: 0.5s;
        }

        .energy-line:nth-child(1) {
          top: 20%;
          transform: rotate(15deg);
        }
        .energy-line:nth-child(2) {
          top: 50%;
          transform: rotate(0deg);
        }
        .energy-line:nth-child(3) {
          top: 80%;
          transform: rotate(-15deg);
        }

        .toggle:checked + .slider .energy-line {
          opacity: 1;
          animation: energyFlow 2s linear infinite;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #7ed967;
          border-radius: 50%;
          opacity: 0;
        }

        .toggle:checked + .slider .particle {
          animation: particleBurst 1s ease-out infinite;
        }

        .particle:nth-child(1) {
          left: 20%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          left: 40%;
          animation-delay: 0.2s;
        }
        .particle:nth-child(3) {
          left: 60%;
          animation-delay: 0.4s;
        }
        .particle:nth-child(4) {
          left: 80%;
          animation-delay: 0.6s;
        }
        .particle:nth-child(5) {
          left: 30%;
          animation-delay: 0.8s;
        }
        .particle:nth-child(6) {
          left: 70%;
          animation-delay: 1s;
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes patternRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes energyFlow {
          0% {
            transform: scaleX(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1) translateX(50%);
            opacity: 1;
          }
          100% {
            transform: scaleX(0) translateX(100%);
            opacity: 0;
          }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(
                calc(cos(var(--angle)) * 50px),
                calc(sin(var(--angle)) * 50px)
              )
              scale(0);
            opacity: 0;
          }
        }

        .slider:hover .toggle-orb {
          filter: brightness(1.2);
          box-shadow: 0 0 20px rgba(78, 205, 196, 0.5),
            0 0 40px rgba(78, 205, 196, 0.3);
        }

        .slider:hover .cosmos {
          opacity: 0.2;
          animation: cosmosPan 20s linear infinite;
        }

        @keyframes cosmosPan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 200%;
          }
        }

        .toggle:active + .slider .toggle-orb {
          transform: scale(0.95);
        }

        .cosmic-toggle:hover .slider {
          transform: rotateX(10deg) rotateY(10deg);
        }

        .cosmic-toggle:hover .toggle-orb {
          transform: translateZ(10px);
        }

        .toggle:checked + .slider::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--x) var(--y),
            rgba(78, 205, 196, 0.2),
            transparent 50%
          );
          opacity: 0;
          animation: glowFollow 2s linear infinite;
        }

        @keyframes glowFollow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
