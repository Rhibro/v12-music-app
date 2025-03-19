import { useEffect, useState } from "react";

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
      className="p-2 border-4 border-black dark:border-white rounded-md bg-colors-customGreen-light hover:bg-colors-customGreen-dark dark:bg-colors-customYellow-dark font-semibold"
    >
      {darkMode ? "Pop Mode" : "Goth Mode"}
    </button>
  );
}
