import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { removeFromCart } from "../../store/cartSlice";
import "./Cart.scss";

type Props = {
  cartShowerHandler: () => void;
};

const Cart: React.FC<Props> = ({ cartShowerHandler }) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch(); // Add useDispatch hook

  const handleRemoveFromCart = (domainName: string) => {
    dispatch(removeFromCart(domainName));
  };
  console.log(cart);
  return (
    <div className="cart-modal">
      <ul className="domains-list">
        <div className="close-btn">
          <Image
            src="/assets/Close.svg"
            width={24}
            height={24}
            alt={"close"}
            onClick={cartShowerHandler}
          />
        </div>

        {cart.length === 0 ? (
          <div className="no-result">
            <Image
              src={"/assets/NoResult.svg"}
              width={195}
              height={168}
              alt="no result"
            />
            <div className="no-result-text">
              <h3 className="title">კალათა ცარიელია</h3>
            </div>
          </div>
        ) : (
          <>
            {cart.map((domain: any) => (
              <li className="domain-item" key={domain.domainName}>
                <div className="domain-name">
                  <Image
                    src={"/assets/ArrowDown.svg"}
                    width={36}
                    height={36}
                    alt="arrow down"
                    className="arrow-down"
                  />
                  <span>{domain.domainName}</span>
                </div>

                <div className="domain-price">
                  <div>
                    <span>{domain.price} ₾</span>
                    <h5>{(domain.price / 2.6).toFixed(1)} $</h5>
                  </div>
                </div>

                <Image
                  src={"/assets/Delete.svg"}
                  width={24}
                  height={24}
                  alt="Delete"
                  className="delete-btn"
                  onClick={() => handleRemoveFromCart(domain.domainName)}
                />
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default Cart;
