
const getProductButton = document.getElementById('getProductButton');
const deleteProductButton = document.getElementById('deleteProductButton');
const patchProductButton = document.getElementById('patchProductButton');

getProductButton.addEventListener('click', getProduct);
deleteProductButton.addEventListener('click', deleteProduct);
patchProductButton.addEventListener('click', patchProduct);

async function addProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  const productQuantity = parseInt(document.getElementById('productQuantity').value);

  

  const productData = {
      nome: productName,
      preco: productPrice,
      quantidade: productQuantity
  };

  try {
      const response = await fetch('http://localhost:3003/api/cadastrar-produto', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
      });

      if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Produto cadastrado:', result);
      // Adicione lógica para exibir ou manipular a lista de produtos aqui
  } catch (error) {
      console.error('Erro:', error);
  }
}

async function getResource(resourceId) {
  const productName = document.getElementById('productName').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);
  const productQuantity = parseInt(document.getElementById('productQuantity').value);
  const productData = {
      nome: productName,
      preco: productPrice,
      quantidade: productQuantity
  };



  try {
    const url = `http://localhost:3003/api/produtos/${resourceId}`;
    const options = {
        method: 'GET',
    };
      const response = await fetch(url, options);

      if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Retorno de Produtos:', result);
      // Adicione lógica para exibir ou manipular a lista de produtos aqui

      return result;
  } catch (error) {
      console.error('Erro:', error);
  }
}

async function patchProduct(resourceId, updatedData) {
  const url = `http://localhost:3003/api/produtos/:id${resourceId}`;
  const options = {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
  };

  try {
      const response = await fetch(url, options);

      if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Atualização de Produto:', result);
      return result;
  } catch (error) {
      console.error('Erro:', error);
  }
}

async function deleteResource(resourceId) {
  const url = `http://localhost:3003/api/produtos/:id/${resourceId}`;
  const options = {
      method: 'DELETE',
  };

  try {
      const response = await fetch(url, options);

      if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Produto excluído:', result);
      return result;
  } catch (error) {
      console.error('Erro:', error);
  }
}

// Exemplos de uso
addProduct(); // Adiciona um novo produto
getResource(1); // Obtém um produto com o ID 1
updateResource(1, { nome: 'Novo Nome' }); // Atualiza um produto com o ID 1
deleteResource(1); // Exclui um produto com o ID 1
