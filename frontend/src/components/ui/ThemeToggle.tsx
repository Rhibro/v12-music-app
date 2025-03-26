import { useEffect, useState } from "react";
// light mode is default

export default function ThemeToggle() {
  // darkMode variable to determine if dark mode is active
  const [darkMode, setDarkMode] = useState(() => { // a function to update darkMode

    // checking if the theme is dark
    return localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && 

    // If there's no stored theme preference, it checks the system preference using the below line of code
    window.matchMedia('(prefers-color-scheme: dark)').matches);
  } 
  );

  // apply dark mode with useEffect
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

//Summary of What This Component Does

//Checks theme preference (localStorage or system setting).
//Stores user preference and applies "dark" class to <html>.
//Provides a toggle button with different styles for light/dark modes.
//The theme is applied immediately 
//The theme persists across page reloads