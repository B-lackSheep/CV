export const Skills = () => {
  return (
    <section className="bg-teal-50 p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-indigo-800">Skills</h3>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-teal-600">Backend</h4>
        <ul className="mt-2 list-disc ml-6 text-teal-700">
          <li>C++</li>
          <li>Python</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-teal-600">Frontend</h4>
        <ul className="mt-2 list-disc ml-6 text-teal-700">
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xl font-semibold text-teal-600">Other Tools</h4>
        <ul className="mt-2 list-disc ml-6 text-teal-700">
          <li>Git</li>
          <li>npm</li>
        </ul>
      </div>
    </section>
  )
}
