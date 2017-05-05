<template>
    <div
    class="scrollup"
    :class="{ 'scrollup--visible' : visible }"
    @click="scrollUp"
    >
    </div>
</template>

<script>
import raf from 'raf';

export default {
    name: 'scrollup',
    data() {
        return {
            visible: false,
            scrollStep: 0,
        };
    },
    methods: {
        checkScroll() {
            this.visible = window.scrollY > 100;
        },
        scrollUp() {
            // .5 seconds worth of raf to top
            this.scrollStep = window.scrollY / 8;
            raf(this.scrollABit)
        },
        scrollABit() {
            console.log(window.scrollY);
            if (window.scrollY > 0) {
                window.scrollTo(
                    0,
                    window.scrollY > this.scrollStep ? window.scrollY - this.scrollStep : 0
                )
                raf(this.scrollABit)
            }
        }
    },
    created() {
        this.checkScroll()
        window.addEventListener('scroll', this.checkScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.checkScroll);
    },

};
</script>
