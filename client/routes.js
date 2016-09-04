import Default from './components/layouts/default.vue';
import Auth from './components/layouts/auth.vue';
// import Home from './components/home.vue';
// import Project from './components/project.vue';
// import FourOhFour from './components/four_oh_four.vue';

import kamp from './content/kamp.js';

// let projects = {
//     kamp,
// };

export default {
    '/': {
        component: Default,
        page: 'home',
    },
    '/project/:projectName': {
        component: Default,
        // name: 'project',
        page: 'Project',
    },
    // '/edit/:projectName': {
    //     component: Auth,
    //     // name: 'project',
    //     page: 'Project',
    //     editMode: true,
    // },
    '/clever': {
        component: Default,
        page: 'Clever',
    },
    '/404': {
        component: Default,
        name: '404',
        page: 'FourOhFour',
    },
    // '/resolver/:projectName': {
    //     page: 'Project',
    //     alias: '/',
    //     component: {
    //         template: '',
    //         route: {
    //             canActivate(transition) {
    //
    //                 console.log(transition);
    //                 console.log(transition.to.params.projectName);
    //                 let projectName = transition.to.params.projectName;
    //                 let project = projects[projectName]
    //                 if (!project) {
    //                     transition.redirect('/project/foo');
    //                 }
    //                 // console.log(transition.to.router.go);
    //                 // transition.to.router.go({
    //                 //     name: 'project',
    //                 //     params: {
    //                 //         projectName,
    //                 //     },
    //                 //     replace: false,
    //                 // });
    //                 // setTimeout(() => {
    //                 // }, 1000)
    //             }
    //         }
    //     }
    // },
};
