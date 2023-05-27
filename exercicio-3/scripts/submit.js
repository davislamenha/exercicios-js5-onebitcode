import { transacoesArray } from './transacoesArray.js';
import renderizarTransacoes from './renderizarTransacoes.js';
import atualizarSaldo from './atualizarSaldo.js';

export default async function salvarTransacao(e) {
  e.preventDefault();
  const transacaoId = document.querySelector('#id').value;

  const novaTransacao = {
    tipo: document.querySelector('#tipo').value,
    valor: parseFloat(document.querySelector('#valor').value),
    nome: document.querySelector('#nome').value,
  };

  if (transacaoId) {
    editarTransacao(transacaoId, novaTransacao);
  } else {
    const response = await fetch('http://localhost:3000/transacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaTransacao),
    });

    const transacoes = await response.json();
    transacoesArray.push(transacoes);
    renderizarTransacoes(transacoes);
  }

  e.target.reset();
  atualizarSaldo();
}

async function editarTransacao(transacaoId, novaTransacao) {
  const response = await fetch(
    `http://localhost:3000/transacoes/${transacaoId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaTransacao),
    },
  );

  const transacoes = await response.json();
  const transacaoIndex = transacoesArray.findIndex(
    (transacao) => transacao.id === transacaoId,
  );
  transacoesArray.splice(transacaoIndex, 1, transacoes);
  document.querySelector(`#transacao-${transacaoId}`).remove();
  renderizarTransacoes(transacoes);
}
