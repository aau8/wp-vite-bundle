import { bodyLock, bodyUnlock } from "../helpers/bodyLock"

class Menu {
    show

    constructor() {
        const menu = document.querySelector('.menu')
        if (!menu) return

        this.menu = menu
        window.Menu = this.menu
        this.menuWrap = this.menu.querySelector('.menu__wrap')
        this.openner = document.querySelector('.header__burger')
        this.closer = document.querySelector('.menu__burger')
        this.linkArr = this.menu.querySelectorAll('a')


        this.openner.addEventListener('click', () => this.open())
        this.closer.addEventListener('click', () => this.close())

        /**
         * Закрыть меню при клике по фону
         */
        this.menu.addEventListener('click', () => this.close())
        this.menuWrap.addEventListener('click', e => { e.stopPropagation() })

        /**
         * Закрыть меню при клике по внутренним ссылкам
         */
        this.linkArr.forEach(link => {
            link.addEventListener('click', () => {
                this.close()
            })
        })
    }

    open() {
        this.show = true
        this.menu.classList.add('is-show')
        bodyLock()
    }

    close() {
        this.show = false
        this.menu.classList.remove('is-show')
        bodyUnlock()
    }
}

export default Menu