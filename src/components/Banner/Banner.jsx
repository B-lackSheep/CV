export const Banner = () => {
  return (
    <section className="flex gap-3 flex-col items-center sm:items-center bg-white p-6 rounded-lg shadow-lg sm:flex-row">
      <img
        src="../karachun.jpg"
        alt="Avatar"
        className="w-32 h-32 rounded-xl shadow-xl"
      />
      <p className="text-center text-gray-600">
        I am a student at the Belarusian State University, Faculty of Mechanics
        and Mathematics. I am creative, hardworking, and ready to tackle any
        challenges that come my way.
      </p>
    </section>
  )
}
