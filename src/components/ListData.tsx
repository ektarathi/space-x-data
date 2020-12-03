import * as React from "react";
import moment from 'moment';

export interface ListDataProps {
  items: any;
}

const ListData: React.SFC<ListDataProps> = ({ items }: ListDataProps) => {
  return (
    <React.Fragment>
      <ul className="section-content__list">
        {items.map((item: any, index: any) => (
          <li className="section-content__list-item" key={index}>
            <div className="section-content__list-id">{`#${item.flight_number}`}</div>
            <div className="section-content__list-name">
              {item.mission_name}
            </div>
            <div className="section-content__list-data">
              <div className="section-content__list-data section-content__list-data--date">{moment(item.launch_date_utc).format("Do MMM YYYY")}</div>
              <div className="section-content__list-data section-content__list-data--name">{item.rocket.rocket_name}</div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListData;
