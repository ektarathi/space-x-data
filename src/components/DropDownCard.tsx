import React from "react";
export interface DropDownCardProps {
  data: any;
}

const DropDownCard: React.SFC<DropDownCardProps> = ({
  data,
}: DropDownCardProps) => {
  return (
    <ul className="dropdown">
      {data.map((item: any, i: any) => (
        <li key={i}>
          {item.launch_year}
        </li>
      ))}
    </ul>
  );
};

export default DropDownCard;
