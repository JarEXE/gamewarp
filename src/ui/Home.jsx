import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import Carousel from "../ui/Carousel";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <>
      <Carousel />
      <div className="z-[99] my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-xl font-semibold text-slate-300 md:text-3xl">
          Our humble catalogue of games.
          <br />
          <span className="text-purple-400">
            Physical discs and cartridges shipped from our warehouse, directly
            to you.
          </span>
        </h1>

        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/catalogue" type="primary">
            Continue ordering
          </Button>
        )}
      </div>
      <div className="z-99 absolute bottom-5 left-0 right-0 text-center">
        <p className="text-xs text-slate-300">
          Game images and screenshots retrieved via{" "}
          <a href="https://rawg.io/apidocs" target="_blank" rel="noreferrer">
            RAWG IO
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
