export default function checkFavorite(favorites, story) {
    // favorites.forEach(element => {
    //     if (element.id === story.id) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // });
    return favorites.some(favorite => favorite.id === story.id);
}