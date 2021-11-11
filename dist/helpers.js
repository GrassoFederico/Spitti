"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidHex = exports.hexToRgb = exports.isValidRgb = exports.rgbToHex = exports.FORMAT_RGB = exports.FORMAT_HEX = exports.HEX_FULL_SIZE = exports.HEX_SHORT_SIZE = exports.RGB_FULL_SIZE = exports.RGB_SHORT_SIZE = void 0;
exports.RGB_SHORT_SIZE = "(0,0,0)".length;
exports.RGB_FULL_SIZE = "(255,255,255)".length;
exports.HEX_SHORT_SIZE = "FFF".length;
exports.HEX_FULL_SIZE = "FFFFFF".length;
exports.FORMAT_HEX = "HEX";
exports.FORMAT_RGB = "RGB";
var HEX_RADIX = 16;
var HEX_SINGLE_DIGIT_SIZE = 1;
var RGB_START_STRING = 'rgb';
var HEX_START_STRING = '#';
var RGB_REGEX = /[\d]+/g;
var HEX_SHORT_SIZE_REGEX = /[\w]{1}/g;
var HEX_FULL_SIZE_REGEX = /[\w]{2}/g;
function rgbToHex(rgb) {
    var response = validateColorCode(rgb, isValidRgb);
    if (response instanceof Error)
        return response;
    return convert(convertToHex, rgb);
}
exports.rgbToHex = rgbToHex;
function isValidRgb(rgb) {
    rgb = strictRgbCode(rgb);
    if (!rgb.startsWith(RGB_START_STRING))
        return { "result": false, "message": rgb + " is not a valid rgb format" };
    if (!((rgb.length >= realRgbSize(exports.RGB_SHORT_SIZE)) || (rgb.length <= realRgbSize(exports.RGB_FULL_SIZE))))
        return { "result": false, "message": rgb + " has not a valid size" };
    return { "result": true, "message": rgb + " is valid RGB code" };
}
exports.isValidRgb = isValidRgb;
function hexToRgb(hex) {
    var response = validateColorCode(hex, isValidHex);
    if (response instanceof Error)
        return response;
    return convert(convertToRgb, hex);
}
exports.hexToRgb = hexToRgb;
function isValidHex(hex) {
    if (!hex.startsWith(HEX_START_STRING))
        return { "result": false, "message": hex + " is not a valid hex format" };
    if (!((hex.length === realHexSize(exports.HEX_FULL_SIZE)) || (hex.length === realHexSize(exports.HEX_SHORT_SIZE))))
        return { "result": false, "message": hex + " has not a valid size" };
    return { "result": true, "message": hex + " is valid Hex code" };
}
exports.isValidHex = isValidHex;
function validateColorCode(code, callback) {
    var response;
    if (!(response = callback(code)).result)
        return new Error(response.message);
    return;
}
function convert(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return callback.apply(void 0, args);
}
function convertToHex(rgb) {
    var hex = getHex(rgb);
    if (hex.length)
        return "" + HEX_START_STRING + hex;
    else
        return new Error("Cannot convert " + rgb + " into hex format");
}
function convertToRgb(hex) {
    if (hex.length === realHexSize(exports.HEX_SHORT_SIZE))
        hex = getHexFullSize(hex);
    if (!hex.length)
        return new Error("Cannot convert " + hex + " into RGB format");
    var rgb = getRgb(hex);
    if (rgb.length)
        return RGB_START_STRING + "(" + rgb + ")";
    else
        return new Error("Cannot convert " + hex + " into RGB format");
}
function strictRgbCode(rgb) {
    return rgb.split(' ').join('');
}
function realRgbSize(size) {
    return RGB_START_STRING.length + size;
}
function getHex(rgb) {
    var match = rgb.match(RGB_REGEX);
    return match ? match.map(function (value) {
        var hexCode = parseInt(value).toString(HEX_RADIX).toUpperCase();
        if (hexCode.length === HEX_SINGLE_DIGIT_SIZE)
            hexCode = "0" + hexCode;
        return hexCode;
    }).join('') : '';
}
function realHexSize(size) {
    return HEX_START_STRING.length + size;
}
function getHexFullSize(hex) {
    var match = hex.match(HEX_SHORT_SIZE_REGEX);
    return match ? match.map(function (value) { return value.repeat(2); }).join('') : '';
}
function getRgb(hex) {
    var match = hex.match(HEX_FULL_SIZE_REGEX);
    return match ? match.map(function (value) { return parseInt(value, HEX_RADIX); }).join(', ') : '';
}
