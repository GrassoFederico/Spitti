import { rgbToHex, hexToRgb, HEX_SHORT_SIZE, isValidRgb, isValidHex } from "../src/helpers"

var assert = require('assert')
var hex = "#F00"
var rgb = "rgb(255, 0, 0)"

describe('RGB', function() {

  describe('isValidRgb()', function() {

    it('should be true', function() {
      
      assert.ok( isValidRgb( rgb ) )
    })
  })
})

describe('Hex', function() {

  describe('isValidHex()', function() {

    it('should be true', function() {
      
      assert.ok( isValidHex( hex ) )
    })
  })
})

describe('Convertion Functions', function() {

  describe('rgbToHex()', function() {
    
    it(`should be ${hex}`, function() {
      
      assert.equal( rgbToHex( rgb, (hex.length === ("#".length + HEX_SHORT_SIZE)) ), hex )
    })
  })

  describe('hexToRgb()', function() {

    it(`should be ${rgb}`, function() {
      
      assert.equal( hexToRgb( hex ), rgb )
    })
  })
})