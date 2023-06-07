/**
 * Анимации блоков b-data с цифрами
 */

import gsap from 'gsap'

class BlockData {
    constructor(block) {
        this.block = block
        this.title = block.querySelector('.b-data__title')

        const unit = this.title.querySelector('span').textContent

        gsap.from(this.title, {
            textContent: 1,
            duration: 1,
            ease: "power1.in",
            snap: {
                textContent: 1
            },
            stagger: {
                onUpdate: function() {
                    this.targets()[0].innerHTML = `${this.targets()[0].textContent}<span>${unit}</span>`;
                },
            },
            scrollTrigger: {
                trigger: this.block,
            }
        })
    }
}

export default BlockData