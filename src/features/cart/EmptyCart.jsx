import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/catalogue">&larr; Back to catalogue</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some games 👾🚀
      </p>
    </div>
  );
}

export default EmptyCart;
