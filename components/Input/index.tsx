import { IInput } from "./types";
import { StyledInputContainer, StyledLabel, StyledInput } from "./styles";

const Input = ({ value, label, disabled, onChange, min, max }: IInput): JSX.Element => (
  <StyledInputContainer>
    <StyledLabel htmlFor={label}>{label}</StyledLabel>
    <StyledInput
      type="range"
      id={label}
      value={value}
      disabled={disabled}
      onChange={onChange}
      min={min}
      max={max} />
  </StyledInputContainer>
);

export default Input;
