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

const cartButton = document.getElementById("btn-sacola");
const cartCount = document.getElementById("cart-count");

let cartItemCount = 0;

// Adicionar um item à sacola
function addItemToCart() {
    cartItemCount++;
    updateCartCount();
}

// Atualizar a contagem na sacola
function updateCartCount() {
    cartCount.textContent = cartItemCount;
}

// Evento de clique para adicionar um item
cartButton.addEventListener("click", () => {
    addItemToCart();
});

// Inicialização da contagem
updateCartCount();


function calcularTotal() {
    var quantidade = parseFloat(document.getElementById("quantidade").value);
    var precoPorItem = parseFloat(document.getElementById("precoPorItem").value);

    var total = quantidade * precoPorItem;

    if (!isNaN(total)) {
        document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);
    } else {
        document.getElementById("total").textContent = "Total: R$ 0.00";
    }
}