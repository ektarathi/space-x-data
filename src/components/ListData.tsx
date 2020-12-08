import React from "react";
import ListItem from './ListItem';
export interface ListDataProps {
  data: any;
}

const ListData: React.SFC<ListDataProps> = ({
  data,
}: ListDataProps) => {
  return (
    <ListItem data={data}/>
  );
};

export default ListData;
