import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart components
Chart.register(ArcElement, Tooltip, Legend);

interface Artist {
  id: string;
  name: string;
  minutesPlayed: number;
}

interface ListeningTimeChartProps {
  artists: Artist[];
}

export default function ListeningTimeChart({ artists }: ListeningTimeChartProps) {
  const chartData = {
    labels: artists.map((artist) => artist.name),
    datasets: [
      {
        label: "Minutes Played",
        data: artists.map((artist) => artist.minutesPlayed),
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-3">Listening Time per Artist</h3>
      <Pie data={chartData} />
    </div>
  );
}
