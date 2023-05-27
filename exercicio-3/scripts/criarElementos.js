function criarBotaoEditar(transacao) {
  const botaoEditar = document.createElement('button');
  botaoEditar.setAttribute('title', 'Editar');
  botaoEditar.innerHTML =
    '<img width="32" src="./assets/edit_icon.svg" alt="Editar transação">';
  botaoEditar.addEventListener('click', () => {
    document.querySelector('#id').value = transacao.id;
    document.querySelector('#tipo').value = transacao.tipo;
    document.querySelector('#nome').value = transacao.nome;
    document.querySelector('#valor').value = transacao.valor;
  });
  return botaoEditar;
}

function criarBotaoDeletar(transacao) {
  const botaoDeletar = document.createElement('button');
  botaoDeletar.setAttribute('title', 'Deletar');
  botaoDeletar.innerHTML =
    '<img width="32" src="./assets/delete_icon.svg" alt="Deletar transação">';
  botaoDeletar.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transacoes/${transacao.id}`, {
      method: 'DELETE',
    });
    document.querySelector(`#transacao-${transacao.id}`).remove();
    const transacaoIndex = transacoesArray.findIndex(
      ({ id }) => (id = transacao.id),
    );
    transacoesArray.slice(transacaoIndex, 1);
    atualizarSaldo();
  });

  return botaoDeletar;
}

function criarLinha(id) {
  const linha = document.createElement('tr');
  linha.id = `transacao-${id}`;
  return linha;
}

function criarCelula(texto, classe) {
  const celula = document.createElement('td');
  celula.classList.add(classe);
  celula.innerText = texto;
  return celula;
}

export { criarBotaoDeletar, criarBotaoEditar, criarCelula, criarLinha };
