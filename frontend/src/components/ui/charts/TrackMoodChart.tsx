import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface MoodChartProps {
  moodDistribution: Record<string, number>; // {"Happy": 5, "Sad": 3, "Energetic": 2}
}

export default function TrackMoodChart({ moodDistribution }: MoodChartProps) {
  const chartData = {
    labels: Object.keys(moodDistribution),
    datasets: [
      {
        label: "Mood Distribution",
        data: Object.values(moodDistribution),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-3">Track Mood Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
}
