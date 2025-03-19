const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-top-read`;

export default function Login() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-8"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <h1 className="text-white text-center text-8xl">
          dara
          <span className="text-colors-customPink-light dark:text-colors-customPink-dark">.</span>
        </h1>
      </div>
      <div>
        <button
          className="border-black dark:border-white border-4 text-green px-8 py-4 bg-colors-customGreen-light dark:bg-colors-customGreen-dark hover:bg-colors-customPink-light dark:hover:bg-colors-customBlue-dark hover:text-white rounded-md text-3xl font-semibold"
          onClick={() => window.location.assign(AUTH_URL)}
        >
          Log in with Spotify
        </button>
      </div>
    </div>
  );
}
