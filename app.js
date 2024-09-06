function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase()
  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let htmlResultados = "";

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhum registro encontrado</p>"
    return
  }
  // Itera sobre cada filósofo no array 'filosofos'
  for (let item of filosofos) {
    if (item.nome.toLocaleLowerCase().includes(campoPesquisa) || item.descricao.toLocaleLowerCase().includes(campoPesquisa)) {
      // Constrói o HTML para cada item, incluindo nome, descrição e link
      htmlResultados += `
        <div class="item-resultado">
          <h2>${item.nome}</h2>  <p class="descricao-meta">${item.descricao}</p> <a href="${item.link}" target="_blank"> Saiba mais</a> </div>
      `;
    }
    else
    {
      section.innerHTML = "<p>Nenhum registro encontrado</p>"
    }

  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = htmlResultados;
}