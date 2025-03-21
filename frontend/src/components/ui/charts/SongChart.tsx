import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Title } from "chart.js";

// Register chart components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

interface Song {
  id: string;
  name: string;
  popularity: number;
  artists: { name: string }[];
}

interface SongChartProps {
  songs: Song[];
}

export default function SongChart({ songs }: SongChartProps) {
  const chartData = {
    labels: songs.map((song) => `${song.name} (${song.artists.map(a => a.name).join(", ")})`),
    datasets: [
      {
        label: "Popularity",
        data: songs.map((song) => song.popularity),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color
      },
    ],
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-3">Top Songs Popularity</h3>
      <Bar data={chartData} />
    </div>
  );
}
