import { Color } from "../src/color"

var assert = require('assert')
var hex = "#FF0000"
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
})