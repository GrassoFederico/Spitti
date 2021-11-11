export declare const RGB_SHORT_SIZE: number;
export declare const RGB_FULL_SIZE: number;
export declare const HEX_SHORT_SIZE: number;
export declare const HEX_FULL_SIZE: number;
export declare const FORMAT_HEX = "HEX";
export declare const FORMAT_RGB = "RGB";
export declare type Response = {
    result: boolean;
    message: string;
};
export declare function rgbToHex(rgb: string): string | Error;
export declare function isValidRgb(rgb: string): Response;
export declare function hexToRgb(hex: string): string | Error;
export declare function isValidHex(hex: string): Response;
