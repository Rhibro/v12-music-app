import { FC } from "react";
import PlayerComponent from "../PlayerComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import timeConverter from "@/helpers/timeConverter";
import { usePlayerStore } from "@/store/playerStore";

type Props = {
  artist: {
    name: string;
    popularity: number;
    external_urls: string;
    image: string;
    topTracks: {
      album: {
        image: string;
        name: string;
        release_date: string;
      };
      artists: { name: string }[];
      duration_ms: number;
      name: string;
      uri: string;
    }[];
  };
  handlePlayTrack: (uri: string) => void; // 🔹 Ta emot funktionen som en prop
};

const ArtistCard: FC<Props> = ({ artist, handlePlayTrack }) => {
  const togglePlay = usePlayerStore((state) => state.togglePlay);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  return (
    <>
    <section className="max-w-4xl m-auto sm:m-1 md:m-1 lg:m-auto">
      <Card className="rounded-md border-4 border-black dark:border-colors-customPink-dark bg-colors-customYellow-light dark:bg-colors-customYellow-dark">
      <CardContent className="flex justify-center ">
          <img src={artist.image} alt="artist image" className="rounded-full border-4 border-black lg:h-96 lg:w-96 md:h-96 md:w-96 sm:h-9 sm:w-9 mt-8"/>
        </CardContent>
        <CardHeader>
          <CardTitle className="text-6xl font-bold">{artist.name}</CardTitle>
          <CardDescription className="text-xl text-black dark:text-white">Popularity: {artist.popularity}</CardDescription>
        </CardHeader>
        {/* <CardContent className="flex justify-center">
          <img src={artist.image} alt="artist image" className="rounded-full border-4 border-black w-48 h-48"/>
        </CardContent> */}

        <CardContent>
          <article className="flex flex-col gap-3 justify-center items-center  overflow-y-auto">
            {artist.topTracks.map((track) => (
              <Card
                onClick={() => {
                  console.log("play");
                  handlePlayTrack(track.uri);
                  console.log(isPlaying);
                  togglePlay(true);
                  console.log(isPlaying);
                }}
                className=" cursor-pointer hover:bg-colors-customGreen-light dark:hover:bg-colors-customBlue-dark rounded-md border-4 border-black text-start flex-wrap flex md:w-4/5 lg:w-4/5 sm:w-4/5 bg-colors-customPink-light dark:bg-colors-customPink-dark ">
                <CardHeader className="flex flex-col gap-1 justify-center items-center">
                  <img src={track.album.image} alt="Album image" className="h-20 w-20" />
                </CardHeader>
                <CardContent className="text-black dark:text-white flex flex-col gap-1 justify-center items-start">
                <CardTitle className="text-lg">{track.name}</CardTitle>
                  <CardDescription className="text-black dark:text-white font-semibold">
                    Album: {track.album.name}
                  </CardDescription>
                {/* <CardDescription className="text-blackfont-semibold hover:underline ">
                  <a href={track.uri}>Listen on Spotify</a>
                </CardDescription> */}
                </CardContent>
              </Card>
            ))}
          </article>
        </CardContent>
      </Card>
    </section>
    <PlayerComponent />
    </>
  );
};

export default ArtistCard;
