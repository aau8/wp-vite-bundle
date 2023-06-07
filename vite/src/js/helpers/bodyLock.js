import isMobile from "./isMobile"

// Вспомогательные модули блокировки прокрутки и резкого сдвига
export let bodyLockStatus = true
export function bodyLockToggle(delay = 100) {

	if (document.documentElement.classList.contains('is-lock')) {
		bodyUnlock(delay)
	}
	else {
		bodyLock(delay)
	}
}
// Разблокировать скролл
export function bodyUnlock(delay = 100) {
	let body = document.querySelector("body")

	if (bodyLockStatus) {
		let lockPadding = document.querySelectorAll("[data-lp]")

		setTimeout(() => {

			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index]

				el.style.cssText = `--body-padding-right: 0px`
			}

			body.style.cssText = `--body-padding-right: 0px`
			document.documentElement.classList.remove("is-lock")
		}, delay)

		bodyLockStatus = false

		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}

// Заблокировать скролл
export function bodyLock(delay = 100) {
	let body = document.querySelector("body")

	if (bodyLockStatus) {

		if (!isMobile.any()) {
			let lock_padding = document.querySelectorAll("[data-lp]")

			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index]

				el.style.cssText = el.style.cssText + ` --body-padding-right: ${window.innerWidth - document.querySelector('.wrap').offsetWidth}px`
			}

			body.style.cssText = `--body-padding-right: ${window.innerWidth - document.querySelector('.wrap').offsetWidth}px`
		}

		document.documentElement.classList.add("is-lock")

		bodyLockStatus = false

		setTimeout(function () {
			bodyLockStatus = true
		}, delay)
	}
}
//========================================================================================================================================================
