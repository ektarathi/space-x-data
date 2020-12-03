import * as React from "react";
export interface ListDataProps {
  items: any;
}

const ListData: React.SFC<ListDataProps> = ({ items }: ListDataProps) => {
  return (
    <React.Fragment>
      <ul className="section-content__list">
        {items.map((item: any, index: any) => (
          <li className="section-content__list-item" key={index}>
            <div>{`# ${item.flight_number}`}</div>
            <div>{item.mission_name}</div>
            <div>{item.launch_date_utc}</div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListData;
