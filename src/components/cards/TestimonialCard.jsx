function TestimonialCard({ name, role, imageUrl, quote }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div className="flex flex-col items-center text-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-[6.5rem] h-[6.5rem] rounded-full object-cover mb-6 border-4 border-blue-600 shadow-lg"
        />
        <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
          "{quote}"
        </blockquote>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
