export default function ContactConfirmation({ onReset }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h2>
      <p className="text-gray-600 mb-4">
        Your message has been sent successfully. We’ll get back to you soon.
      </p>
      <button
        onClick={onReset}
        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Send Another Message
      </button>
    </div>
  );
}
