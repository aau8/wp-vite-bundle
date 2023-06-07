/**
 * Инициализация анимации на сайте
 */
import SectionYell from "./SectionYell"
import BlockData from "./BlockData"
import ExhibitMainSlider from "./ExhibitMainSlider"
import SectionTemp from "./SectionTemp"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CardLect from "./CardLect"
import CardExhibit from "./CardExhibit"

gsap.registerPlugin(ScrollTrigger)

class Animatron {
    constructor(container) {
        /**
         * selector - название класса анимируемого элемента
         * className - название класса, с логикой анимации
         */
        this.modules = [
            {
                selector: ".s-exh",
                className: ExhibitMainSlider,
            },
            {
                selector: ".b-data",
                className: BlockData,
            },
            {
                selector: ".s-yell",
                className: SectionYell,
            },
            {
                selector: ".s-about__wrap.temp, .s-place__temp.temp, .dear__wrap.temp",
                className: SectionTemp,
            },
            {
                selector: ".c-lect",
                className: CardLect,
            },
            {
                selector: ".exhibits__list .c-exh",
                className: CardExhibit,
            },
        ]

        for (const module of this.modules) {
            const nodes = container.querySelectorAll(module.selector)

            for (const node of nodes) {
                new module.className(node)
            }
        }
    }
}

export default Animatron