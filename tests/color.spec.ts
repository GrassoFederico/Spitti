import { Color } from "../src/color"

var assert = require('assert')

var hex = "#FF0000"
var rgb = "rgb(255, 0, 0)"
var changedHex = "#0000FF"
var changedRgb = "rgb(0, 0, 255)"

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

  describe('changeTo()', function() {

    describe('hex', function() {
  
      var color = new Color( rgb )
      color.changeTo( changedRgb )
  
      it(`should be ${changedHex}`, function() {
        
        assert.equal( color.hex, changedHex )
      })
    })
  
    describe('rgb', function() {
  
      var color = new Color( hex )
      color.changeTo( changedHex )
  
      it(`should be ${changedRgb}`, function() {
        
        assert.equal( color.rgb, changedRgb )
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
})