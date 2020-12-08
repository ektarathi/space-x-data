import * as React from "react";
import Controls from "./Controls";
import LaunchDetails from './LaunchDetails';
import SearchForm from './Search';

export interface ListDataProps {
  items: any;
}

const ListData: React.SFC<ListDataProps> = ({ items }: ListDataProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState([] as any);
  const [filteredData, setFilteredData] = React.useState([] as any);
  const [sortType, setSortType] = React.useState({
    direction: "ascending",
  } as any);

  const handleClick = () => {
    setOpen(!open);
  };

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
        <button
          className="section-content__button section-content__button--left"
          onClick={handleClick}
        >
          Filter by Year
        </button>
        <Controls
          className="section-content__button section-content__button--right"
          type={sortType}
          onClick={() => requestSort("launch_date_utc")}
        />
      </div>
      {open && <SearchForm data={items} setOpen={setOpen}/>}
      <ul className="section-content__list">
        <LaunchDetails items={items}/>
      </ul>
    </React.Fragment>
  );
};

export default ListData;
