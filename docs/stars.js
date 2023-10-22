const stars = document.querySelectorAll('.rating span');
const ratingText = document.getElementById('ratingText');
const commentText = document.getElementById('commentText');
const commentBox = document.getElementById('comment');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        ratingText.innerText = `Você deu uma avaliação de ${rating} estrela(s).`;

        stars.forEach(s => {
            if (parseInt(s.getAttribute('data-rating')) <= rating) {
                s.innerText = '★';
            } else {
                s.innerText = '☆';
            }
        });
    });
});

document.getElementById('submit').addEventListener('click', () => {
    const comment = commentBox.value;
    commentText.innerText = `Seu comentário:${comment}`;
});