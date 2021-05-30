import { ChangeEvent } from "react";

export interface IInput {
    placeholder?: string,
    disabled?: boolean,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
    defaultValue?: number,
    min?: number,
    max?: number,
    label: string,
    value: number | string,
}