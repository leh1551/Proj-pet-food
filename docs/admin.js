

function addProduct() {
    // Obter valores do formulário
    var imageUrl = document.getElementById('productImage').value;
    var productName = document.getElementById('productName').value;
    var productPrice = document.getElementById('productPrice').value;
    var productQuantity = document.getElementById('productQuantity').value;

    // Criar elemento de produto
    var productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.innerHTML = `
        <img src="${imageUrl}" alt="${productName}" class="product-image">
        <div class="product-details">
            <h3>${productName}</h3>
            <p>Preço: R$ ${parseFloat(productPrice).toFixed(2)}</p>
            <p>Quantidade: ${productQuantity}</p>
        </div>
    `;

    // Adicionar produto à lista
    var productList = document.getElementById('productList');
    productList.appendChild(productElement);

    // Limpar formulário
    document.getElementById('productForm').reset();
}