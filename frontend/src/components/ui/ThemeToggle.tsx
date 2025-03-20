import { useEffect, useState } from "react";
// light mode is default

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState( 
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => { 
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      title="change theme" //if you hover over the button it will show you this message
      className="
      p-2 
      m-1 
      border-4 
      border-black 
      dark:border-white 
      rounded-md 
      bg-colors-customGreen-dark 
      hover:bg-colors-customBlue-dark 
      dark:bg-colors-customBlue-light 
      dark:hover:bg-colors-customGreen-light"
    >
      {darkMode ? "🍭" : "💀"}
    </button>
  );
}
