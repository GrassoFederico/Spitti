import { rgbToHex, hexToRgb, isValidRgb, isValidHex } from "../src/helpers"

var assert = require('assert')
var hex = "#FF0000"
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
      
      assert.equal( rgbToHex( rgb ), hex )
    })
  })

  describe('hexToRgb()', function() {

    it(`should be ${rgb}`, function() {
      
      assert.equal( hexToRgb( hex ), rgb )
    })
  })
})