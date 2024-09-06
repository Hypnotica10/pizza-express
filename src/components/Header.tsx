import { Link, NavLink, useNavigate } from "react-router-dom";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useOnClickOutSide } from "../hook/useOnClickOutSide";
import { menu } from "../data";
import { Icon, Image } from "../commons";

const Menu = ({
  menu,
  classList,
  classItem,
  classLink,
  navigateToMenu,
}: {
  menu: {
    id: number;
    path: string;
    tag: string;
  }[];
  classList: string;
  classItem: string;
  classLink: string;
  navigateToMenu: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <ul className={classList}>
      {menu &&
        menu.map((item) => (
          <li key={item.id} className={classItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                (isActive && item.id !== 2 ? "text-yellow " : "") +
                `${classLink}`
              }
              onClick={item.id === 2 ? navigateToMenu : undefined}
            >
              <span className="">{item.tag}</span>
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

const MobileMenu = ({
  menuActive,
  navigateToMenu,
}: {
  menuActive: boolean;
  navigateToMenu: MouseEventHandler<HTMLAnchorElement>;
}) => {
  return (
    <div
      className={`${
        menuActive ? "h-[330px]" : "h-0"
      } mobile-menu absolute bg-primary-400 w-full top-full left-0 overflow-hidden transition-all z-9999`}
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center mt-4">
          <span className="text-xs">Gọi điện ngay - Ship liền tay (24/7)</span>
          <a
            href="tel:02436888777"
            className="text-yellow flex items-center text-xl font-semibold"
          >
            <Icon name="phone" />
            <span>(024) 36.888.777</span>
          </a>
        </div>
        <Menu
          menu={menu}
          classList="uppercase font-semibold mt-2.5"
          classItem="hover:text-yellow transition-all [&:not(:last-child)]:border-b border-primary-500"
          classLink="leading-10 w-full h-full block"
          navigateToMenu={navigateToMenu}
        />
      </div>
    </div>
  );
};

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/");
    setTimeout(() => {
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleOpenMenu = () => {
    setMenuActive(!menuActive);
  };

  const onClickOutside = () => {
    setMenuActive(false);
  };

  useOnClickOutSide(ref, onClickOutside);

  useEffect(() => {
    const headerMenu = document.querySelector(".header-menu") as HTMLElement;
    let pos = window.scrollY;
    const handleOnScroll = () => {
      const newPos = window.scrollY;
      const header = document.querySelector("header") as HTMLElement;
      if (newPos >= header.scrollHeight) {
        if (newPos < pos) {
          headerMenu.classList.add("animate-fadeInDown", "header-fixed");
          headerMenu.classList.remove("animate-fadeOutUp");
        } else {
          headerMenu.classList.remove("animate-fadeInDown");
          headerMenu.classList.add("animate-fadeOutUp");
        }
      } else {
        headerMenu.classList.remove(
          "header-fixed",
          "animate-fadeOutUp",
          "animate-fadeInDown"
        );
      }
      pos = newPos;
    };

    window.addEventListener("scroll", handleOnScroll);

    return () => window.removeEventListener("scroll", handleOnScroll);
  }, []);
  return (
    <header className="text-white relative">
      <div className="header-top bg-primary-500">
        <div className="max-w-[1470px] mx-auto lg:px-4 pl-4 flex items-center">
          <div className="logo lg:px-4 px-0 md:w-auto w-44">
            <Link to="/">
              <Image imageName="logo" />
            </Link>
          </div>
          <p className="desc mt-1 px-4 lg:block hidden">
            Pizza ngon - Giá rẻ - Vận chuyển tận nhà
          </p>
          <div className="cart lg:w-52 py-2.5 lg:block flex bg-primary-600 ml-auto">
            <Link to="/cart" className="flex items-center">
              <div className="cart-icon lg:text-2xl text-3xl cursor-pointer px-2.5 relative">
                <Icon name="shoppingBasket" />
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
                <Icon name="arrowDropDown" />
              </div>
            </Link>
            <div
              className="toggle-menu lg:hidden block text-3xl px-2.5"
              onClick={handleOpenMenu}
              ref={ref}
            >
              <Icon name="menuLine" />
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
                <Icon name="phone" />
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
