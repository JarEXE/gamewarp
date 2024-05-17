// Test ID: 11

import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";
import {
  // calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiWarehouse";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") {
        fetcher.load("/catalogue");
      }
    },
    [fetcher],
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the warehouse staff
  const {
    id,
    // status,
    priority,
    // priorityPrice,
    // orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  if (id < 11) {
    throw new Error("That order either does not exist or cannot be fetched!");
  }

  const currentDate = new Date();

  const orderPrice = cart?.reduce((acc, item) => acc + item.totalPrice, 0);
  let priorityPrice;
  if (priority) {
    priorityPrice = orderPrice * 0.2;
  } else {
    priorityPrice = 0.0;
  }

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          {/* <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            {status} order
          </span> */}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">
          {currentDate < estimatedDelivery
            ? `Order is in warehouse or in transit. The status of this order will be updated if your product arrives before the estimated date of arrival.`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery:{" "}
          {priority
            ? "within 1 day"
            : `any time between now and
          ${formatDate(estimatedDelivery)}`}
          )
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.gameId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price game{cart.length > 1 ? "s" : ""}: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>

        {!priority && <UpdateOrder order={order} />}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
