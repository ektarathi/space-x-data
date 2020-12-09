import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import Controls from "./Controls";
import ListData from './ListData';
import SearchForm from './Search';

export interface LaunchDetailsProps {
  items: any;
}

const LaunchDetails: React.SFC<LaunchDetailsProps> = ({ items }: LaunchDetailsProps) => {
  const [open, setOpen] = React.useState(false);
  const show = useSelector((state: AppState) => state.display);

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
          role="button"
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
      {show.payload.length > 0 ? <ListData data={show.payload}/> : <ListData data={items}/>}
    </React.Fragment>
  );
};

export default LaunchDetails;
