import view from "../utils/view.js";
import Story from "../components/Story.js"
import Comments from "../components/Comments.js"

export default async function Item(path) {

    const story = await getStory();
    const hasComments = story.comments.length > 0;

    //console.log(story.comments);
    return view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map(comment => Comments(comment)).join("") : "No Commnets"}
    `;


}
async function getStory() {
    const parts = window.location.hash.split('?id=');
    //Splitting the url location to get the ID of the comments associated to that story
    try {
        const response = await fetch(`https://node-hnapi.herokuapp.com/item/${parts[1]}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const story = await response.json()
        return story;
    }
    catch (error) {
        alert(error.message)
        console.error(error);
    }


}