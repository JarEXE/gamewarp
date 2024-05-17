import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { useEffect, useState } from "react";

function CatalogueItem({ game }) {
  const dispatch = useDispatch();

  const {
    id,
    name,
    unitPrice,
    soldOut,
    imageUrl,
    genres,
    screenshots,
    platforms,
  } = game;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      gameId: id,
      platforms,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  const [isHovered, setIsHovered] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  useEffect(() => {
    let interval;

    if (isHovered && screenshots?.length > 0) {
      interval = setInterval(() => {
        setCurrentScreenshot(
          (prevScreenshot) => (prevScreenshot + 1) % screenshots.length,
        );
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isHovered, screenshots?.length]);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setCurrentScreenshot(0);
  }

  return (
    <li
      className="flex items-center gap-4 py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`h-[120px] min-w-[200px] max-w-[200px] shadow-2xl shadow-black ${soldOut ? "opacity-70 grayscale" : isHovered && screenshots ? "opacity-0" : ""}`}
      />

      {screenshots &&
        screenshots.map((screenshot, index) => (
          <img
            key={index}
            src={screenshot}
            alt={name}
            className="h-[120px] min-w-[200px] max-w-[200px] shadow-2xl shadow-black"
            style={{
              opacity: `${index === currentScreenshot && isHovered && !soldOut ? "1" : "0"}`,
              position: "absolute",
              // transition: "opacity 0.2s ease-in-out",
            }}
          />
        ))}

      <div className="flex grow flex-col pt-0.5">
        <p className="font-bold">{name}</p>
        <p className="mb-1 hidden text-sm text-stone-700 sm:block">
          {!soldOut &&
            platforms?.map((platform) => platform.platform.name).join(", ")}
        </p>
        <p className="mb-1 block text-sm text-stone-700 sm:hidden">
          {!soldOut && platforms.length > 1
            ? "Various Platforms"
            : soldOut
              ? ""
              : platforms?.map((platform) => platform.platform.name)}
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          {genres.join(", ")}
        </p>

        <div className="mt-auto items-center justify-between sm:flex">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                gameId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem gameId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default CatalogueItem;
