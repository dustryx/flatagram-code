document.addEventListener('DOMContentLoaded', function () {

    fetch('http://localhost:3000/images/1?_embed=comments')
        .then(response => response.json())
        .then(data => {
        
            const titleElement = document.getElementById('card-title');
            titleElement.textContent = data.title;

            
            const imageElement = document.getElementById('card-image');
            imageElement.setAttribute('src', data.image);
            imageElement.setAttribute('alt', data.title);


            const likeCountElement = document.getElementById('like-count');
            likeCountElement.textContent = `${data.likes} likes`;

    
            const commentsList = document.getElementById('comments-list');
            commentsList.innerHTML = ''; 
            data.comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.content;
                commentsList.appendChild(li);
            });
        });

        
    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', function () {

        const likeCountElement = document.getElementById('like-count');
        const currentLikes = parseInt(likeCountElement.textContent);
        likeCountElement.textContent = `${currentLikes + 1} likes`;
    });


    const commentForm = document.getElementById('comment-form');
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment');
        const commentContent = commentInput.value;


        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentContent;
        commentsList.appendChild(newComment);

    
        commentInput.value = '';
    });
});
