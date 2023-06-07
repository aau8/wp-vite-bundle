class Navigation {

    constructor(root, nav) {
        if (!nav || (!nav.next && !nav.prev))
            return;
        this.slider = root.slider;
        this.root = root;
        this.next = nav.next;
        this.prev = nav.prev;

        this.init();
    }

    init() {
        this.next.addEventListener('click', () => this.scrollNext());
        this.prev.addEventListener('click', () => this.scrollPrev());
        this.setState();

        this.slider.on('select', e => {
            this.setState();
        });
    }

    setState() {
        if (this.slider.canScrollNext()) {
            this.next.classList.remove('is-disabled');
        }
        else {
            this.next.classList.add('is-disabled');
        }

        if (this.slider.canScrollPrev()) {
            this.prev.classList.remove('is-disabled');
        }
        else {
            this.prev.classList.add('is-disabled');
        }
    }

    scrollNext() {
        this.slider.scrollNext();
    }

    scrollPrev() {
        this.slider.scrollPrev();
    }
}

export default Navigation