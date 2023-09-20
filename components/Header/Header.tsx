import Image from "next/image";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="top-header-wrapper">
        <div className="header-top">
          <a href="/" className="logo"><Image src="/assets/Logo.svg" width={183} height={31} alt="Logo" /></a>
          <div className="header-btns">
            <div className="bell-btn header-btn">
              <Image src="/assets/Bell.svg" width={17} height={20} alt="Bell" />
            </div>
            <div className="cart-btn header-btn">
              <Image src="/assets/Cart.svg" width={22} height={19} alt="Cart" />
              <div className="cart-number">
                <span>3</span>
              </div>
            </div>
            <div className="profile-btn header-btn">
              <div className="profile-info">
                <Image
                  src="/assets/Profile.svg"
                  width={20}
                  height={20}
                  alt="Profile"
                />
                <span>kancha Co.</span>
              </div>
              <Image
                src="/assets/ChveronDown.svg"
                width={8}
                height={5}
                alt="Chevron Down"
              />
            </div>
            <div className="language-btn header-btn">
              <Image
                src="/assets/GeorgianFlag.svg"
                width={29}
                height={19}
                alt="Flag"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="nav-wrapper">
        <nav className="nav">
          <ul className="nav-list-left">
            <li>
              <a href="#" className="nav-link">
                დომენი
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                ტრანსფერი
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                ჰოსტინგი
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Gmail
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                ვებგვერდი
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                დომენის მარკეტი
              </a>
            </li>
          </ul>
          <ul className="nav-list-right">
            <li>
              <a href="#" className="nav-link">
                ჩვენს შესახებ
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                ფასები
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                ბლოგი
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                დახმარება
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
