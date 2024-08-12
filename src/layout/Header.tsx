import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white relative">
      <div className="header-top bg-primary-500">
        <div className="max-w-[1470px] mx-auto lg:px-4 pl-4 flex items-center">
          <div className="logo lg:px-4 px-0 md:w-auto w-44">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <p className="desc mt-1 px-4 lg:block hidden">
            Pizza ngon - Giá rẻ - Vận chuyển tận nhà
          </p>
          <div className="cart lg:w-52 py-2.5 lg:block flex bg-primary-600 ml-auto">
            <Link to="/cart" className="flex items-center">
              <div className="cart-icon lg:text-2xl text-3xl cursor-pointer px-2.5 relative">
                <RiShoppingBasket2Line />
                <span className="absolute text-sm text-yellow top-0 right-0 -translate-x-1 -translate-y-1.5 font-semibold lg:hidden block">
                  0
                </span>
              </div>
              <div className="cart-info lg:flex flex-col hidden">
                <span className="text-xs">Giỏ hàng</span>
                <span className="text-yellow font-semibold">
                  <span className="pr-1 border-r-2 border-yellow">0</span>
                  <span className="pl-1">
                    0<span className="ml-1">đ</span>
                  </span>
                </span>
              </div>
              <div className="text-xl text-yellow ml-auto pr-1.5 lg:block hidden">
                <MdArrowDropDown />
              </div>
            </Link>
            <div
              className="toggle-menu lg:hidden block text-3xl px-2.5"
              onClick={handleOpenMenu}
              ref={ref}
            >
              <RiMenuLine />
            </div>
          </div>
        </div>
        <div className="header-menu bg-primary-400 lg:block hidden">
          <div className="container flex">
            <Menu
              menu={menu}
              classList="uppercase font-semibold flex flex-grow"
              classItem="w-1/6 text-center hover:text-yellow transition-all [&:not(:last-child)]:border-r border-primary-500"
              classLink="leading-[80px] w-full h-full block"
              navigateToMenu={navigateToMenu}
            />
            <div className="w-52 flex flex-col items-center justify-center">
              <span className="text-xs">
                Gọi điện ngay - Ship liền tay (24/7)
              </span>
              <a
                href="tel:02436888777"
                className="text-yellow flex items-center text-xl font-semibold"
              >
                <MdOutlinePhoneIphone />
                <span>(024) 36.888.777</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu menuActive={menuActive} navigateToMenu={navigateToMenu} />
    </header>
  );
};

export default Header;
