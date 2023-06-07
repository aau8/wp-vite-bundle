import Embla from 'embla-carousel'
import Navigation from "./Navigation"
import ClassNames from 'embla-carousel-class-names'

class Slider {
    slider

    constructor(el, { nav, ...options }) {
        if (!el) return
        this.el = el
        this.slider = Embla(el, options, [ClassNames()])
        this.watchDrag = options.watchDrag || true

        this.nav = new Navigation(this, nav)
        // this.events = events

        // Object.entries(events).forEach(([ key, cb ]) => {
        //     this.slider.on(key, cb)
        // })
    }
}

export default Slider
