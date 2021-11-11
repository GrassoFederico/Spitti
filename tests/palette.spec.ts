import { Color } from "../src/color"

var assert = require('assert')
var palette = require('../src/palette')

describe( "Palette colors", function() {

    describe( `Color black`, function() {

        let name = "black"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color silver`, function() {
    
        let name = "silver"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color gray`, function() {
    
        let name = "gray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color white`, function() {
    
        let name = "white"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color maroon`, function() {
    
        let name = "maroon"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color red`, function() {
    
        let name = "red"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color purple`, function() {
    
        let name = "purple"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color fuchsia`, function() {
    
        let name = "fuchsia"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color green`, function() {
    
        let name = "green"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lime`, function() {
    
        let name = "lime"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color olive`, function() {
    
        let name = "olive"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color yellow`, function() {
    
        let name = "yellow"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color navy`, function() {
    
        let name = "navy"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color blue`, function() {
    
        let name = "blue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color teal`, function() {
    
        let name = "teal"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color aqua`, function() {
    
        let name = "aqua"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color aliceblue`, function() {
    
        let name = "aliceblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color antiquewhite`, function() {
    
        let name = "antiquewhite"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color aquamarine`, function() {
    
        let name = "aquamarine"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color azure`, function() {
    
        let name = "azure"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color beige`, function() {
    
        let name = "beige"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color bisque`, function() {
    
        let name = "bisque"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color blanchedalmond`, function() {
    
        let name = "blanchedalmond"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color blueviolet`, function() {
    
        let name = "blueviolet"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color brown`, function() {
    
        let name = "brown"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color burlywood`, function() {
    
        let name = "burlywood"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color cadetblue`, function() {
    
        let name = "cadetblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color chartreuse`, function() {
    
        let name = "chartreuse"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color chocolate`, function() {
    
        let name = "chocolate"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color coral`, function() {
    
        let name = "coral"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color cornflowerblue`, function() {
    
        let name = "cornflowerblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color cornsilk`, function() {
    
        let name = "cornsilk"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color crimson`, function() {
    
        let name = "crimson"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color cyan`, function() {
    
        let name = "cyan"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkblue`, function() {
    
        let name = "darkblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkcyan`, function() {
    
        let name = "darkcyan"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkgoldenrod`, function() {
    
        let name = "darkgoldenrod"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkgray`, function() {
    
        let name = "darkgray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkgreen`, function() {
    
        let name = "darkgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkgrey`, function() {
    
        let name = "darkgrey"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkkhaki`, function() {
    
        let name = "darkkhaki"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkmagenta`, function() {
    
        let name = "darkmagenta"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkolivegreen`, function() {
    
        let name = "darkolivegreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkorange`, function() {
    
        let name = "darkorange"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkorchid`, function() {
    
        let name = "darkorchid"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkred`, function() {
    
        let name = "darkred"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darksalmon`, function() {
    
        let name = "darksalmon"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkseagreen`, function() {
    
        let name = "darkseagreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkslategray`, function() {
    
        let name = "darkslategray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkturquoise`, function() {
    
        let name = "darkturquoise"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color darkviolet`, function() {
    
        let name = "darkviolet"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color deeppink`, function() {
    
        let name = "deeppink"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color deepskyblue`, function() {
    
        let name = "deepskyblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color dimgray`, function() {
    
        let name = "dimgray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color dodgerblue`, function() {
    
        let name = "dodgerblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color firebrick`, function() {
    
        let name = "firebrick"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color floralwhite`, function() {
    
        let name = "floralwhite"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color forestgreen`, function() {
    
        let name = "forestgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color gainsboro`, function() {
    
        let name = "gainsboro"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color ghostwhite`, function() {
    
        let name = "ghostwhite"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color gold`, function() {
    
        let name = "gold"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color goldenrod`, function() {
    
        let name = "goldenrod"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color greenyellow`, function() {
    
        let name = "greenyellow"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color honeydew`, function() {
    
        let name = "honeydew"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color hotpink`, function() {
    
        let name = "hotpink"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color indianred`, function() {
    
        let name = "indianred"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color indigo`, function() {
    
        let name = "indigo"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color ivory`, function() {
    
        let name = "ivory"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color khaki`, function() {
    
        let name = "khaki"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lavender`, function() {
    
        let name = "lavender"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lavenderblush`, function() {
    
        let name = "lavenderblush"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lawngreen`, function() {
    
        let name = "lawngreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lemonchiffon`, function() {
    
        let name = "lemonchiffon"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightblue`, function() {
    
        let name = "lightblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightcoral`, function() {
    
        let name = "lightcoral"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightcyan`, function() {
    
        let name = "lightcyan"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightgoldenrodyellow`, function() {
    
        let name = "lightgoldenrodyellow"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightgray`, function() {
    
        let name = "lightgray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightgreen`, function() {
    
        let name = "lightgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightgrey`, function() {
    
        let name = "lightgrey"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightpink`, function() {
    
        let name = "lightpink"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightsalmon`, function() {
    
        let name = "lightsalmon"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightseagreen`, function() {
    
        let name = "lightseagreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightskyblue`, function() {
    
        let name = "lightskyblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightslategray`, function() {
    
        let name = "lightslategray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightsteelblue`, function() {
    
        let name = "lightsteelblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color lightyellow`, function() {
    
        let name = "lightyellow"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color limegreen`, function() {
    
        let name = "limegreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color linen`, function() {
    
        let name = "linen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color magenta`, function() {
    
        let name = "magenta"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumaquamarine`, function() {
    
        let name = "mediumaquamarine"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumblue`, function() {
    
        let name = "mediumblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumorchid`, function() {
    
        let name = "mediumorchid"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumpurple`, function() {
    
        let name = "mediumpurple"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumseagreen`, function() {
    
        let name = "mediumseagreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumslateblue`, function() {
    
        let name = "mediumslateblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumspringgreen`, function() {
    
        let name = "mediumspringgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumturquoise`, function() {
    
        let name = "mediumturquoise"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mediumvioletred`, function() {
    
        let name = "mediumvioletred"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color midnightblue`, function() {
    
        let name = "midnightblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mintcream`, function() {
    
        let name = "mintcream"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color mistyrose`, function() {
    
        let name = "mistyrose"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color moccasin`, function() {
    
        let name = "moccasin"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color navajowhite`, function() {
    
        let name = "navajowhite"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color oldlace`, function() {
    
        let name = "oldlace"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color olivedrab`, function() {
    
        let name = "olivedrab"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color orange`, function() {
    
        let name = "orange"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color orangered`, function() {
    
        let name = "orangered"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color orchid`, function() {
    
        let name = "orchid"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color palegoldenrod`, function() {
    
        let name = "palegoldenrod"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color palegreen`, function() {
    
        let name = "palegreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color paleturquoise`, function() {
    
        let name = "paleturquoise"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color palevioletred`, function() {
    
        let name = "palevioletred"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color papayawhip`, function() {
    
        let name = "papayawhip"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color peachpuff`, function() {
    
        let name = "peachpuff"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color peru`, function() {
    
        let name = "peru"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color pink`, function() {
    
        let name = "pink"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color plum`, function() {
    
        let name = "plum"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color powderblue`, function() {
    
        let name = "powderblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color rosybrown`, function() {
    
        let name = "rosybrown"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color royalblue`, function() {
    
        let name = "royalblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color saddlebrown`, function() {
    
        let name = "saddlebrown"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color salmon`, function() {
    
        let name = "salmon"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color sandybrown`, function() {
    
        let name = "sandybrown"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color seagreen`, function() {
    
        let name = "seagreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color seashell`, function() {
    
        let name = "seashell"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color sienna`, function() {
    
        let name = "sienna"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color skyblue`, function() {
    
        let name = "skyblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color slateblue`, function() {
    
        let name = "slateblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color slategray`, function() {
    
        let name = "slategray"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color snow`, function() {
    
        let name = "snow"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color springgreen`, function() {
    
        let name = "springgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color steelblue`, function() {
    
        let name = "steelblue"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color tan`, function() {
    
        let name = "tan"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color thistle`, function() {
    
        let name = "thistle"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color tomato`, function() {
    
        let name = "tomato"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color turquoise`, function() {
    
        let name = "turquoise"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color violet`, function() {
    
        let name = "violet"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color wheat`, function() {
    
        let name = "wheat"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color whitesmoke`, function() {
    
        let name = "whitesmoke"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })

    describe( `Color yellowgreen`, function() {
    
        let name = "yellowgreen"
        let color = new Color( name )

        describe( `RGB ${name}`, function () {

            it(`should be ${palette[name].rgb}`, function() {

                assert.equal( color.rgb, palette[name].rgb )
            })
        })

        describe( `Hex ${name}`, function () {

            it(`should be ${palette[name].hex}`, function() {
                
                assert.equal( color.hex, palette[name].hex )
            })
        })
    })
})