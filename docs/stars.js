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

document.getElementById('btn-avaliar').addEventListener('click', () => {
    const comment = commentBox.value;
    commentText.innerText = `Seu comentário:${comment}`;
});

const cartCount = document.getElementById("cart-count");
let cartItemCount = 0;

function addItemToCart() {
  cartItemCount++;
  updateCartCount();
}

function updateCartCount() {
  cartCount.textContent = cartItemCount;
}

function calcularTotal() {
  const quantidade = parseFloat(document.getElementById("quantidade").value);
  const precoPorItem = parseFloat(document.getElementById("precoPorItem").value);

  let total = quantidade * precoPorItem;

  if (isNaN(total)) {
    total = 0;
  }

  document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);
}

// Inicialização da contagem
updateCartCount();

// Adicionar um item à sacola quando o botão "btn-sacola" é clicado
document.getElementById("btn-sacola").addEventListener("click", addItemToCart);