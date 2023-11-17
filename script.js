const produtos = [];
let id = 0;
let foundId;

const btnCadastrar = query("#cadastrar");
const btnNovoProduto = query("#new-product");
const btnAtualizar = query("#update");

btnCadastrar.addEventListener("click", cadastrarProduto);
btnNovoProduto.addEventListener("click", toggleFormInsert);
btnAtualizar.addEventListener("click", updateProduct);

function cadastrarProduto() {
  id += 1;
  const nome = query("#nome").value;
  const preco = query("#preco").value;
  const quantidade = query("#quantidade").value;

  const produto = {
    id,
    nome,
    preco,
    quantidade,
  };

  produtos.push(produto);

  toggleFormInsert();
  listarProdutos();
}

function listarProdutos() {
  const tbodyProdutos = query("#tbody-produtos");
  tbodyProdutos.innerHTML = "";
  for (let i = 0; i < produtos.length; i++) {
    tbodyProdutos.innerHTML += `
        <tr>
          <td>${produtos[i].nome}</td>
          <td>${produtos[i].preco}</td>
          <td>${produtos[i].quantidade}</td> 
          <td><button id="bt" onclick="deleteProduct(${produtos[i].id})">Excluir</button></td>
          <td><button id="bt" onclick="getInfoProduct(${produtos[i].id})">Atualizar</button></td>
        </tr> 
    `;
  }
}

function deleteProduct(id) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      produtos.splice(i, 1);
      break;
    }
  }

  listarProdutos();
}
function toggleFormInsert() {
  const formInsert = query("#form-insert");

  formInsert.classList.toggle("display-none");
  formInsert.classList.toggle("display-flex");
}

function toggleFormUpdate() {
  const formUpdate = query("#form-update");

  formUpdate.classList.toggle("display-none");
  formUpdate.classList.toggle("display-flex");
}

function getInfoProduct(id) {
  foundId = id;
  toggleFormUpdate();

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      query("#nomeUpdate").value = produtos[i].nome;
      query("#precoUpdate").value = produtos[i].preco;
      query("#quantidadeUpdate").value =
        produtos[i].quantidade;

      break;
    }
  }
}

function updateProduct() {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === foundId) {
      produtos[i].nome = query("#nomeUpdate").value;
      produtos[i].preco = query("#precoUpdate").value;
      produtos[i].quantidade =
        query("#quantidadeUpdate").value;
      toggleFormUpdate();
      break;
    }
  }

  listarProdutos();
}

function query(select) {
    return document.querySelector(`${select}`)
    
}

