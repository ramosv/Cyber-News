//Return comments look and feel 8^)

export default function Comment(comm) {

    const nested = comm.comments.length > 0;

    return `
    <div class="nested-comments-${comm.level}">
        <p class="comment-header">
            ${comm.user} | ${comm.time_ago}
        </p>
        ${comm.content}
        ${nested ? comm.comments.map(comment => Comment(comment)).join('') : ""}
    </div>
    `
}