import './helpers'
import './color'

export declare function rgbToHex( rgb: string ): string|Error
export declare function hexToRgb( hex: string ): string|Error
export declare function isValidRgb( rgb: string ): Response
export declare function isValidHex( hex: string ): Response

export declare class Color {}