import gsap from 'gsap';
import { bodyUnlock, bodyLock } from '../helpers/bodyLock';
import imagesLoaded from 'imagesloaded'

class Preloader {
    wrap = document.querySelector('.wrap')
    pageIsLoading = false
    iconRotateDeg = 0

    constructor() {
        const elem = document.querySelector('.preloader')
        if (!elem) return

        bodyLock()

        this.elem = elem
        this.vector = elem.querySelector('.preloader__vector')
        this.icon = elem.querySelector('.preloader-icon')
        this.iconPaths = this.icon.querySelectorAll('path')
        this.hersones = elem.querySelector('.preloader-hersones')
        this.tavrichesky = elem.querySelector('.preloader-tavrichesky')
        this.descr = elem.querySelector('.preloader-descr')

        this.uploadImages()
        this.download()
    }

    uploadImages() {
        const uploadStart = Date.now()

        const getUploadTime = () => {
            return Date.now() - uploadStart
        }

        // Проверяем время загрузки. Если прелоадер отображается больше 5 секунд, то он будет закрыт и будет показан страница.
        const checkUploadStart = setInterval(() => {
            const uploadTime = getUploadTime()

            if (uploadTime > 5000) {
                clearInterval(checkUploadStart)
                this.pageIsLoading = true
            }
        }, 1000)

        imagesLoaded( document.body, () => {
            clearInterval(checkUploadStart)
            this.pageIsLoading = true
        } )
    }

    // Загрузка страницы
    download() {
        if (!this.pageIsLoading) {
            this.iconRotateDeg += 180

            gsap.to(this.icon, {
                rotate: this.iconRotateDeg,
                transformOrigin: "center",
                duration: 1,
            })

            setTimeout(() => {
                this.download()
            }, 1400)
        }
        else {
            this.loaded()
        }
    }

    // Страница загружена
    loaded() {
        gsap.to(this.icon, {
            x: 0,
            xPercent: 0,
            duration: 1,
        })
        gsap.to(this.iconPaths, {
            fill: '#5E1431',
            duration: 1,
        })
        gsap.to(this.hersones, {
            yPercent: 0,
            duration: 1,
            delay: .2,
        })
        gsap.to(this.tavrichesky, {
            yPercent: 0,
            duration: 1,
            delay: .2,
        })
        gsap.to(this.descr, {
            alpha: 1,
            duration: 1,
            delay: .2,
            // Функция, которая выполнится после того, как анимация закончится
            onComplete: () => {
                this.hide()
            }
        })
    }

    // Скрыть прелоадер
    hide() {
        const eventResize = new Event("resize")

        this.elem.classList.add('is-hide')

        if (!window.currentModal) {
            bodyUnlock()
        }

        setTimeout(() => {
            window.dispatchEvent(eventResize)
            this.remove()
        }, 600)
    }

    // Удалить прелоадер из DOM
    remove() {
        this.elem.remove()
    }
}

export default Preloader