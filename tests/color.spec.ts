import { Color } from "../src/color"
import { FORMAT_HEX, FORMAT_RGB } from "../src/helpers"

var assert = require('assert')
var hex = "#F00"
var rgb = "rgb(255, 0, 0)"

describe('Color functions', function() {

    describe('getHex()', function() {
  
      var color = new Color( rgb )

      it(`should be ${hex}`, function() {
        
        assert.equal( color.getHex(), hex )
      })
    })

    describe('getRgb()', function() {
  
      var color = new Color( hex )

      it(`should be ${rgb}`, function() {
        
        assert.equal( color.getRgb(), rgb )
      })
    })

    describe('getFormat()', function() {

      describe('Hex', function () {

        var color = new Color( hex )

        it(`should be ${FORMAT_HEX}`, function() {

          assert.equal( color.getFormat(), FORMAT_HEX )
        })
      })

      describe('Rgb', function () {

        var color = new Color( rgb )

        it(`should be ${FORMAT_RGB}`, function() {

          assert.equal( color.getFormat(), FORMAT_RGB )
        })
      })
    })
})

describe('Color properties', function() {

  describe('hex', function() {

    var color = new Color( rgb )

    it(`should be ${hex}`, function() {
      
      assert.equal( color.hex, hex )
    })
  })

  describe('rgb', function() {

    var color = new Color( hex )

    it(`should be ${rgb}`, function() {
      
      assert.equal( color.rgb, rgb )
    })
  })

  describe('format', function() {

    describe('Hex', function () {

      var color = new Color( hex )

      it(`should be ${FORMAT_HEX}`, function() {

        assert.equal( color.format, FORMAT_HEX )
      })
    })

    describe('Rgb', function () {

      var color = new Color( rgb )

      it(`should be ${FORMAT_RGB}`, function() {

        assert.equal( color.format, FORMAT_RGB )
      })
    })
  })
})