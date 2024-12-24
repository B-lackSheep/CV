import { Education } from "./Education"
import { Languages } from "./Languages"
import { Skills } from "./Skills"

export const Sidebar = () => {
  return (
    <aside className="border-l border-gray-300 pl-4 space-y-6">
      <Education />
      <Skills />
      <Languages />
    </aside>
  )
}
