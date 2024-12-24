/* eslint-disable react/prop-types */
const Project = ({ title, description, tags, githubLink }) => {
  return (
    <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl"
    >
      <h3 className="text-xl font-bold text-indigo-800">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-200 text-teal-800 py-1 px-3 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default Project
