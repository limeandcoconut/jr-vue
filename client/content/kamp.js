export default {
    projectName: 'Kamp Grizzly',
    projectUrl: 'kamp',
    projectCoverImage: {
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kamp-grizzly-cover.jpg',
        alt: 'A beautiful image representing this project',
    },
    projectMainImage: {
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kamp-grizzly.png',
        alt: 'A beautiful image representing this project',
        left: true,
        style: {
            top: '150px',
            right: 0,
            height: '560px',
        },
        // misalign: true,
    },
    projectInfo: {
        color: '#454444',
        copy: 'Kamp Grizzly is a studio specializing in brand activation and generally rad work. For their new website, I crafted a clean, bold, straightforward glimpse into their portfolio and process. The design is heavy on visuals and light on copy, putting the focus on the work itself.',
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
                copy: 'kampgrizzly.com',
                link: true,
                href: 'http://kampgrizzly.com',
            },
        ],
    },
    sections: [
        {
            sectionColor: '#191919',
            sectionContent: [
                {
                    type: 'img',
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kamp-grizzly-single.png',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
        {
            sectionColor: '191919',
            sectionContent: [
                {
                    type: 'img',
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-kamp-grizzly-multi.png',
                    alt: 'A beautiful image representing several pages',
                },
            ],
        },
    ],
}
