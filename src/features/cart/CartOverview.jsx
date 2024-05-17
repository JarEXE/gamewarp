import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const location = useLocation();

  if (!totalCartQuantity) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200">
      <div className="flex items-center justify-between">
        <p className="space-x-4 font-semibold text-stone-300">
          <span>{totalCartQuantity} game(s)</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        {location.pathname !== "/cart" && (
          <Link to="/cart">Open cart &rarr;</Link>
        )}
      </div>
    </div>
  );
}

export default CartOverview;
