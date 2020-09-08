const applications = [
    {
        name: 'Spot Analysis',
        background: '/media/project-backgrounds/parking-spot.jpg',
        techs: ['Python', 'Django', 'PostgreSQL'],
        codeURL: '',
        viewURL: '',
    },
    {
        name: 'Where\'s Waldo',
        background: './media/project-backgrounds/wheres-waldo.webp',
        techs: ['React', 'Javascript', 'Firebase'],
        codeURL: 'https://github.com/nima-m-git/wheres_waldo',
        viewURL: 'https://wheres-waldo-2340a.web.app/',
    },
    {
        name: 'To-Do',
        background: './media/project-backgrounds/to-do.webp',
        techs: ['React', 'Javascript', 'Firebase'],
        codeURL: 'https://github.com/nima-m-git/to-do',
        viewURL: 'https://to-do-23867.web.app/',
    },
    {
        name: 'Battleship',
        background: './media/project-backgrounds/battleship.jpg',
        techs: ['React', 'Javascript'],
        codeURL: 'https://github.com/nima-m-git/battleship',
        viewURL: 'https://nima-m-git.github.io/battleship/',
    },
    {
        name: 'Weather Widget',
        background: './media/project-backgrounds/weather-widget.png',
        techs: ['React', 'Javascript'],
        codeURL: 'https://github.com/nima-m-git/weather-app-react',
        viewURL: 'https://github.com/nima-m-git/weather-app-react',
    },
    {
        name: 'Giphy Api',
        background: './media/project-backgrounds/giphy.jpg',
        techs: '',
        codeURL: '',
        viewURL: '',
    },
    {
        name: 'Library',
        background: './media/project-backgrounds/library.jpg',
        techs: ['React', 'Javascript', 'CSS'],
        codeURL: 'https://github.com/nima-m-git/library-react',
        viewURL: 'https://nima-m-git.github.io/library-react/',
    },
    {
        name: 'Tic-Tac-Toe',
        background: './media/project-backgrounds/tic-tac-toe.webp',
        techs: ['Javascript', 'CSS'],
        codeURL: 'https://github.com/nima-m-git/tic-tac-toe',
        viewURL: 'https://nima-m-git.github.io/tic-tac-toe/',
    },
    {
        name: 'Etch-A-Sketch',
        background: './media/project-backgrounds/etch-a-sketch.jpg',
        techs: ['Javascript', 'CSS'],
        codeURL: 'https://github.com/nima-m-git/etch-a-sketch',
        viewURL: 'https://nima-m-git.github.io/etch-a-sketch/',
    },
    {
        name: 'Pomodoro Clock',
        background: './media/project-backgrounds/pomodoro.png',
        techs: ['Javascript'],
        codeURL: 'https://github.com/nima-m-git/Pomodoro',
        viewURL: 'https://nima-m-git.github.io/Pomodoro/',
    },
    {
        name: 'Calculator',
        background: './media/project-backgrounds/calculator.jpg',
        techs: ['Javascript', 'CSS'],
        codeURL: 'https://github.com/nima-m-git/calculator',
        viewURL: 'https://nima-m-git.github.io/calculator/',
    }
]


const clones = [
    {
        name: 'Newsweek',
        background: 'https://hyperpix.net/wp-content/uploads/2020/07/newsweek-logo-font-free-download.jpg',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/newsweek-mock',
        viewURL: 'https://nima-m-git.github.io/newsweek-mock/',
    },
    {
        name: 'TheNextWeb',
        background: 'https://www.atomicreach.com/hubfs/Atomic_Reach_May2018/images/tnw-thenextweb-logo.png',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/thenextweb-mock',
        viewURL: 'https://nima-m-git.github.io/thenextweb-mock/',
    },
    {
        name: 'Apple',
        background: 'https://www.techilife.com/wp-content/uploads/2019/05/Apple-Logo.png',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/Apple-mock',
        viewURL: 'https://nima-m-git.github.io/Apple-mock/',
    },
    {
        name: 'New York Times',
        background: 'https://sites.bu.edu/reinhartlab/files/2019/04/new-york-times-logo-large-e1439227085840.jpg',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/NYT-mock',
        viewURL: 'https://nima-m-git.github.io/NYT-mock/',
    },
    {
        name: 'Mint',
        background: 'https://i.pinimg.com/originals/b9/be/1c/b9be1ce0c72f29cb9722ee10e5b35f10.png',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/mint-clone',
        viewURL: 'https://nima-m-git.github.io/mint-clone/',
    },
    {
        name: 'The Odin Project',
        background: 'https://www.theodinproject.com/assets/og-logo-003bdac3098010b4f1143000a941b80c67eebd74fbc6f36b2e7ef92dd03e8020.png',
        techs: ['CSS'],
        codeURL: 'https://github.com/nima-m-git/framework-test-odin-mock',
        viewURL: 'https://nima-m-git.github.io/framework-test-odin-mock/',
    }
]



const misc = [
    {
        name: 'CSS Framework',
        background: '',
        techs: ['CSS', 'Sass'],
        codeURL: 'https://github.com/nima-m-git/grid-framework',
        viewURL: 'https://nima-m-git.github.io/framework-test-odin-mock/',
    }
]


const projects = [applications, clones, misc]
// change: array name to string? revert to object and use key names?
// reduce redundancy
const groupNames = ['applications', 'clones', 'misc']

export { projects, groupNames }