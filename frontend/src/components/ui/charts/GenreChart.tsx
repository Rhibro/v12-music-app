import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface GenreChartProps {
  genres: Record<string, number>; // Key: Genre, Value: Count
}

export default function GenreChart({ genres }: GenreChartProps) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for dark mode on mount
    useEffect(() => {
      const checkDarkMode = () => {
        setIsDarkMode(document.documentElement.classList.contains("dark"));
      };
  
      checkDarkMode();
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, { attributes: true });
  
      return () => observer.disconnect();
    }, []);
  
    const lightModeColors = ["#36EE5F", "#EE36C5", "#3669EE", "#36EE5F", "#9966ff", "#ff9f40"];
    const darkModeColors = ["#414141", "#000000", "#363636", "#1c1c1c", "#8A2BE2", "#FFD700"];

  const chartData = {
    labels: Object.keys(genres),
    datasets: [
      {
        label: "Top Genres",
        data: Object.values(genres),
        backgroundColor: isDarkMode ? darkModeColors : lightModeColors,
        borderColor: isDarkMode ? "white" : "black", // White border in dark mode, black in light mode
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="p-4 bg-colors-customYellow-light dark:bg-gray-900 rounded-md ">
      <h3 className="text-4xl font-semibold mb-3 dark:text-white">Top Genres</h3>
      <Pie data={chartData} />
    </div>
  );
}
