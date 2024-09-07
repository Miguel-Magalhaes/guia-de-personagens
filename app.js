function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p class='mensagem'>Nenhum personagem foi encontrado. Você precisa digitar o nome de algum personagem.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let sobre = "";
    
    // Itera sobre cada personagem na lista de personagens
    for (let personagem of personagens) {
        nome = personagem.nome.toLowerCase();
        sobre = personagem.sobre.toLowerCase();
        if (nome.includes(campoPesquisa)){
            // Constrói o HTML para cada item de resultado, incluindo o nome e a descrição do personagem
            resultados += `
            <div class="item-resultado">
                <div>
                    <h2>${personagem.nome}</h2>
                    <p class="descricao-meta">${personagem.sobre}</p>
                    <p class="descricao-meta">${personagem.habilidade}</p>
                </div>
                <div>
                    <img class="imagem-personagem" src=${personagem.imagem} width="200">
                </div>    
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p class='mensagem'>Nenhum personagem foi encontrado.</p>";
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}