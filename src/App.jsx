import { Header } from "./components/Header/Header"
import { Banner } from "./components/Banner/Banner"
import { About } from "./components/About/About"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Footer } from "./components/Footer/Footer"
import { ProjectList } from "./components/Projects/ProjectList"
import { Experience } from "./components/Experience/Experience"

const App = () => {
  return (
    <div className="min-h-screen bg-teal-100 text-indigo-800 font-sans">
      <Header />
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <Banner />
          <About />
          <h2 className="text-2xl font-bold text-indigo-800">Work Experience</h2>
          <Experience />
          <h2 className="text-2xl font-bold text-indigo-800">Projects</h2>
          <ProjectList />
        </section>
        <Sidebar />
      </main>
      <Footer />
    </div>
  )
}

export default App
