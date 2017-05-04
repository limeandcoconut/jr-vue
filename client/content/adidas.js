export default {
    projectName: 'Adidas Women\'s',
    projectUrl: 'adidas',
    projectCoverImage: {
        src: '/img/project-adidas-womens-cover.jpg',
        alt: 'A beautiful image representing this project',
    },
    projectMainImage: {
        src: '/img/project-adidas-womens.png',
        alt: 'A beautiful image representing this project',
        // misalign: true,
    },
    projectInfo: {
        color: '#02c09d',
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
            sectionColor: '#f0efee',
            sectionContent: [
                {
                    type: 'img',
                    src: '/img/project-adidas-womens-single.jpg',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
        {
            sectionColor: '#191919',
            sectionContent: [
                {
                    type: 'img',
                    src: '/img/project-adidas-womens-multi.png',
                    alt: 'A beautiful image representing several pages',
                },
            ],
        },
        {
            sectionColor: '#fff',
            copyColor: '#000',
            sectionContent: [
                {
                    type: 'fader',
                    slides: [
                        {
                            src: '/img/project-adidas-womens-fader-1.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: '/img/project-adidas-womens-fader-2.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: '/img/project-adidas-womens-fader-3.png',
                            alt: 'A beautiful image representing this project',
                        },
                    ],
                },
            ],
        },
    ],
}
