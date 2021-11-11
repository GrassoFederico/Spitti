export declare class Color {
    private _hex;
    private _rgb;
    constructor(color: string);
    set hex(color: string);
    set rgb(color: string);
    get hex(): string;
    get rgb(): string;
    changeTo(color: string): void;
    getHex(): string;
    getRgb(): string;
}
