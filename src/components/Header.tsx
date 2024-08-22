import { useEffect, useState } from "react"
import { Moon, Sun } from "./Icons"
export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode)
      document.body.classList.add('dark');
    else 
      document.body.classList.remove('dark');

  }, [darkMode]);
  
  return (
    <header className="max-w-lg w-full flex justify-between">
        <h1 className="uppercase text-light-gray font-bold text-4xl tracking-[0.5em]">TODO</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </button>
    </header>
  )
}
