import { useLoaderData } from "react-router-dom";
import { getCatalogue } from "../../services/apiWarehouse";
import CatalogueItem from "./CatalogueItem";

function Catalogue() {
  const featuredGames = useLoaderData();

  return (
    <>
      <p className="mb-5 mt-5 text-center text-xl font-bold">Our Catalogue</p>
      <ul className="divide-y divide-stone-200 px-2">
        {featuredGames.map((game) => (
          <CatalogueItem game={game} key={game.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const catalogue = await getCatalogue();
  return catalogue;
}

export default Catalogue;
