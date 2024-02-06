import RouterHandler from './router.js'
import './store.js'

window.onhashchange = () => {
    console.log('Changed')
    activeLink();
}
function activeLink() {
    const links = document.querySelectorAll('.header-link');
    links.forEach(link => {
        //Getting the href from each link
        const linkPath = link.getAttribute('href');
        const currentPath = window.location.hash;

        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })

}

class App {
    constructor() {
        new RouterHandler();
    }
}

new App();