import React, { Dispatch, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import { DisplayActions } from "../redux/actions/displayAction";
import ListData from './ListData';
import DropDownCard from "./DropDownCard";
export interface SearchFormProps {
  data: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchForm: React.SFC<SearchFormProps> = ({
  data,
  setOpen,
}: SearchFormProps) => {
  const [selectedItem, setSelectedItem] = React.useState([] as any);
  const valueDispatch = useDispatch<React.Dispatch<DisplayActions>>();
  const yearData = useSelector((state: AppState) => state.value);

  const handleSubmit = () => {
    let filteredItems = data.filter((item: any) => {
      let launchYear = item.launch_year;
      return launchYear.indexOf(yearData.year_value) !== -1;
    });
    setSelectedItem(filteredItems);
    valueDispatch({ type: "SET_DISPLAY", display: true, payload: filteredItems });
  };

  return (
    <React.Fragment>
      <form className="form-data">
        <DropDownCard data={data} />
        <button
          type="button"
          role="button"
          className="form-data__button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchForm;
