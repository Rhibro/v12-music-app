import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface GenreChartProps {
  genres: Record<string, number>; // Key: Genre, Value: Count
}

export default function GenreChart({ genres }: GenreChartProps) { // component that receives genres as a prop

    const [isDarkMode, setIsDarkMode] = useState(false); // state variable keeps track of whether dark mode is enabled

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
    const darkModeColors = ["#414141", "#000000", "#1e1e1e", "#2f2f2f", "#a8a8a8", "#898989"];

  const chartData = { // chart data and styles
    labels: Object.keys(genres),
    datasets: [
      {
        label: "Top Genres", // genre names from genres object.
        data: Object.values(genres), // genre counts from genres object.
        backgroundColor: isDarkMode ? darkModeColors : lightModeColors, // styles based on if dark mode is or is not enabled
        borderColor: isDarkMode ? "white" : "black", // White border in dark mode, black in light mode
        borderWidth: 3,
      },
    ],
  };

  // rendering the pie chart
  return (
    <div className="p-4 bg-colors-customYellow-light dark:bg-colors-customYellow-dark rounded-md ">
      <h3 className="text-4xl font-semibold mb-3 dark:text-white">Top Genres</h3>
      <Pie data={chartData} />
    </div>
  );
}

// Key Features

// Dynamic Theme Support: Automatically adapts to dark/light mode.
// Reactive Chart: Updates when genres prop changes.
// Performance Optimization: Uses MutationObserver to detect theme changes efficiently.