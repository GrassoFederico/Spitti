var assert = require('assert')

describe('Example', function() {

    describe('Hello World!', function() {
  
      it(`should contains "Hello World!"`, function() {
        
          let example = "Hello World!"

          assert.equal( example, "Hello World!" )
  
      })
    })
})