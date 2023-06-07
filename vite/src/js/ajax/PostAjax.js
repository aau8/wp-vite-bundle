import Slider from "../components/Slider/Slider";
import Modal from "../components/Modal";
import URLWorker from "../helpers/URLWorker";
import CardLect from "../animation/CardLect";

class PostAjax {
    wrap = document.querySelector('.wrap')
    modal = null

    constructor() {
        // Делегирование событий
        document.addEventListener('click', (e) => this.onClick(e))

        // Проверка url при загрузке страницы и при обновлении url-адреса
        this.checkURL()
        window.addEventListener('popstate', () => {
            this.checkURL()
        })
    }

    // Определить значения id и type текущего поста.
    setPostId(postId) {
        this.postId = postId
    }

    // Определить значение свойства modal. Или экземпляр new Modal() или null
    setModal(modal) {
        this.modal = modal
        window.currentModal = modal
    }

    /**
     * Проверить url на наличие параметров post_id и post_type.
     * Если они есть, будет отправлен запрос на получение данных и отображена модалка.
     */
    checkURL() {
        const params = URLWorker.getParams()
        const postId = Number(params['post_id']) || null

        if (postId && this.postId !== postId) {
            this.setPostId(postId)
            this.uploadData()
            return
        }

        if (this.modal) {
            this.modal.close()
        }
    }

    // Событие клика по элементу
    async onClick(e) {
        const target = e.target

        if (target.hasAttribute('data-post-id') || target.closest('[data-post-id]')) {
            this.card = target.hasAttribute('data-post-id') ? target : target.closest('[data-post-id]')
            const postId = Number(this.card.dataset.postId)

            this.setPostId(postId)
            this.uploadData()
        }
    }

    // Загрузить данные модалки и отобразить их
    async uploadData() {

        // Загрузка данных
        this.setLoading(true)
        const data = await this.fetchData()
        const modal = new Modal(data)

        if (this.modal) {
            this.modal.close(false)
        }

        URLWorker.setParams({ post_id: this.postId })

        this.setModal(modal)

        // Разместить модалку в DOM
        this.modal.insertToDOM()
        this.contentInit()

        // Функция при закрытии модалки
        this.modal.setOnClose(() => {
            const eventResize = new Event("resize")

            window.dispatchEvent(eventResize)
            URLWorker.clearParams()
            this.setModal(null)
        })

        // Открыть модалку
        setTimeout(() => {

            this.modal.open()

            setTimeout(() => {
                this.setLoading(false)
            }, 200)
        }, 10)
    }

    // Получить данные поста
    async fetchData() {
        return await fetch(`${AJAX_URL}?action=post&id=${this.postId}`).then(res => res.text())
    }

    // Инициализировать функционал пришедшей разметки
    contentInit() {
        const content = this.modal.el.querySelector('[data-ajax]')

        if (content.dataset.ajax === 'exhibit') {
            const sliderNode = content.querySelector('.product__slider')

            if (sliderNode) {
                // Инициализация слайдера с изображениями экспоната
                new Slider(
                    this.modal.el.querySelector('.product__slider'),
                    {
                        nav: {
                            prev: document.querySelector('.product__slider-arrow.is-prev'),
                            next: document.querySelector('.product__slider-arrow.is-next'),
                        },
                    }
                )
            }
        }
        // else if (content.dataset.ajax === 'lecture') {
        //     const cardLectElems = content.querySelectorAll('.c-lect')

        //     for (const card of cardLectElems) {
        //         new CardLect(card)
        //     }
        // }
    }

    // Установить состояние загрузки данных
    setLoading(state) {
        let elem

        if (this.card) {
            elem = this.card
        }
        else {
            elem = this.wrap
        }

        if (state) {
            elem.classList.add('is-loading')
        }
        else {
            elem.classList.remove('is-loading')
        }
    }
}

export default PostAjax