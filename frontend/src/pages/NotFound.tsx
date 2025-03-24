import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <main className=" w-screen flex items-center justify-center p-4">
      <div className="bg-colors-customPink-light dark:bg-colors-customGreen-dark rounded-3xl p-8 w-full max-w-md border-4 border-black dark:border-colors-customYellow-dark">
        <h3 className="bg-colors-customPink-light dark:bg-colors-customGreen-dark text-center text-[140%] font-bold mb-6 text-black">
          Ops! Something went wrong. <br></br> Try again later.
        </h3>
        <p className="text-center text-black">
          Go back to{" "}
          <NavLink to="/" className="font-bold text-white hover:underline">
            homepage
          </NavLink>
        </p>
      </div>
    </main>
  );
}
