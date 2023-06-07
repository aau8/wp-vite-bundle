/**
 * Анимация карточки экспоната
 */

import gsap from 'gsap'

class CardExhibit {
    constructor(card) {
        this.card = card

        gsap.from(this.card, {
            y: 40,
            scale: .9,
            alpha: 0,
            duration: .3,
            delay: Math.trunc(Math.random() * .5 * 10) / 10,
            scrollTrigger: {
                trigger: this.card,
                start: "top 70%",
            }
        })
    }
}

export default CardExhibit