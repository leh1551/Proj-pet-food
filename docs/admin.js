
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

async function getProductButton() {

    try {
        const response = await fetch('http://localhost:3003/api/produtos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }

        const dados = await response.json(); // Agora, aguarde a leitura do corpo JSON da resposta
        console.log('Produtos Listados:', dados);

        // Início populando tabela
        const corpoTabela = document.getElementById('corpoTabela');

        // Limpar conteúdo atual da tabela
        corpoTabela.innerHTML = '';
        if (Array.isArray(dados)) {
        // Iterar sobre os dados e criar linhas da tabela
        dados.forEach((produto) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.quantidade}</td>
          `;
            corpoTabela.appendChild(novaLinha);
        });
        // Fim populando tabela
    } else {
        console.error('Os dados não contêm um array de produtos.',typeof(dados));
      }
    } catch (error) {
        console.error('Erro:', error);
    }
}

async function deleteProductButton(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter o valor do campo de ID do produto
    const id = document.getElementById('productID').value;
    console.log('Veja:', typeof(id));
    try {
        const response = await fetch(`http://localhost:3003/api/produtos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Verifique se a solicitação foi bem-sucedida antes de tentar obter o corpo da resposta
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Retorno:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
}

  
  async function putProductButton(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const id = document.getElementById('editProductID').value;
    const productName = document.getElementById('editProductName').value;
    const productPrice = document.getElementById('editProductPrice').value;
    const productQuantity = document.getElementById('editProductQuantity').value;
    console.log('informações enviadas:' , id,productName,productPrice,productQuantity);
    // Verifique se os campos obrigatórios estão preenchidos
    if (!id || !productName || !productPrice || !productQuantity) {
      console.error('Todos os campos devem ser preenchidos.', id, productName, productPrice,productQuantity);
      return;
    }
  
    const productData = {
      id: id,
      nome: productName,
      preco: productPrice,
      quantidade: productQuantity
    };
  
    try {
      const response = await fetch(`http://localhost:3003/api/produtos/${id}`, {
        method: 'PUT', // Alterei para PATCH, já que parece ser uma operação de atualização parcial
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      // Verifique se a resposta foi bem-sucedida antes de tentar obter o corpo da resposta
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Produto Alterado:', result);
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  
