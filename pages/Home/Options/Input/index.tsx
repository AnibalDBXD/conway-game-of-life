import { IInput } from "./types";
import { StyledInputContainer, StyledLabel, StyledInput } from "./styles";

const Input = ({ value, label, disabled, onChange, min, max }: IInput): JSX.Element => {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        type="number"
        id={label}
        value={value}
        disabled={disabled}
        onChange={onChange}
        min={min}
        max={max} />
    </StyledInputContainer>
  );
};

export default Input;
