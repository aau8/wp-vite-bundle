/**
 * Анимация слайдера на главной странице
 */

import gsap from 'gsap'

class ExhibitMainSlider {
    constructor(slider) {
        this.slider = slider
        this.wrap = this.slider.querySelector('.s-exh__slider-wrapper')
        this.slides = gsap.utils.toArray('.c-exh')

        const sliderOffset = this.wrap.scrollWidth - this.wrap.clientWidth

        gsap.to(this.wrap, {
            x: -sliderOffset,
            duration: 5,
            scrollTrigger: {
                trigger: this.slider,
                pin: true,
                scrub: 1,
                start: "top top",
                end: "100% top",
                invalidateOnRefresh: true,
            }
        })
    }
}

export default ExhibitMainSlider