import view from '../utils/view.js';
import Story from '../components/Story.js';
import store from '../store.js';
import checkFavorite from '../utils/checkFavorite.js';

export default async function Stories(path) {
    const { favorites } = store.getState();
    console.log(favorites);
    const stories = await getStories(path);

    view.innerHTML = `<div>
    ${stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('')}
    </div>`;

    //Selecting all favorites

    document.querySelectorAll('.favorite').forEach(favButton => {
        favButton.addEventListener('click', async function () {
            const story = JSON.parse(this.dataset.story);
            const isFavorited = checkFavorite(favorites, story);

            if (isFavorited) {
                store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })
            } else {
                store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })
            }
            await Stories(path);
        });
    });

}

// Unofficial Hacker News api: https://node-hnapi.herokuapp.com
// Documentation: 	"https://github.com/cheeaun/node-hnapi/wiki/API-Documentation"


// Data is in JSON format
// My routes -> API routes
// / (top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
// /jobs (Job) -> /jobs


// Using the paths above get data from API
async function getStories(path) {
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new';
    const isAskRoute = path === '/ask';
    const isShowRoute = path === '/show';
    const isJobRoute = path === '/jobs';
    const apiRoute = "https://node-hnapi.herokuapp.com";


    if (isHomeRoute) {
        path = '/news'
        try {
            const response = await fetch(`${apiRoute}${path}`);
            if (!response.ok) {
                throw new Error(response.status);
            }
            const stories = await response.json()
            return stories
        } catch (error) {
            alert(error.message)
            console.error(error)
        }
    }
    else if (isNewRoute) {
        path = '/newest'
        try {
            const response = await fetch(`${apiRoute}${path}`);
            if (!response.ok) {
                throw new Error(response.status);
            }
            const stories = await response.json()
            return stories
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    }
    else if (isAskRoute) {
        path = '/ask'
        try {
            const response = await fetch(`${apiRoute}${path}`);
            if (!response.ok) {
                throw new Error(response.status);
            }
            const stories = response.json();
            return stories;
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
    }
    else if (isShowRoute) {
        path = '/show'
        try {
            const response = await fetch(`${apiRoute}${path}`)
            if (!response.ok) {
                throw new Error(response.status)
            }
            const stories = response.json();
            return stories;
        }
        catch (error) {
            alert(error.message);
            console.error(error);
        }
    }
    else if (isJobRoute) {
        path = '/jobs'
        try {
            const response = await fetch(`${apiRoute}${path}`);
            if (!response.ok) {
                throw new Error(response.status);
            }
            const stories = response.json();
            return stories;
        }
        catch (error) {
            alert(error.message);
            console.error(error);
        }
    }

}
