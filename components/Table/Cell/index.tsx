import { StyledCell } from './styles';
import { ICellProps } from './types';

const Cell: React.FC<ICellProps> = ({
  isActive,
  onClick,
  'data-testid': testid,
}): JSX.Element => {
  return (
    <StyledCell onClick={onClick} data-testid={testid} isActive={isActive} />
  );
};

export default Cell;
