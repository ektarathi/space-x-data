import React from "react";
import { useDispatch } from "react-redux";
import { ValueActions } from "../redux/actions/valueAction";
export interface DropDownCardProps {
  data: any;
}

const DropDownCard: React.SFC<DropDownCardProps> = ({
  data,
}: DropDownCardProps) => {
  const [selectedItem, setSelectedItem] = React.useState([] as any);
  const valueDispatch = useDispatch<React.Dispatch<ValueActions>>();

  React.useEffect(() => {
    let filteredItems = data.filter((item: any) => {
      if (selectedItem.indexOf(item.launch_year) === -1) {
        return selectedItem.push(item.launch_year);
      }
    });
    setSelectedItem(filteredItems);
  }, []);

  const handleChange = (event: any) => {
    valueDispatch({ type: "GET_VALUE", year_value: event.target.value });
  }

  return (
    <React.Fragment>
      <label htmlFor="year">Select the year</label>
      <select id="year" name="select" className="dropdown" onChange={e => handleChange(e)}>
      {selectedItem.map((item: any, i: any) => (
        <option key={i} value={item.launch_year}>
          {item.launch_year}
        </option>
      ))}
    </select>
    </React.Fragment>
   
  );
};

export default DropDownCard;
