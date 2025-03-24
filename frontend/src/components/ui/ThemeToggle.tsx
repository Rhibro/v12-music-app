import { useEffect, useState } from "react";
// light mode is default

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && 
      window.matchMedia('(prefers-colcour-scheme: dark)').matches);
  } 
    // document.documentElement.classList.contains("dark")
  );

  useEffect(() => { 
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light');
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
