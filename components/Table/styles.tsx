import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import { COLORS } from '../../common/styles';

export const StyledTableContainer = styled(ScrollContainer)`
  background-color: ${COLORS.NIGHT_RIDER};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export const StyledTable = styled.table`
  box-shadow: 1px 4px 30px -9px rgb(0 0 0 / 66%);
  background-color: ${COLORS.WHITE};
`;
