import { Link } from "react-router-dom";
import { Agency } from "../components";
import { listAgency } from "../data";
import { Icon, Image } from "../commons";

const Footer = () => {
  return (
    <footer className="text-white bg-footer py-12">
      <div className="container">
        <div className="logo flex items-center justify-center mb-8">
          <Link to="/">
            <Icon name="logo" />
          </Link>
        </div>
        <h4 className="company-tile text-center font-semibold text-yellow mb-2 uppercase text-base">
          CÔNG TY TNHH PIZZA EXPRESS VIỆT NAM
        </h4>
        <div className="pb-4">
          <p className="text-center mb-1.5">
            <span className="">
              Để đặt bánh pizza, vui lòng liên hệ tổng đài số:{" "}
            </span>
            <a href="tel:02436888777" className="">
              (024) 36.888.777
            </a>
          </p>
          <p className="text-center mb-1.5">
            <span className="">
              Để phản ánh chất lượng dịch vụ, vui lòng gọi số:{" "}
            </span>
            <a href="tel:0977128833" className="">
              0977.128.833
            </a>
          </p>
          <p className="text-center mb-1.5">
            <span className="">Email: </span>
            <a href="mailto:lienhepizzaexpress@gmail.com" className="">
              lienhepizzaexpress@gmail.com
            </a>
          </p>
          <p className="text-center mb-1.5">
            <Link to="/policy">Chính sách bảo mật thông tin cá nhân</Link>
          </p>
          <p className="text-center mb-1.5">
            <Link to="/policy">Chính sách đổi/trả sản phẩm và hoàn tiền</Link>
          </p>
          <p className="text-center mb-1.5">
            <Link to="/policy">Chính sách thanh toán</Link>
          </p>
        </div>
        <div className="flex items-center justify-center mb-8 mt-2.5">
          <Image imageName="wave" />
        </div>

        <Agency
          listAgency={listAgency}
          classList="address-list flex md:flex-row flex-col"
          classItem="address-item md:w-1/4 flex flex-col items-center px-4 justify-between md:[&:not(:last-child)]:mb-0 [&:not(:last-child)]:mb-6"
          classLink="text-yellow flex items-center gap-1.5"
          classTopContent="flex flex-col items-center"
          classOrdinalNumber="w-12 h-12 bg-primary-400 border-2 border-white rounded-full text-xl flex items-center justify-center font-semibold mb-4"
        />

        <div className="">
          <div className="flex items-center justify-center mt-8 mb-2.5">
            <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=38545">
              <Image imageName="certificated" />
            </a>
          </div>
          <p className="text-center even:leading-7 text-xs">
            <span>Công ty TNHH Pizza Express Việt Nam Số ĐKKD: 0106675108</span>
            <br />
            <span>
              Địa Chỉ: Số 352 Đường Bưởi, P.Vĩnh Phúc, Q.Ba Đình, TP.Hà Nội
            </span>
            <br />
            <span>Số điện thoại: 02436888777</span>
            <br />
            <a href="mailto:lienhepizzaexpress@gmail.com">
              Email: lienhepizzaexpress@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
