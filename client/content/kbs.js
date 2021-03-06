export default {
    projectName: 'KBS',
    projectUrl: 'kbs',
    projectCoverImage: {
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-cover.jpg',
        alt: 'A beautiful image representing this project',
    },
    projectMainImage: {
        heroMobile: true,
        // misalign: true,
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs.png',
        alt: 'A beautiful image representing this project',
        style: {
            top: 0,
            right: 0,
            height: '830px',
        },
    },
    projectInfo: {
        color: '#459db7',
        copy: `KBS is one of the nation’s largest commercial real estate buyers, with properties from Newark, NJ to Newark, CA. Yeah, there’s a Newark, CA.
 <br>
 <br>
KBS wanted to launch an app where tenants can book a conference space in any KBS-owned property nationwide. The app also needed to be desktop-accessible, so clients could book before heading out the door.
 <br>
 <br>
I designed custom icons for the app and simplified the booking process into just a few steps. The end result was a streamlined reservation tool in a mobile app.  `,
    },
    sections: [
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'fader',
                    slides: [
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-fader-1.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-fader-2.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-fader-3.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-fader-4.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-fader-5.png',
                            alt: 'A beautiful image representing this project',
                        },
                    ],
                },
            ],
        },
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'img',
                    auto: true,
                    spaced: true,
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-single-1.png',
                    alt: 'A beautiful image representing several pages',
                    style: {
                        width: '50%',
                    },
                },
            ],
        },
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'img',
                    auto: true,
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-single-2.png',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'img',
                    auto: true,
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kbs-single-3.png',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
    ],
}
