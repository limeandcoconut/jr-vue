<template>
    <div class="fader">
        <img
        v-for="slide in slides"
        track-by="$index"
        class="fader__slide section__image"
        :class="{ 'fader__slide--active' : currentSlide === $index }"
        @click="fade"
        :src="slide.src"
        :alt="slide.alt"
        >

        <div class="fader__indicator">
            <span class="fader__incicator-number">{{ currentSlide }}</span>
            / {{ slideCount }}
        </div>
    </div>
</template>

<script>

// import kamp from '../content/kamp.js';
// import Fader from './fader.vue';
// import {kamp, adidas} from '../content/index.js';
//
// let projects = {
//     kamp,
//     // test,
//     adidas,
// };

export default {
    name: 'fader',
    props: ['slides'],
    methods: {
        fade() {
            // console.log(event.srcElement.getAttribute('index'));
            // this.currentSlide = this.currentSlide >= this.slideCount ? 0 : this.currentSlide + 1;

            this.currentSlide += 1;
            if (this.currentSlide >= this.slideCount) {
                this.currentSlide = 0;
            }
        },
    },
    data() {
        // console.log(this.slides);
        return {
            slideCount: this.slides.length,
            currentSlide: 0,
        };
    }
    // activate() {
    // //     // let project = this.retrieveProject();
    // //     // // let editMode = this.$route.editMode || false;
    // //     //
    // //     console.log(this);
    //     console.log(this.slides);
    //     // return {
    //         // slides,
    //         // editMode,
    //     // };
    // },
    // watch: {
    //     $route() {
    //         this.project = this.retrieveProject();
    //     },
    // },
    // created() {
    // },
    // methods: {
    //     retrieveProject() {
    //         let path = this.$route.path;
    //         if (!path || !/^\/project/.test(path)) {
    //             return;
    //         }
    //
    //         let projectName = this.$route.params.projectName;
    //         let project = projects[projectName];
    //
    //         if (!project) {
    //             this.$router.go({
    //                 path: '/404',
    //             });
    //         }
    //
    //         return project;
    //     }
    // },
    // route: {
        // canReuse() {
        //     return false;
        //     console.log('yo');
        // },
        // canActivate(transition) {
        //     let projectName = transition.to.params.projectName;
        //     console.log('yo');
        //     let project = this.projects[projectName]
        //     if (!project) {
        //         transition.redirect('/404');
        //     }
        // },
        // canDeactivate(transition) {
        //     console.log('You are not allowed to leave.');
        //     transition.abort();
        // },
    // },

};
</script>
