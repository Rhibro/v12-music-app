import DeviceUsageChart from "@/components/ui/charts/DeviceUsageChart";
import GenreChart from "@/components/ui/charts/GenreChart";
import useAccessStore from "@/store/store";
import axios from "axios";
import { useState, useEffect } from "react";

interface Artist {
  id: string;
  name: string;
  genres: string[];
}

interface Device {
  id: string;
  name: string;
}

export default function UserData() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [genres, setGenres] = useState<Record<string, number>>({});

  const accessToken = useAccessStore().accessToken;

  useEffect(() => {
    async function fetchData() {
      if (!accessToken) return;

      try {
        const artistResponse = await axios.get<{ items: Artist[] }>(
          "https://api.spotify.com/v1/me/top/artists?limit=5",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
       
        // 🎼 Fetch Top Artists for Genre Information
        const genreCount: Record<string, number> = {};
        artistResponse.data.items.forEach((artist) => {
          artist.genres.forEach((genre) => {
            genreCount[genre] = (genreCount[genre] || 0) + 1;
          });
        });
        setGenres(genreCount);


        // 📱 Fetch Device Usage
        const deviceResponse = await axios.get<{ devices: Device[] }>(
          "https://api.spotify.com/v1/me/player/devices",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        setDevices(deviceResponse.data.devices);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [accessToken]);

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col">
  
     <div className="rounded-md border-4 border-black dark:border-colors-customPink-dark bg-colors-customYellow-light dark:bg-colors-customYellow-dark m-4 p-4 lg:w-1/2 md:w-1/2 sm:w-full">
        {devices.length > 0 && <DeviceUsageChart devices={devices} />}
     </div>  
     <div className="rounded-md border-4 border-black dark:border-colors-customPink-dark bg-colors-customYellow-light dark:bg-colors-customYellow-dark m-4 p-4 lg:w-1/2 md:w-1/2 sm:w-full">
        {Object.keys(genres).length > 0 && <GenreChart genres={genres} />}
     </div> 
     
    </div>
  );
}
