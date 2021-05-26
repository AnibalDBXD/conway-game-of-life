import { StyledCell } from "./styles";
import { ICellProps } from "./types";

const Cell: React.FC<ICellProps> = ({ isActive, onClick }): JSX.Element => {
  return (
    <StyledCell onClick={onClick} isActive={isActive} />
  );
};

export default Cell;
