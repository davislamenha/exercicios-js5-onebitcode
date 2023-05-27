import fetchTransacoes from './fetchTransacoes.js';
import { transacoesArray } from './transacoesArray.js';
import renderizarTransacoes from './renderizarTransacoes.js';
import atualizarSaldo from './atualizarSaldo.js';

export default async function setup() {
  const transacoes = await fetchTransacoes();

  transacoesArray.push(...transacoes);

  transacoesArray.forEach(renderizarTransacoes);
  transacoesArray.forEach(atualizarSaldo);
}
