interface Song {
  id: string;
  name: string;
  images: { url: string }[];
}

interface SongItemProps {
  song: Song;
}

export default function SongItem({ song }: SongItemProps) {
  const handleClick = () => {
    window.open(`https://open.spotify.com/track/${song.id}`, "_blank");
  };
  return (
    <li className="flex items-center gap-4 p-2 m-2 border-4 border-black rounded-md cursor-pointer bg-colors-customPink-light hover:bg-colors-customBlue-light dark:bg-colors-customPink-dark dark:hover:bg-colors-customBlue-dark"
    onClick={handleClick}>
      
        {song.images.length > 0 && (
          <img
            src={song.images[0].url}
            alt={song.name}
            className="w-12 h-12 rounded-full"
          />
        )}
        <p className="font-semibold">{song.name}</p>
     
    </li>
  );
}


// import { usePlayerStore } from "@/store/playerStore";

// interface Song {
//   id: string;
//   name: string;
//   images: { url: string }[];
//   uri: string;
// }

// interface SongItemProps {
//   song: Song;
// }

// export default function SongItem({ song }: SongItemProps) {
//   const setTrack = usePlayerStore((state) => state.setTrack); // ✅ Use `setTrack` instead
//   const togglePlay = usePlayerStore((state) => state.togglePlay);

//   const handleClick = () => {
//     // window.open(`https://open.spotify.com/track/${song.id}`, "_blank");
//     // console.log("Playing track:", song.uri);
//     // handlePlayTrack(song.uri);
//     togglePlay(true);
//     // console.log("Playing track:", song.uri);
//     // setTrack(song.uri); // ✅ This should work now
//     console.log("Song data:", song); // ✅ Check if `uri` exists
//     console.log("Playing track:", song.uri);
//     setTrack(song.uri);
//   };

//   return (
//     <li className="flex items-center gap-4 p-2 m-2 border-4 border-black rounded-md cursor-pointer bg-colors-customPink-light hover:bg-colors-customBlue-light dark:bg-colors-customPink-dark dark:hover:bg-colors-customBlue-dark"
//     onClick={handleClick}>
      
//         {song.images.length > 0 && (
//           <img
//             src={song.images[0].url}
//             alt={song.name}
//             className="w-12 h-12 rounded-full"
//           />
//         )}
//         <p className="font-semibold">{song.name}</p>
     
//     </li>
//   );
// }
