import Image from "next/image";
import { IMAGE_SIZE } from "../../utils";
import { StyledPattern } from "./styles";
import { IPattern } from "./types";

const Pattern = ({ name, src }: IPattern): JSX.Element => (
  <StyledPattern>
    <h3>{name}</h3>
    <Image src={src} alt={`${name} figure`} width={IMAGE_SIZE} height={IMAGE_SIZE} />
  </StyledPattern>
);

export default Pattern;
