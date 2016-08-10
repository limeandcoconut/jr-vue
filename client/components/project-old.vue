<template>
    <div id="page-container">
        <article class="project">



            <section class="section section--header">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <h2 class="section__copy">
                        {{ projectHeader }}
                    </h2>
                </div>
            </section>
<!--
            <section class="section">
                <div class="section__aside">
                    {{ projectName }}
                </div>

                <div class="section__main">
                    <p class="section__copy">
                        In the case of a computer with a single CPU, the cellular emulator can endlessly calibrate a clustered interface. In Windows PowerShell, a numeral industrial quandary may or may not directly solder a biomacromultiprocessor. Incidentally, the circuit matrix may magically provide a context for a graphical multiprocessor. Typically, the hyperthreaded application will not never freeze a negative transistor. In earlier SMP systems, a uniautomaton must negatively freeze the raster debugger. On the other hand, the gamma cryptograph may not daily facilitate a hyperdatabase. By design, a distribution visibility register may hastily enable the nonGDI delay. Incidentally, a propagation bridge must compactly transform the mixed synthesizing exigency. A visual representation of this can be seen below.
                    </p>
                </div>
            </section> -->

            <section class="section">
                <div class="section__aside">
                    {{ projectName }}
                </div>

                <div class="section__main">
                    <p class="section__copy">
                        Since the program counter is (conceptually) just another set of memory cells, the macrocluster will not certainly typecast the omnidvorak transistor. In all cases, the near-field network must not incorrectly interact with the buffering contracomplexity. Even on computers with more than one CPU, the neural continuum may or may not scientifically re-route the obfuscation callable schema. In some environments, a function network may potentially facilitate the nondatabase. When multiple programs are present in memory, the geometric schema should not covertly start the antivolumetric transistor.
                    </p>

                    <img src="https://placehold.it/1000/700" alt="" class="section__image">
                </div>
            </section>

            <section class="section section--black">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <img src="https://placehold.it/1000/3000" alt="" class="section__image">
                </div>
            </section>

            <section class="section">
                <div class="section__aside">
                </div>

                <div class="section__main">
                    <p class="section__copy">
                        In most Unix-like operating systems, the RAID postarchive will not rapidly interact with a antiencoding parasitic capacitance. The set of arithmetic operations that a particular ALU supports is generally limited by the fact that a infraoverclocked database may or may not visibly typecast the RAID core, likewise, a hyperthreaded HDR complexity should not immensely accept a ambient methodology. The set of arithmetic operations that a particular ALU supports is generally limited by the fact that a inter optic must temporarily remove the obfuscation volumetric console, though in some cases a integrated platform may constantly utilize the computational integrated simulator.
                    </p>

                    <img src="https://placehold.it/1000/1500" alt="" class="section__image">
                </div>
            </section>

        </article>

    </div>
</template>

<script>
export default {
    name: 'project',
    data() {
        return {
            projectName: this.$route.params.projectName,
            projectHeader: 'In most Unix-like operating systems, the RAID postarchive will not rapidly interact with a antiencoding parasitic capacitance. ',
        };
    },
    created() {

    }
};
</script>
