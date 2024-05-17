import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById, updateSelectedPlatforms } from "./cartSlice";
import { useEffect, useState } from "react";

function CartItem({ item }) {
  const { gameId, platforms, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(gameId));
  const dispatch = useDispatch();
  const [previousQuantity, setPreviousQuantity] = useState(currentQuantity);

  const initialSelectedValues = currentQuantity
    ? Array.from({ length: currentQuantity }, () => platforms[0].platform.name)
    : [];

  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  const handleRadioChange = (groupIndex, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[groupIndex] = value;
    setSelectedValues(updatedValues);
    dispatch(updateSelectedPlatforms({ gameId, updatedValues }));
  };

  useEffect(() => {
    if (currentQuantity < previousQuantity) {
      setSelectedValues((prevSelectedValues) => {
        let newSelectedValues = prevSelectedValues.slice(0, -1);
        return newSelectedValues;
      });

      setPreviousQuantity((prevPreviousQuantity) => prevPreviousQuantity - 1);
    }

    if (currentQuantity > previousQuantity) {
      setSelectedValues((prevSelectedValues) => {
        let newSelectedValues = [
          ...prevSelectedValues,
          platforms[0].platform.name,
        ];
        return newSelectedValues;
      });

      setPreviousQuantity((prevPreviousQuantity) => prevPreviousQuantity + 1);
    }
  }, [currentQuantity, previousQuantity, platforms]);

  return (
    <>
      <li className="sm: mb-3 mt-5 py-3 sm:flex sm:justify-between">
        <div className="flex w-[70%] flex-col">
          <p className="mb-1 font-bold sm:mb-0">
            {quantity}&times; {name}
          </p>
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        </div>

        <div className="flex w-[30%] flex-col sm:gap-6">
          <div className="flex flex-row items-end gap-6 sm:flex sm:flex-auto sm:justify-end">
            <UpdateItemQuantity
              gameId={gameId}
              currentQuantity={currentQuantity}
              selectedPlatforms={selectedValues}
            />
            <DeleteItem gameId={gameId} />
          </div>
        </div>
      </li>
      <div className="flex flex-col gap-5 border-b-4 border-b-stone-300">
        <p className="text-md text-center italic text-stone-500 underline">
          Select Platform{currentQuantity > 1 ? "s" : ""} for{" "}
          <strong>{name}</strong>
        </p>
        {Array.from({ length: currentQuantity }, (_, index) => (
          <div
            id={index}
            className="mb-5 flex flex-col items-start"
            key={index}
          >
            {platforms?.map((platform, platformIndex) => (
              <label className="mr-5" key={platformIndex}>
                <input
                  type="radio"
                  value={platform.platform.name}
                  checked={selectedValues[index] === platform.platform.name}
                  onChange={() =>
                    handleRadioChange(index, platform.platform.name)
                  }
                />
                &nbsp;{platform.platform.name}
              </label>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default CartItem;
