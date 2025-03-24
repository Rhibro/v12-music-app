import DeviceUsageChart from "@/components/ui/charts/DeviceUsageChart";
import GenreChart from "@/components/ui/charts/GenreChart";
import PodcastSongChart from "@/components/ui/charts/PodcastSongChart";
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

interface Track {
  id: string;
  name: string;
  valence: number;
}

export default function UserData() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [genres, setGenres] = useState<Record<string, number>>({});
  const [podcastSongData, setPodcastSongData] = useState<Record<string, number>>({});

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

        // Fetch Podcasts and Songs
        const tracksResponse = await axios.get<{ items: Track[] }>(
          "https://api.spotify.com/v1/me/top/tracks?limit=10",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        
        const podcastsResponse = await axios.get<{ items: any[] }>(
          "https://api.spotify.com/v1/me/shows",
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        setPodcastSongData({
          Songs: tracksResponse.data.items.length,
          Podcasts: podcastsResponse.data.items.length,
        });


      } catch (error) {
        console.error("Error fetching data:", error);
      } 
     
    }

    fetchData();
  }, [accessToken]);

  return (
  
    <div className="flex align-middle justify-center items-center lg:flex-row  md:flex-col sm:flex-col flex-col">
  
     <div className="
      rounded-md 
      border-4 
      border-black 
      dark:border-colors-customPink-dark 
      bg-colors-customYellow-light 
      dark:bg-colors-customYellow-dark 
      m-4 p-4 
      lg:w-1/3 md:w-3/4 sm:w-full">
        {devices.length > 0 && <DeviceUsageChart devices={devices} />}
     </div> 

     <div className="
      rounded-md 
      border-4 
      border-black 
      dark:border-colors-customPink-dark 
      bg-colors-customYellow-light 
      dark:bg-colors-customYellow-dark 
      m-4 p-4 
      lg:w-1/3 md:w-3/4  sm:w-full">
        {Object.keys(genres).length > 0 && <GenreChart genres={genres} />}
     </div>

     <div className="
      rounded-md 
      border-4 
      border-black 
      dark:border-colors-customPink-dark 
      bg-colors-customYellow-light 
      dark:bg-colors-customYellow-dark 
      m-4 p-4 
      lg:w-1/3 md:w-3/4 sm:w-full">
        {Object.keys(podcastSongData).length > 0 && <PodcastSongChart data={podcastSongData} />}
     </div>

    </div>

  );
}
