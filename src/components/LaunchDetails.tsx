import React from 'react';
import moment from "moment";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
export interface LaunchDetailsProps {
    items: any;
}
 
const LaunchDetails: React.SFC<LaunchDetailsProps> = ({items}:LaunchDetailsProps) => {
    const [selectedItem, setSelectedItem] = React.useState([] as any);
    const yearData = useSelector((state: AppState) => state.value);

    /*React.useEffect(() => {
        console.log('enter');
        let filteredItems = items.filter((item: any) => {
            let launchYear = item.launch_year;
            return launchYear.indexOf(yearData) !== -1;
          });
          setSelectedItem(filteredItems);
    }, [])*/

    return ( <React.Fragment>
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
    </React.Fragment> );
}
 
export default LaunchDetails;