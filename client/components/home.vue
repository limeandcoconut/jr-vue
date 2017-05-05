<template>
    <div id="page-container home">
        <article class="project">



            <section class="section section--header-align">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <h2 class="section__copy section__copy--large">
                        Crafting meaningful and memorable digital experiences for nonprofits and lifestyle brands.
                    </h2>
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Projects
                </div>
                <div class="section__main">
                    <a
                    v-link="'/project/' + project.projectUrl"
                    v-for="project in projects"
                    class="project"
                    >
                        <div
                        v-if="project.projectCoverImage.src"
                        class="project__img-container hover-highlight"
                        >
                            <img
                            :src="project.projectCoverImage.src"
                            :alt="project.projectCoverImage.alt"
                            class="section__image project__img"
                            />
                            <!-- <div @mousemove="recordHover" class="project__img-overlay" :index="$index"> -->
                                <div
                                class="project__overlay-text hover-highlight__follow"
                                :style="{ left: overlayLeft, top: overlayTop, color: project.projectCoverImage.overlayColor || '#000'}"
                                >
                                    {{ project.projectName }}
                                </div>
                                <div @mousemove="recordHover"  class="project__hover-target hover-highlight__target"></div>
                            </div>
                        </div>
                    </a>
                    <!-- </template> -->
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Facts
                </div>
                <div class="section__main">
                    <div class="section__copy section__copy--med">

                        Studied Web Design at AI Portland.
                        <!--<span class="hover-highlight hover-highlight--inline link link--underlit">
                            youth pastor
                            <img class="hover-highlight__follow hover-highlight__follow--img" src="/img/highlight-youth-pastor.jpg" :style="{ left: overlayLeft, top: overlayTop }"/>
                            <span class="hover-highlight__target hover-highlight__target--inline" @mousemove="recordHover">target</span>
                        </span>
                        . Graduated college with a
                        <span class="hover-highlight hover-highlight--inline link link--underlit">
                            Bacholars in Web
                            <img class="hover-highlight__follow hover-highlight__follow--img" src="/img/highlight-graduated.jpg" :style="{ left: overlayLeft, top: overlayTop }"/>
                            <span class="hover-highlight__target hover-highlight__target--inline" @mousemove="recordHover">target</span>
                        </span>
                        . I >-->
                        <br>
                        Freelanced for a while, then joined Clever.ly as lead designer.
                        <br>
                        Likes clean, simple, thoughtful design.
                        <br>
                        Married to
                        <span class="hover-highlight hover-highlight--inline link link--underlit">
                            Shawna.
                            <img class="hover-highlight__follow hover-highlight__follow--img" src="/img/highlight-married.jpg" :style="{ left: overlayLeft, top: overlayTop }"/>
                            <span class="hover-highlight__target hover-highlight__target--inline" @mousemove="recordHover">target</span>
                        </span>
                        <br>
                        Dad to
                        <span class="hover-highlight hover-highlight--inline link link--underlit">
                            Jack Wylie Ramirez.
                            <img class="hover-highlight__follow hover-highlight__follow--img" src="/img/highlight-dad.jpg" :style="{ left: overlayLeft, top: overlayTop }"/>
                            <span class="hover-highlight__target hover-highlight__target--inline" @mousemove="recordHover">target</span>
                        </span>
                        <br>
                        Bought a
                        <span class="hover-highlight hover-highlight--inline link link--underlit">
                            house.
                            <img class="hover-highlight__follow hover-highlight__follow--img" src="/img/highlight-house.jpg" :style="{ left: overlayLeft, top: overlayTop }"/>
                            <span class="hover-highlight__target hover-highlight__target--inline" @mousemove="recordHover">target</span>
                        </span
                        <br>
                        Has some theories on Tupac.
                    </div>
                </div>
            </section>

            <section  class="section">
                <div class="section__aside">
                    Follow
                </div>
                <div class="section__main">
                    <div class="section__copy section__copy--med">
                        <a href="https://twitter.com/ramirezcjames" target="_blank" class="link link--follow">Twitter </a>   <a href="htttp://dribbble.com/jamescramirez" target="_blank" class="link link--follow">       Dribbble</a>
                    </div>
                </div>
            </section>

        </article>
    </div>
</template>

<script>

import {kamp, adidas, equip, kbs, misc} from '../content/index.js';

let projects = {
    adidas,
    kamp,
    equip,
    kbs,
    misc,
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

            // console.log(event.offsetX. ' ' '
            // );
            console.log(this.recordedHoverLeft);

            window.raf(this.followText);
        },
        recordHoverFromChild(event) {
            this.recordedActiveHover = event.srcElement.parentElement.getAttribute('index');

            this.recordedHoverLeft = event.offsetX + event.target.offsetLeft - (event.target.offsetWidth / 2);
            this.recordedHoverTop = event.offsetY + event.target.offsetTop - (event.target.offsetHeight / 2);

            // console.log(event.offsetX, '  ', this.recordedHoverLeft + 150);
            // console.log(event.offsetY, '  ', this.recordedHoverTop);

            // console.log(event.offsetX);
            // console.log(event.target.offsetLeft);
            // console.log(event.target.offsetWidth/2);
            // console.log(event.target.offsetHeight);

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
