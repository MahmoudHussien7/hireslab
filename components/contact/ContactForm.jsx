import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ContactForm({
  role = "Candidate",
  lookingFor = "Select one",
  formData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  },
  onBack = () => {},
  onChange = () => {},
  onSubmit = () => {},
  loading = false,
  error = null,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    // First Name Validation
    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name can only contain letters and spaces.";
    }

    // Last Name Validation
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name can only contain letters and spaces.";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (formData.email.length < 5) {
      newErrors.email = "Email must be at least 5 characters.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject Validation (using lookingFor)
    if (!lookingFor || lookingFor === "Select one") {
      newErrors.subject = "Subject is required.";
    }

    // Message Validation
    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-4xl flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
      {/* Contact Information Sidebar */}
      <div className="w-full lg:w-1/3 bg-[#121212] p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Contact Information
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Say something to start a live chat!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-gray-400" size={20} />
              <p className="text-sm text-white">+1 012 3456 789</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-gray-400" size={20} />
              <p className="text-sm text-white">info@thehireslab.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-gray-400" size={20} />
              <p className="text-sm text-white">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 mt-6">
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-2/3 bg-[#1a1a1a] p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Get in Touch</h2>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-transparent border border-gray-600 text-gray-300 text-sm rounded-md hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Change Selections
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-4">
            Submission failed: {error}. Please try again.
          </p>
        )}

        <form onSubmit={validateForm} className="flex flex-col gap-6">
          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="w-full">
              <label className="floating-label">
                <span className="text-gray-400">First name*</span>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName || ""}
                  onChange={onChange}
                  required
                  disabled={loading}
                  className="input input-md w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="First name*"
                />
              </label>
              {errors.firstName && (
                <p className="text-red-400 text-xsMT-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full">
              <label className="floating-label">
                <span className="text-gray-400">Last name*</span>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName || ""}
                  onChange={onChange}
                  required
                  disabled={loading}
                  className="input input-md w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 disabled:opacity-50"
                  placeholder="Last name*"
                />
              </label>
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="floating-label">
              <span className="text-gray-400">Email address*</span>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email || ""}
                onChange={onChange}
                required
                disabled={loading}
                className="input input-md w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 disabled:opacity-50"
                placeholder="mail@site.com"
              />
            </label>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="w-full">
            <label className="block text-sm text-gray-400 mb-2">
              I am a: <span className="text-white">{role}</span>
            </label>
            <label className="block text-sm text-gray-400 mb-2">
              Looking for: <span className="text-white">{lookingFor}</span>
            </label>
          </div>

          <div className="w-full">
            <label className="floating-label">
              <span className="text-gray-400">Message*</span>
              <textarea
                name="message"
                id="message"
                value={formData.message || ""}
                onChange={onChange}
                required
                disabled={loading}
                rows="4"
                className="input input-md w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 resize-none disabled:opacity-50"
                placeholder="Write your message..."
              ></textarea>
            </label>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="prime"
              disabled={loading}
              className="flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Inline Styles for Floating Labels */}
      <style jsx global>{`
        .floating-label {
          position: relative;
          width: 100%;
        }
        .floating-label input,
        .floating-label textarea {
          background: #1f1f1f;
          border-radius: 8px;
          padding: 12px 16px;
          width: 100%;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .floating-label textarea {
          resize: none;
          min-height: 100px;
        }
        .floating-label input:focus,
        .floating-label textarea:focus {
          outline: none;
        }
        .floating-label span {
          position: absolute;
          left: 10px;
          top: 10%;
          transform: translateY(-50%);
          font-size: 14px;
          pointer-events: none;
          transition: all 0.3s ease;
          background: none;
        }
        .floating-label input:focus + span,
        .floating-label textarea:focus + span,
        .floating-label input:not(:placeholder-shown) + span,
        .floating-label textarea:not(:placeholder-shown) + span {
          top: 8px;
          font-size: 12px;
          color: #4a90e2;
        }
        .floating-label input[type="file"] {
          padding: 12px 16px;
        }
      `}</style>
    </div>
  );
}
