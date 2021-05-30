import styled from 'styled-components';
import { COLORS, FONT_SIZE } from "../../common/styles";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLabel = styled.label`
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.NORMAL};
    font-weight: bold;
`;

export const StyledInput = styled.input`
    font-size: ${FONT_SIZE.BIG};
    outline: 0;
    border: 0;
    width: 150px;
    border-radius: 10px;
    padding-left: 10px;
    box-shadow: -1px 10px 41px 1px rgba(0,0,0,0.64);
`;
