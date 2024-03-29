export default function Story(story) {
    //console.log(story);
    return `
    <div class="story">
        <div>
            <span class="grey">${story.index || ""}</span>
            <span class="upvote">
                <img src="images/like.png">
            </span>
            <a href="${story.url}">${story.title}</a>
            <span>(${story.domain})</span>
        </div>
        <div>
            <div class="grey">
                ${story.points} points by ${story.user} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                    ${story.comments_count} comments
                </a>
                |
                <span class="favorite" data-story='${JSON.stringify(story)}'>
                    <img class="heart" src="images/heart.png">
                    ${story.isFavorite ? "Remove Favorite" : "Add Favorite"}
                </span>
            </div>
        </div>
    </div>
    <hr>
    `;
}