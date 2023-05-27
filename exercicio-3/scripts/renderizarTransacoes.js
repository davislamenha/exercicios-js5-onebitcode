import {
  criarLinha,
  criarCelula,
  criarBotaoEditar,
  criarBotaoDeletar,
} from './criarElementos.js';
import formatarValorBRL from './formatarValorBRL.js';

export default function renderizarTransacoes(transacao) {
  const tipoClasse = transacao.tipo === 'C' ? 'credito' : 'debito';

  const tr = criarLinha(transacao.id);

  const nome = criarCelula(transacao.nome);

  const valor = criarCelula(formatarValorBRL(transacao.valor), tipoClasse);

  const acoes = criarCelula('', 'acoes');
  const botaoEditar = criarBotaoEditar(transacao);
  const botaoDeletar = criarBotaoDeletar(transacao);
  acoes.append(botaoEditar, botaoDeletar);

  tr.append(valor, nome, acoes);

  document.querySelector('#transacoes-tabela tbody').appendChild(tr);
}
