export default {
    projectName: 'KBS',
    projectUrl: 'kbs',
    projectCoverImage: {
        src: '/img/project-kbs-cover.jpg',
        alt: 'A beautiful image representing this project',
    },
    projectMainImage: {
        // hero: true,
        // misalign: true,
        src: '/img/project-kbs.png',
        alt: 'A beautiful image representing this project',
        style: {
            top: 0,
            right: 0,
            height: '694px',
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
        contextInfo: [
            {
                copy: 'Working With',
            },
            {
                copy: 'Clever.ly',
                spaced: true,
            },
            {
                copy: 'Visit The Site',
            },
            {
                copy: 'adidas.com/us/springissue',
                link: true,
                href: 'http://adidas.com/us/springissue',
            },
        ],
    },
    sections: [
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'fader',
                    slides: [
                        {
                            src: '/img/project-kbs-fader-1.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: '/img/project-kbs-fader-2.png',
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
                    src: '/img/project-kbs-single-1.png',
                    alt: 'A beautiful image representing several pages',
                },
            ],
        },
        {
            sectionColor: '#E0DEDC',
            sectionContent: [
                {
                    type: 'img',
                    auto: true,
                    src: '/img/project-kbs-single-2.jpg',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
    ],
}
