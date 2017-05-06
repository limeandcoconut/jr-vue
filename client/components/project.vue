<template>
    <div id="page-container">
        <article class="project">



            <section
            class="section section--header section--hero"
            :class="{'section--header-mini': project.projectHeaderMini}"
            >
                <h2
                class="section__title"
                :class="{'section__title--center': project.projectTitleCenter}"
                >
                    {{ project.projectName }}
                </h2>

                    <img
                    v-if="project.projectMainImage"
                    :src="project.projectMainImage.src"
                    :alt="project.projectMainImage.alt"
                    class="section__image section__image--hero"
                    :style="project.projectMainImage.style"
                    >
                <!--<div class="section__right">
                    :class="{'section__image--hero': project.projectMainImage.hero}"
                </div>-->
            </section>

            <section
            v-if="project.projectInfo"
            class="section section--info section--split section--split-top"
            :style="{'background-color': project.projectInfo.color}"
            >
                <div class="section__primary">
                    <h2
                    class="section__copy section__copy--info"
                    v-html="project.projectInfo.copy"
                    >
                    </h2>
                </div>

                <div class="section__context">
                    <template v-for="context in project.projectInfo.contextInfo">
                        <div
                        v-if="!context.link"
                        class="context"
                        :class="{'context--spaced': context.spaced}"
                        >
                            {{context.copy}}
                        </div>
                        <a
                        v-else
                        :href="context.href"
                        target="_blank"
                        class="context context--link"
                        :class="{'context--spaced': context.spaced}"
                        >
                            {{context.copy}}
                        </a>
                    </template>
                </div>
            </section>

            <template v-for="section in project.sections">
                <section
                class="section"
                :style="{backgroundColor: section.sectionColor, color: section.copyColor}"
                >
                    <!-- v-if="section.color !== '#FFF'" -->
                <!-- <section v-else class="section"> -->

                    <div class="section__body">

                        <template v-for="content in section.sectionContent">
                            <p
                            v-if="content.type === 'copy'"
                            class="section__copy"
                            >
                                {{ content.content }}
                            </p>
                            <img
                            v-if="content.type === 'img'"
                            :src="content.src"
                            :alt="content.alt"
                            class="section__image"
                            :class="{
                                'section__image--full': content.full,
                                'section__image--spaced': content.spaced,
                                'section__image--auto': content.auto,
                            }"
                            >
                            <fader
                            v-if="content.type === 'fader'"
                            :slides="content.slides"
                            >

                            </fader>
                        </template>

                    </div>
                </section>
            </template>

            <!-- <button class="fab project__add-section-fab">+</button> -->



            <!-- <section class="section section--black">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <img src="/img/3000.jpeg" alt="" class="section__image">
                </div>
            </section>

            <section class="section">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <p class="section__copy">
                        In most Unix-like operating systems, the RAID postarchive will not rapidly interact with a antiencoding parasitic capacitance. The set of arithmetic operations that a particular ALU supports is generally limited by the fact that a infraoverclocked database may or may not visibly typecast the RAID core, likewise, a hyperthreaded HDR complexity should not immensely accept a ambient methodology. The set of arithmetic operations that a particular ALU supports is generally limited by the fact that a inter optic must temporarily remove the obfuscation volumetric console, though in some cases a integrated platform may constantly utilize the computational integrated simulator.
                    </p>

                    <img src="/img/1500.jpeg" alt="" class="section__image">
                </div>
            </section> -->

        </article>

    </div>
</template>

<script>

// import kamp from '../content/kamp.js';
import Fader from './fader.vue';
// console.log(Fader);
import {kamp, adidas, equip, kbs, miscellaneous} from '../content/index.js';

let projects = {
    adidas,
    kamp,
    equip,
    kbs,
    miscellaneous,
};

export default {
    name: 'project',
    data() {
        let project = this.retrieveProject();
        // let editMode = this.$route.editMode || false;

        return {
            project,
            // editMode,
        };
    },
    components: {
        Fader,
    },
    watch: {
        $route() {
            this.project = this.retrieveProject();
        },
    },
    created() {
    },
    methods: {
        retrieveProject() {
            let path = this.$route.path;
            console.log(path)
            console.log(projects[path])
            if (!path || !/^\/project/.test(path)) {
                return;
            }

            let projectName = this.$route.params.projectName;
            let project = projects[projectName];

            if (!project) {
                this.$router.go({
                    path: '/404',
                });
            }

            return project;
        }
    },
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
