/**
 * Анимация раздела s-yell
 */
import gsap from 'gsap'

class SectionYell {
    constructor(section) {
        this.section = section
        this.title = this.section.querySelector('.s-yell__title')
        this.titleSpans = Array.from(this.title.querySelectorAll('span'))
        this.images = Array.from(this.section.querySelectorAll('.s-yell-img'))
        this.content = this.section.querySelector('.s-yell__content-body')

        /**
         * Анимация заголовков
         * У всех элементов span у заголовка определяем дочерний span, который будем анимировать. Суть в том, чтобы он скрывался за своим родителем, у которого overflow: hidden
         * По умолчанию смещаем слово вниз на расстояние равное 105%
         */
        this.titleSpans.forEach(span => {
            const innerSpan = document.createElement('span')

            innerSpan.textContent = span.textContent
            span.textContent = ''
            span.appendChild(innerSpan)

            gsap.set(innerSpan, {
                yPercent: 105,
            })
        })

        /**
         * Как только пользователь доскролил до раздела, слова заголовка появятся
         */
        gsap.to(this.titleSpans.map(span => span.children), {
            yPercent: 0,
            stagger: {
                each: .05,
            },
            scrollTrigger: {
                trigger: this.section,
                start: "center 65%",
            }
        })

        /**
         * Плавное изменение прозрачности у блока с контентом, если он есть
         */
        if (this.content) {
            gsap.set(this.content, {
                alpha: 0
            })

            gsap.to(this.content, {
                alpha: 1
            })
        }

        /**
         * Паралакс изображений
         */
        let IMG_OFFSET = 50 // Размер сдвига изображений.
        this.images.forEach(img => {
            const offset = img.classList.contains('has-parallax') ? IMG_OFFSET : 10

            gsap.set(img, {
                yPercent: offset,
            })

            gsap.to(img, {
                yPercent: -offset,
                scrollTrigger: {
                    trigger: this.section,
                    scrub: 1,
                    start: img.closest('main') ? "80% bottom" : "top bottom", // Если изображение является частью главного экрана, то...
                    end: "bottom top",
                    // markers: true,
                }
            }, '>-1')

            IMG_OFFSET += 20
        })
    }
}

export default SectionYell