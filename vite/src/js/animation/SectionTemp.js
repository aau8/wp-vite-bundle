/**
 * Анимация контента раздела temp
 */

import { gsap } from "gsap"

class SectionTemp {
    constructor(section) {
        this.section = section
        this.content = this.section.querySelector('.seo')
        this.contentBlocks = this.content.children

        for (const block of this.contentBlocks) {
            gsap.from(block, {
                duration: 1,
                y: 30,
                alpha: 0,
                scrollTrigger: {
                    trigger: block,
                }
            })
        }
    }
}

export default SectionTemp