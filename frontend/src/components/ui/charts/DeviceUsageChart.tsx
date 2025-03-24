import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface Device {
  id: string;
  name: string;
}

interface DeviceUsageChartProps {
  devices: Device[];
}

export default function DeviceUsageChart({ devices }: DeviceUsageChartProps) {
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

  const deviceCount = devices.reduce((acc: Record<string, number>, device) => {
    acc[device.name] = (acc[device.name] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(deviceCount),
    datasets: [
      {
        label: "Usage",
        data: Object.values(deviceCount),
        backgroundColor: isDarkMode ? darkModeColors : lightModeColors,
        borderColor: isDarkMode ? "white" : "black", // White border in dark mode, black in light mode
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="p-4 bg-colors-customYellow-light dark:bg-colors-customYellow-dark  rounded-md">
      <h3 className="text-4xl dark:text-white font-semibold mb-3">Device Usage</h3>
      <Pie data={chartData} />
    </div>
  );
}
