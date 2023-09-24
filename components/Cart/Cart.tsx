import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import "./Cart.scss";

type Props = {
  cartShowerHandler: () => void;
};

const Cart: React.FC<Props> = ({ cartShowerHandler }) => {
  const cart = useSelector((state: any) => state.cart);

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
                <span>{domain.price}</span>
                <h5>{(domain.price / 3).toFixed(1)}</h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
