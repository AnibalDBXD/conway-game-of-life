import { ChangeEvent } from "react";

export interface IInput {
    /** input placeholder */
    placeholder?: string,
    /** It can be written to the input  */
    disabled?: boolean,
    /** This method calls when the input value changes */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    /** Input default value */
    defaultValue?: number,
    /** Min value (number) */
    min?: number,
    /** Max value (number) */
    max?: number,
    /** Text above the input */
    label: string,
    /** Input value */
    value: number | string,
}