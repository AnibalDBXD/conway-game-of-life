export interface IOptions {
    setPause: (pause: boolean) => void;
    pause: boolean;
    setTime: (time: number) => void;
    setNumberOfColumnsAndRows: (number: number) => void;
}