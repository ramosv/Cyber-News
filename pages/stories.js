import view from '../utils/view.js';

export default async function Stories(path) {
    const stories = await getStories(path);
    console.log(stories)
    view.innerHTML = `<div>${JSON.stringify(stories)}</div>`;
    //view.innerHTML = `<div>${path}</div>`;
}

// Unoficial hackernews api
// https://node-hnapi.herokuapp.com
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

    if (isHomeRoute) {
        path = '/news'
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
            if (!response.ok) {
                throw new console.error(response.status);
            }
            const stories = await response.json()
            return stories
        } catch (error) {
            alert(error.message)
            console.error(error)
        }
    }

}
