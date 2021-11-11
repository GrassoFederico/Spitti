"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var helpers_1 = require("./helpers");
var palette = require('./palette');
var Color = /** @class */ (function () {
    function Color(color) {
        this._hex = '';
        this._rgb = '';
        this.changeTo(color);
    }
    Object.defineProperty(Color.prototype, "hex", {
        get: function () {
            return (this._hex instanceof Error) ? this._hex.message : this._hex;
        },
        set: function (color) {
            this._hex = palette[color] ? palette[color].hex : ((0, helpers_1.isValidHex)(color).result ? color : (0, helpers_1.rgbToHex)(color));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "rgb", {
        get: function () {
            return (this._rgb instanceof Error) ? this._rgb.message : this._rgb;
        },
        set: function (color) {
            this._rgb = palette[color] ? palette[color].rgb : ((0, helpers_1.isValidRgb)(color).result ? color : (0, helpers_1.hexToRgb)(color));
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.changeTo = function (color) {
        this.hex = color;
        this.rgb = color;
    };
    Color.prototype.getHex = function () {
        return this.hex;
    };
    Color.prototype.getRgb = function () {
        return this.rgb;
    };
    return Color;
}());
exports.Color = Color;
