function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Se o campo de pesquisa estiver vazio
    if (!campoPesquisa) {
      // Exibe uma mensagem indicando que nenhum resultado foi encontrado
      section.innerHTML = "<p>Nenhum resultado encontrado. Digite o nome do funcionário ou cargo.</p>";
      return;
    }
  
    // Converte o termo de pesquisa para minúsculo para pesquisa sem distinção de maiúsculas e minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item na lista de dados
    for (let dado of dados) {
      // Converte título, descrição e tags para minúsculo para pesquisa sem distinção de maiúsculas e minúsculas
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Se o termo de pesquisa for encontrado no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento HTML para o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultados) {
      resultados = "<p>Nenhum resultado encontrado.</p>";
    }
  
    // Define o HTML interno da seção para os resultados gerados
    section.innerHTML = resultados;
  }