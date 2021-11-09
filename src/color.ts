import { hexToRgb, isValidHex, isValidRgb, rgbToHex } from "./helpers"

export class Color
{
    private color: string

    public hex: string
    public rgb: string

    constructor( color: string )
    {
        this.color = color

        this.hex = this.getHex()
        this.rgb = this.getRgb()
    }

    getHex(): string
    {
        return isValidHex( this.color ).result ? this.color : this.convert( rgbToHex )
    }

    getRgb(): string
    {
        return isValidRgb( this.color ).result ? this.color : this.convert( hexToRgb )
    }

    private convert( callback: CallableFunction ): string
    {
        let result = callback( this.color )

        return (result instanceof Error) ? result.message : result
    }
}