export const RGB_SHORT_SIZE = "(0,0,0)".length
export const RGB_FULL_SIZE = "(255,255,255)".length

export const HEX_SHORT_SIZE = "FFF".length 
export const HEX_FULL_SIZE = "FFFFFF".length

export const FORMAT_HEX = "HEX"
export const FORMAT_RGB = "RGB"

const RGB_RADIX = 10
const HEX_RADIX = 16 

const HEX_SINGLE_DIGIT_SIZE = 1

const RGB_START_STRING = 'rgb'
const HEX_START_STRING = '#' 

const RGB_REGEX = /[\d]+/g
const HEX_SHORT_SIZE_REGEX = /[\w]{1}/g
const HEX_FULL_SIZE_REGEX = /[\w]{2}/g


export function rgbToHex( rgb: string, shortMode: boolean = false ): string|Error
{
    let strictRgbCode = (rgb: string) => {

        return rgb.split(' ').join('')
    }

    let getHex = (rgb: string, shortMode: boolean = false) => {

        let match = rgb.match( RGB_REGEX )

        return match ? match.map( (value: string) => { 
            let hexCode = parseInt(value).toString( HEX_RADIX ).toUpperCase()

            if( hexCode.length === HEX_SINGLE_DIGIT_SIZE )
                hexCode = `0${hexCode}`

            if( shortMode )
                hexCode = hexCode.substr(0, HEX_SINGLE_DIGIT_SIZE)

            return hexCode

        }).join('') : ''
    }

    rgb = strictRgbCode( rgb )

    if( !rgb.startsWith( RGB_START_STRING ) )
        return new Error(`${rgb} is not a valid rgb format`)

    if( !(( rgb.length >= realRgbSize( RGB_SHORT_SIZE ) ) || ( rgb.length <= realRgbSize( RGB_FULL_SIZE ) )) )
        return new Error(`${rgb} has not a valid size`)

    let hex = getHex( rgb, shortMode )

    if( hex.length )
        return `${HEX_START_STRING}${hex}`
    else
        return new Error(`Cannot convert ${rgb} into hex format`)
}

export function hexToRgb( hex: string ): string|Error
{
    let getHexFullSize = (hex: string) => {

        let match = hex.match( HEX_SHORT_SIZE_REGEX )
        
        return match ? match.map( (value: string) => { return value.repeat(2) }).join('') : ''
    }

    let getRgb = (hex: string) => {

        let match = hex.match( HEX_FULL_SIZE_REGEX )

        return match ? match.map( (value: string) => { return parseInt( value, HEX_RADIX ) } ).join(', ') : ''
    }

    if( !hex.startsWith( HEX_START_STRING ) )
        return new Error(`${hex} is not a valid hex format`)

    if( !(( hex.length === realHexSize( HEX_FULL_SIZE ) ) || ( hex.length === realHexSize( HEX_SHORT_SIZE ) )) )
        return new Error(`${hex} has not a valid size`)

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

export function toRadix( number: string, radix: number ): number
{
    return parseInt( number, radix )
}

function realRgbSize( size: number ): number
{
    return RGB_START_STRING.length + size
}

function realHexSize( size: number ): number
{
    return HEX_START_STRING.length + size
}