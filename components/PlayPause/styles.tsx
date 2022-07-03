import styled from 'styled-components';
import { COLORS } from '../../common/styles';

export const StyledButton = styled.button<{ pause: boolean }>`
  border: 0;
  background: transparent;
  box-sizing: border-box;
  width: 0;
  height: 74px;

  border-color: transparent transparent transparent ${COLORS.WHITE};
  transition: 100ms all ease;
  cursor: pointer;

  // play state
  border-style: ${(props): string => (props.pause ? 'solid' : 'double')};
  border-width: ${(props): string =>
    props.pause ? '37px 0 37px 60px' : '0px 0 0px 60px'};

  &:hover {
    border-color: transparent transparent transparent ${COLORS.GRAY};
  }
`;
