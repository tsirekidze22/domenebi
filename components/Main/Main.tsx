import React from "react";
import "./Main.scss";
import Filters from "../FIlters/Filters";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import { setSearchText } from "../../store/searchSlice";
import { setSymbolRange } from "../../store/symbolsSlice";

const domainsArr = [
  {
    domainName: "TKT.ge",
    price: 40000,
    domainSuffix: ".ge",
    category: "კომერცია",
  },
  {
    domainName: "SS.com.ge",
    price: 50000,
    domainSuffix: ".com.ge",
    category: "უძრავი ქონება",
  },
  {
    domainName: "Auto.net.ge",
    price: 30000,
    domainSuffix: ".net.ge",
    category: "ავტო",
  },
  {
    domainName: "wikipedia.org.ge",
    price: 20000,
    domainSuffix: ".org.ge",
    category: "განათლება",
  },
  {
    domainName: "Games.com.ge",
    price: 10000,
    domainSuffix: ".com.ge",
    category: "თამაშები",
  },
  {
    domainName: "Naec.edu.ge",
    price: 40000,
    domainSuffix: ".edu.ge",
    category: "განათლება",
  },
  {
    domainName: "Insagram.com.ge",
    price: 50000,
    domainSuffix: ".com.ge",
    category: "მედია",
  },
  {
    domainName: "GreenSchool.school.ge",
    price: 30000,
    domainSuffix: ".school.ge",
    category: "განათლება",
  },
];

const Main = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const filter = useSelector((state: any) => state.filter);
  const search = useSelector((state: any) => state.search);
  const symbols = useSelector((state: any) => state.symbols);
  const selectedCategories = useSelector(
    (state: any) => state.categories.selectedCategories
  );
  const selectedSuffixes = useSelector((state: any) => state.domainSuffix);

  const handleAddToCart = (domain: any) => {
    dispatch(addToCart(domain));
  };

  const handleSearchInputChange = (searchText: any) => {
    dispatch(setSearchText(searchText));
  };

  const handleSymbolRangeChange = (symbolRange: any) => {
    dispatch(setSymbolRange(symbolRange));
  };

  const filteredDomains = domainsArr.filter(
    (domain) =>
      domain.price >= filter.priceRange[0] &&
      domain.price <= filter.priceRange[1] &&
      domain.domainName
        .toLowerCase()
        .includes(search.searchText.toLowerCase()) &&
      domain.domainName.length >= symbols.symbolRange[0] &&
      domain.domainName.length <= symbols.symbolRange[1] &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(domain.category)) &&
      (selectedSuffixes.length === 0 ||
        selectedSuffixes.includes(domain.domainSuffix))
  );
  return (
    <>
      <main className="main">
        <div className="main-content">
          <div className="banner">
            <h1 className="banner-title">გაყიდე და იყიდე დომენი მარტივად</h1>
          </div>

          <div className="domains-section">
            <Filters />
            <div className="domain-content">
              <div className="domains-content-header">
                <div className="domains-sort-section">
                  <span>სორტირება:</span>
                  <div className="sort-by-date">დამატების თარიღით</div>
                  <div className="sort-by-expiration">ვადის ამოწურვით</div>
                  <div className="sort-by-price">ფასით</div>
                  <div className="sort-by-alphabet">ანბანით</div>
                </div>
                <a href="#" className="how-to-sell">
                  როგორ გავყიდოთ დომენი?
                </a>
              </div>
              {filteredDomains.length > 0 ? (
                <ul className="domains-list">
                  {filteredDomains.map((domain) => (
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
                        {cart.some(
                          (item: any) => item.domainName === domain.domainName
                        ) ? (
                          <div className="in-cart">
                            <Image
                              src={"/assets/RoundedChecked.svg"}
                              width={18}
                              height={18}
                              alt="checked"
                            />
                            <span>კალათაშია</span>
                          </div>
                        ) : (
                          <>
                            <div>
                              <span>{domain.price} ₾</span>
                              <h5>{(domain.price / 2.6).toFixed(1)} $</h5>
                            </div>
                            <div
                              className="cart"
                              onClick={() => handleAddToCart(domain)}
                            >
                              <Image
                                src={"/assets/CartWhite.svg"}
                                width={20}
                                height={17}
                                alt="cart"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-result">
                  <Image
                    src={"/assets/NoResult.svg"}
                    width={195}
                    height={168}
                    alt="no result"
                  />
                  <div className="no-result-text">
                    <h3 className="title">დომენი ვერ მოძებნა</h3>
                    <p className="description">
                      მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ
                      მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <main className="main-mobile">
        <div className="main-content">
          <div className="banner">
            <h1 className="banner-title">გაყიდე და იყიდე დომენი მარტივად</h1>
          </div>

          <div className="domains-section">
            {/*<Filters />*/}
            <div className="domain-content">
              {/*<div className="domains-content-header">
                <div className="domains-sort-section">
                  <span>სორტირება:</span>
                  <div className="sort-by-date">დამატების თარიღით</div>
                  <div className="sort-by-expiration">ვადის ამოწურვით</div>
                  <div className="sort-by-price">ფასით</div>
                  <div className="sort-by-alphabet">ანბანით</div>
                </div>
                <a href="#" className="how-to-sell">
                  როგორ გავყიდოთ დომენი?
                </a>
              </div>*/}
              {filteredDomains.length > 0 ? (
                <ul className="domains-list">
                  {filteredDomains.map((domain) => (
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
                        {cart.some(
                          (item: any) => item.domainName === domain.domainName
                        ) ? (
                          <div className="in-cart">
                            <Image
                              src={"/assets/RoundedChecked.svg"}
                              width={18}
                              height={18}
                              alt="checked"
                            />
                            <span>კალათაშია</span>
                          </div>
                        ) : (
                          <>
                            <div>
                              <span>{domain.price} ₾</span>
                              <h5>{(domain.price / 2.6).toFixed(1)} $</h5>
                            </div>
                            <div
                              className="cart"
                              onClick={() => handleAddToCart(domain)}
                            >
                              <Image
                                src={"/assets/CartWhite.svg"}
                                width={20}
                                height={17}
                                alt="cart"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-result">
                  <Image
                    src={"/assets/NoResult.svg"}
                    width={195}
                    height={168}
                    alt="no result"
                  />
                  <div className="no-result-text">
                    <h3 className="title">დომენი ვერ მოძებნა</h3>
                    <p className="description">
                      მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ
                      მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
