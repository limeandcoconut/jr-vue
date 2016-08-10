<template>
    <div id="page-container">
        <article class="project">



            <section class="section section--header section--undiv">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <h2 class="section__copy section__copy--bold">
                        My name is James Ramirez. I love to make things that are useful and usable. I’ve had the privilege to work on awesome projects that cover different spectrums of design from digital, branding and print. Currently working as Lead Designer at Snapshot.
                    </h2>
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Recent Projects.
                </div>
                <div class="section__main">
                    <a v-link="'/project/' + project.projectUrl" v-for="project in projects" class="project">
                        <div v-if="project.projectMainImage.src" class="project__img-container">
                            <img :src="project.projectMainImage.src" :alt="project.projectMainImage.alt" class="section__image project__img">
                            <div @mousemove="recordHover" class="project__img-overlay" :index="$index">
                                <div @mousemove.stop="recordHoverFromChild" class="project__overlay-text" v-show="activeHover == $index" :style="{ left: overlayLeft, top: overlayTop }">
                                    {{ project.projectName }}
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- </template> -->
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Here is some past work that I still like showing off.
                </div>
                <div class="section__main">
                    <a href="#!" class="work-link">Equip <span class="super">2014</span></a>
                    <a href="#!" class="work-link">Logos <span class="super">2014</span></a>
                    <a href="#!" class="work-link">Don't Buy The Tie <span class="super">2014</span></a>
                    <a href="#!" class="work-link">Door Of Hope <span class="super">2014</span></a>
                    <a href="#!" class="work-link">P Rod shoe box <span class="super">2014</span></a>
                    <a href="#!" class="work-link">Logos <span class="super">2014</span></a>
                    <a href="#!" class="work-link">Door Of Hope <span class="super">2014</span></a>

                    <div class="clearfix"></div>
                    <!-- <div class="section__copy">
                        In most Unix-like operating systems, the RAID postarchive will not rapidly interact with a antiencoding parasitic capacitance.
                    </div> -->
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Some achievements I'm proud of.
                </div>
                <div class="section__main">
                    <div class="section__copy">
                        Graduated Bible College in Hungry, EU. I was a <span class="link link--underline">youth pastor</span>. <span class="link link--underline">Graduated</span> college with a Bacholars in Web. I bought a <span class="link link--underline">house</span>. I got <span class="link link--underline">married</span> and soon to be a <span class="link link--underline">dad</span>.
                    </div>
                </div>
            </section>

            <section  class="section section--alt">
                <div class="section__aside">
                    Follow me.
                </div>
                <div class="section__main">
                    <div class="section__copy">
                        <a href="#!" class="link link--follow">Twitter</a> <a href="#!" class="link link--follow">Dribbble</a>
                    </div>
                </div>
            </section>

        </article>
    </div>
</template>

<script>

import {kamp, test} from '../content/index.js';

let projects = {
    kamp,
    test,
};

export default {
    data() {
        return {
            projects,
            overlayLeft: 0,
            overlayTop: 0,
            activeHover: 0,
        };
    },
    methods: {
        recordHover(event) {
            this.recordedActiveHover = event.srcElement.getAttribute('index');
            this.recordedHoverLeft = event.offsetX;
            this.recordedHoverTop = event.offsetY;

            window.raf(this.followText);
        },
        recordHoverFromChild(event) {
            this.recordedActiveHover = event.srcElement.parentElement.getAttribute('index');

            this.recordedHoverLeft = event.offsetX + event.target.offsetLeft - (event.target.offsetWidth / 2);
            this.recordedHoverTop = event.offsetY + event.target.offsetTop - (event.target.offsetHeight / 3);

            window.raf(this.followText);
            event.stopPropagation();
            return false;
        },
        followText() {
            this.overlayLeft = this.recordedHoverLeft + 'px';
            this.overlayTop = this.recordedHoverTop + 'px';
            this.activeHover = this.recordedActiveHover;
        }
    },
};
</script>

<style lang="scss">
</style>
