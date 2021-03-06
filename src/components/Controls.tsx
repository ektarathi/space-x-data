import React from "react";
export interface ControlsProps {
  type: any;
  className: string;
  onClick: () => void;
}

const Controls: React.SFC<ControlsProps> = ({
  type,
  className,
  onClick,
}: ControlsProps) => {
  return (
    <button
      className={className}
      role="button"
      onClick={onClick}
    >
      {type.direction === "ascending" ? "Sort Ascending" : "Sort Descending"}
    </button>
  );
};

export default Controls;
