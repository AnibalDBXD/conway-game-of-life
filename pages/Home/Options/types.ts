export interface IOptions {
    setPause: (pause: boolean) => void;
    isPause: boolean;
    setTime: (time: number) => void;
    setNumberOfColumnsAndRows: (number: number) => void;
}