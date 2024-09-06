import { Link } from "react-router-dom";
import Icon from "../commons/Icon";

interface IAgencyProps {
  listAgency: {
    id: number;
    name: string;
    address: string;
  }[];
  classList: string;
  classItem: string;
  classLink: string;
  classOrdinalNumber: string;
  classTopContent: string;
}

const Agency = ({
  listAgency,
  classList,
  classItem,
  classLink,
  classOrdinalNumber,
  classTopContent,
}: IAgencyProps) => {
  return (
    <div className={classList}>
      {listAgency &&
        listAgency.map((item) => (
          <div key={item.id} className={classItem}>
            <div className={classTopContent}>
              <div className={classOrdinalNumber}>
                <span className="">{item.id}</span>
              </div>
              <p className="mb-2.5 text-center">{item.address}</p>
            </div>
            <Link to="/contact" className={classLink}>
              <Icon name="locationArrow" />
              <span className=""> Xem trên bản đồ</span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Agency;
