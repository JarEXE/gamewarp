import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="z-[99] flex items-center  justify-between bg-purple-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest text-stone-900">
        Game Warp Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}
