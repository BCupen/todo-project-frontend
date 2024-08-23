import { Header } from "./components"
import { TodoInput } from "./components/TodoInput"

function App() {

  return (
    <div className="max-w-[1440px] w-full h-screen bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-contain mx-auto flex flex-col items-center gap-8 p-16 font-body">
      <Header />
      <TodoInput />
    </div>
  )
}

export default App
