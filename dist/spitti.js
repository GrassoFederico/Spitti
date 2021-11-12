"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.isValidRgb = exports.isValidHex = exports.hexToRgb = exports.rgbToHex = exports.palette = void 0;
var palette_json_1 = __importDefault(require("./palette.json"));
exports.palette = palette_json_1.default;
var helpers_1 = require("./helpers");
Object.defineProperty(exports, "rgbToHex", { enumerable: true, get: function () { return helpers_1.rgbToHex; } });
Object.defineProperty(exports, "hexToRgb", { enumerable: true, get: function () { return helpers_1.hexToRgb; } });
Object.defineProperty(exports, "isValidHex", { enumerable: true, get: function () { return helpers_1.isValidHex; } });
Object.defineProperty(exports, "isValidRgb", { enumerable: true, get: function () { return helpers_1.isValidRgb; } });
var color_1 = require("./color");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return color_1.Color; } });
