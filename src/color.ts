import { hexToRgb, isValidHex, isValidRgb, rgbToHex } from "./helpers"
import palette from './palette.json'

export class Color
{
    private _palette: any = palette

    private _hex: string|Error
    private _rgb: string|Error

    constructor( color: string )
    {
        this._hex = ''
        this._rgb = ''

        this.changeTo( color )
    }

    set hex( color: string )
    {
        this._hex = this._palette[color] ? 
                    this._palette[color].hex : ( isValidHex( color ).result ? color : rgbToHex( color ) )
    }

    set rgb( color: string )
    {
        this._rgb = this._palette[color] ? 
                    this._palette[color].rgb : ( isValidRgb( color ).result ? color : hexToRgb( color ) )
    }

    get hex(): string
    {
        return ( this._hex instanceof Error ) ? this._hex.message : this._hex
    }

    get rgb(): string
    {
        return ( this._rgb instanceof Error ) ? this._rgb.message : this._rgb
    }

    changeTo( color: string ): void
    {
        this.hex = color
        this.rgb = color
    }

    getHex(): string
    {
        return this.hex
    }

    getRgb(): string
    {
        return this.rgb
    }

}