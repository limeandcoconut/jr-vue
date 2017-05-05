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
        copy: 'Working with awesome people at Kamp Grizzly. I was charged with designing the interactive experience for the Spring Issue.',
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
