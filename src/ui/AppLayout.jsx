import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import Loader from "./Loader";
import { useSelector } from "react-redux";

export default function AppLayout() {
  const navigation = useNavigation();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />
      <div
        className={`position: relative ${totalCartQuantity && "mb-[12%]"} overflow-y-auto overflow-x-hidden sm:mb-0 ${totalCartQuantity && "sm:pb-[10%]"}`}
      >
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
