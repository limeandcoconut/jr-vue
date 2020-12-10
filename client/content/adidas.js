export default {
    projectName: 'Adidas Women\'s',
    projectUrl: 'adidas',
    projectCoverImage: {
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-cover.jpg',
        alt: 'A beautiful image representing this project',
    },
    projectMainImage: {
        src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens.png',
        alt: 'A beautiful image representing this project',
        left: true,
        // misalign: true,
        style: {
            top: '150px',
            right: 0,
            height: '560px',
        },
    },
    projectInfo: {
        color: '#24332C',
        copy: `A collaboration with Kamp Grizzly, adidas’ Spring Issue was a digital journey through the personal sport of eight different athletes and influencers, featuring adidas women’s spring line. Leading up to launch, each of the athletes/influencers took over adidas’ social for a week-a first for the sportswear giant, and the women’s brand in particular.
        <br>
        <br>
        I led digital experience for the website and mobile design. In the process, I presented eight unique layouts for each athlete, pulling from their personality to define the design. This all went down in a month’s turnaround.  `,
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
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-single.png',
                    alt: 'A beautiful image representing this project',
                },
            ],
        },
        {
            sectionColor: '#191919',
            sectionContent: [
                {
                    type: 'img',
                    src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-multi.png',
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
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-fader-1.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-fader-2.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-fader-3.png',
                            alt: 'A beautiful image representing this project',
                        },
                        {
                            src: 'https://jr-vue.s3-us-west-2.amazonaws.com/project-adidas-womens-fader-4.png',
                            alt: 'A beautiful image representing this project',
                        },
                    ],
                },
            ],
        },
    ],
}
