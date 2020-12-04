import * as React from "react";
import moment from "moment";
import Controls from "./Controls";
import DropDownCard from "./DropDownCard";

export interface ListDataProps {
  items: any;
}

const ListData: React.SFC<ListDataProps> = ({ items }: ListDataProps) => {
    const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState([] as any);
  const [sortType, setSortType] = React.useState({
    direction: "ascending",
  } as any);

  const handleClick = () => {
    let filteredItems = items.filter((item: any) => {
        if (selectedItem.indexOf(item.launch_year) === -1) {
            return selectedItem.push(item.launch_year)
        }
    });
    setSelectedItem(filteredItems);
    setOpen(!open);
  }

  const sortedData = () => {
    if (sortType !== {}) {
      items.sort((a: any, b: any) => {
        if (a[sortType.key] < b[sortType.key]) {
          return sortType.direction === "ascending" ? -1 : 1;
        }
        if (a[sortType.key] > b[sortType.key]) {
          return sortType.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
  };

  const requestSort = (key: any) => {
    let direction = "ascending";
    if (sortType.direction === "ascending") {
      direction = "descending";
    }
    setSortType({ key, direction });
  };

  sortedData();

  return (
    <React.Fragment>
      <div className="section-content__controls">
        <button className="section-content__button section-content__button--left" onClick={handleClick}>
          Filter by Year
        </button>
        {open && <DropDownCard data={selectedItem} />}
        <Controls
          className="section-content__button section-content__button--right"
          type={sortType}
          onClick={() => requestSort("launch_date_utc")}
        />
      </div>
      <ul className="section-content__list">
        {items.map((item: any, index: any) => (
          <li className="section-content__list-item" key={index}>
            <div className="section-content__list-id">{`#${item.flight_number}`}</div>
            <div className="section-content__list-name">
              {item.mission_name}
            </div>
            <div className="section-content__list-data">
              <div className="section-content__list-data section-content__list-data--date">
                {moment(item.launch_date_utc).format("Do MMM YYYY")}
              </div>
              <div className="section-content__list-data section-content__list-data--name">
                {item.rocket.rocket_name}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListData;
