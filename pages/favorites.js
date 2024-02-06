import store from "../store.js";
import view from "../utils/view.js";
import checkFavorite from "../utils/checkFavorite.js";
import Story from "../components/Story.js";



export default function Favorites() {
    const { favorites } = store.getState();

    const hasFavorited = favorites.length > 0;

    view.innerHTML = `<div>
    ${hasFavorited ? favorites.map(story => Story({
        ...story,
        isFavorite: checkFavorite(favorites, story)
    })).join('') : "Add favorites"}
    </div>`

    document.querySelectorAll('.favorite').forEach(favButton => {
        favButton.addEventListener('click', function () {
            const story = JSON.parse(this.dataset.story);
            const isFavorited = checkFavorite(favorites, story);

            if (isFavorited) {
                store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })
            } else {
                store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })
            }
            Favorites();
        });
    });


}