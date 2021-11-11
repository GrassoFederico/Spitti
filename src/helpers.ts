export const RGB_SHORT_SIZE = "(0,0,0)".length
export const RGB_FULL_SIZE = "(255,255,255)".length

export const HEX_SHORT_SIZE = "FFF".length 
export const HEX_FULL_SIZE = "FFFFFF".length

export const FORMAT_HEX = "HEX"
export const FORMAT_RGB = "RGB"

const HEX_RADIX = 16 

const HEX_SINGLE_DIGIT_SIZE = 1

const RGB_START_STRING = 'rgb'
const HEX_START_STRING = '#' 

const RGB_REGEX = /[\d]+/g
const HEX_SHORT_SIZE_REGEX = /[\w]{1}/g
const HEX_FULL_SIZE_REGEX = /[\w]{2}/g

export type Response = {
    result: boolean,
    message: string
}

export function rgbToHex( rgb: string ): string|Error
{
    let response = validateColorCode( rgb, isValidRgb )

    if( response instanceof Error )
        return response

    return convert( convertToHex, rgb )
}

export function isValidRgb( rgb: string ): Response
{
    rgb = strictRgbCode( rgb )
    
    if( !rgb.startsWith( RGB_START_STRING ) )
        return {"result": false, "message": `${rgb} is not a valid rgb format`}
    
    if( !(( rgb.length >= realRgbSize( RGB_SHORT_SIZE ) ) || ( rgb.length <= realRgbSize( RGB_FULL_SIZE ) )) )
        return {"result": false, "message": `${rgb} has not a valid size`}

    return {"result": true, "message": `${rgb} is valid RGB code`}
}

export function hexToRgb( hex: string ): string|Error
{
    let response = validateColorCode( hex, isValidHex )

    if( response instanceof Error )
        return response

    return convert( convertToRgb, hex )
}

export function isValidHex( hex: string ): Response
{
    if( !hex.startsWith( HEX_START_STRING ) )
        return {"result": false, "message": `${hex} is not a valid hex format`}

    if( !(( hex.length === realHexSize( HEX_FULL_SIZE ) ) || ( hex.length === realHexSize( HEX_SHORT_SIZE ) )) )
        return {"result": false, "message": `${hex} has not a valid size`}

    return {"result": true, "message": `${hex} is valid Hex code`}
}

function validateColorCode( code: string, callback: CallableFunction ): void|Error 
{
    let response: Response

    if( !(response = callback( code )).result )
        return new Error( response.message )

    return;
}

function convert( callback: CallableFunction, ...args: any ): string|Error 
{
    return callback(...args)
}

function convertToHex( rgb: string ): string|Error
{
    let hex = getHex( rgb )

    if( hex.length )
        return `${HEX_START_STRING}${hex}`
    else
        return new Error(`Cannot convert ${rgb} into hex format`)
}

function convertToRgb( hex: string ): string|Error
{
    if( hex.length === realHexSize( HEX_SHORT_SIZE ) )
        hex = getHexFullSize( hex )
    
    if( !hex.length )
        return new Error(`Cannot convert ${hex} into RGB format`)

    let rgb = getRgb( hex )

    if( rgb.length )
        return `${RGB_START_STRING}(${rgb})`
    else
        return new Error(`Cannot convert ${hex} into RGB format`)
}

function strictRgbCode( rgb: string ): string 
{
    return rgb.split(' ').join('')
}

function realRgbSize( size: number ): number
{
    return RGB_START_STRING.length + size
}

function getHex(rgb: string): string
{
    let match = rgb.match( RGB_REGEX )

    return match ? match.map( (value: string) => { 
        let hexCode = parseInt(value).toString( HEX_RADIX ).toUpperCase()

        if( hexCode.length === HEX_SINGLE_DIGIT_SIZE )
            hexCode = `0${hexCode}`

        return hexCode

    }).join('') : ''
}

function realHexSize( size: number ): number
{
    return HEX_START_STRING.length + size
}

function getHexFullSize(hex: string): string 
{

    let match = hex.match( HEX_SHORT_SIZE_REGEX )
    
    return match ? match.map( (value: string) => { return value.repeat(2) }).join('') : ''
}

function getRgb(hex: string): string 
{
    let match = hex.match( HEX_FULL_SIZE_REGEX )

    return match ? match.map( (value: string) => { return parseInt( value, HEX_RADIX ) } ).join(', ') : ''
}