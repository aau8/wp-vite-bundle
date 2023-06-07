import { bodyLock, bodyUnlock } from "../helpers/bodyLock"

const DURATION = 500

class Modal {

    constructor(content) {
        this.wrap = document.querySelector('.wrap')

        // Модальное окно
        this.el = document.createElement('div')
        this.el.classList.add('modal')

        // Шапка модалки
        const modalHeader = document.createElement('div')
        modalHeader.classList.add('modal__header')
        modalHeader.setAttribute('data-lp', '')

        // Внутренняя обертка
        const modalBody = document.createElement('div')
        modalBody.classList.add('modal__body')

        // Кнопка закрытия модалки
        const closer = document.createElement('button')
        closer.classList.add('modal-close')
        closer.addEventListener('click', () => this.close())

        // Размещение элементов внутри шапки
        modalHeader.appendChild(closer)

        // Размещение элементов внутри модалки
        this.el.appendChild(modalHeader)
        this.el.appendChild(modalBody)

        /**
         * Проверка на наличие модалки для слабовидящих.
         * Если она есть, шапка модалки будет сдвинута вниз на расстояние равное высоте модалки
         */
        const bvi = document.querySelector('.bvi-fixed-top')

        if (bvi) {
            this.el.style.top = bvi.clientHeight + 'px'
        }

        // Размещение контента внутри wrap
        modalBody.innerHTML = content
    }

    // Разместить модалку в DOM
    insertToDOM() {
        this.wrap.parentNode.insertBefore(this.el, this.wrap.nextSibling)
    }

    // Открыть модалку
    open() {
        this.el.style.zIndex = 4
        this.el.classList.add('is-show')
        this.wrap.classList.add('is-substrate')
        bodyLock()

        setTimeout(() => {
            this.el.style.zIndex = null
        }, DURATION)
    }

    // Установить функцию, которая будет вызвана после закрытия модалки, но до удаления ее из DOM
    setOnClose(func) {
        this.onClose = func
    }

    // Закрыть модалку
    close(bodyUnlockState = true) {
        this.el.classList.remove('is-show')
        this.wrap.classList.remove('is-substrate')

        if (bodyUnlockState) {
            bodyUnlock(DURATION)
        }

        this.onClose()

        setTimeout(() => {
            this.remove()
        }, DURATION)
    }

    // Удалить модалку из разметки DOM
    remove() {
        this.el.remove()
    }
}

export default Modal