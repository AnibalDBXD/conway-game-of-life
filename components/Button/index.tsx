import styled from 'styled-components';
import { COLORS } from '../../common/styles';

const Button = styled.button`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: transparent;
  border: 2px solid ${COLORS.WHITE};
  border-radius: 8px;
  color: ${COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.1s ease;

  :hover {
    border-color: ${COLORS.WHITE_GRAY};
    color: ${COLORS.WHITE_GRAY};
  }

  :active {
    transform: scale(0.9);
  }
`;

export default Button;
