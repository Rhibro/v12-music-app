import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface PodcastSongChartProps {
  data: Record<string, number>; // Example: { Songs: 30, Podcasts: 10 }
}

export default function PodcastSongChart({ data }: PodcastSongChartProps) {
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

  const lightModeColors = ["#3669EE", "#EE36C5"]; // Songs (Blue) / Podcasts (Pink)
  const darkModeColors = ["#1c1c1c", "#000000"]; // Dark Mode Colours

  const chartData = { // chart data and styles
    labels: Object.keys(data),
    datasets: [
      {
        label: "Listening Time",
        data: Object.values(data),
        backgroundColor: isDarkMode ? darkModeColors : lightModeColors,
        borderColor: isDarkMode ? "white" : "black", // White border in dark mode, black in light mode
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="p-4 bg-colors-customYellow-light dark:bg-colors-customYellow-dark rounded-md">
      <h3 className="text-4xl font-semibold mb-3 dark:text-white">Podcast vs. Song</h3>
      <Pie data={chartData} />
    </div>
  );
}
