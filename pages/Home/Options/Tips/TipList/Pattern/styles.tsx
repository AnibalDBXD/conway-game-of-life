import styled from 'styled-components';
import Image from "next/image";

export const StyledPattern = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
`;