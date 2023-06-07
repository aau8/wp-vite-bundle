/**
 * Анимация карточки лекции
 */

import gsap from 'gsap'

class CardLect {
    constructor(card) {
        this.card = card

        gsap.from(this.card, {
            y: 40,
            scale: .9,
            alpha: 0,
            duration: .6,
            // ease: Power1.easeOut,
            scrollTrigger: {
                trigger: this.card,
                // markers: true,
            }
        })
    }
}

export default CardLect