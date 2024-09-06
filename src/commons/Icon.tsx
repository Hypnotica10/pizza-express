import { FaLocationArrow } from "react-icons/fa";
import { MdArrowDropDown, MdOutlinePhoneIphone } from "react-icons/md";
import { RiMenuLine, RiShoppingBasket2Line } from "react-icons/ri";

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case "shoppingBasket": {
      return <RiShoppingBasket2Line />;
    }
    case "arrowDropDown": {
      return <MdArrowDropDown />;
    }
    case "menuLine": {
      return <RiMenuLine />;
    }
    case "phone": {
      return <MdOutlinePhoneIphone />;
    }
    case "locationArrow": {
      return <FaLocationArrow />;
    }
  }
};

export default Icon;
