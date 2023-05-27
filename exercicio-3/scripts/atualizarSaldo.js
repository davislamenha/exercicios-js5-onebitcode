import { transacoesArray } from './transacoesArray.js';
import formatarValorBRL from './formatarValorBRL.js';

export default function atualizarSaldo() {
  const saldo = document.getElementById('saldo-valor');
  const total = transacoesArray.reduce((acum, transacao) => {
    const valor = transacao.valor;
    const valorCreditoOuDebito = transacao.tipo === 'C' ? valor : -valor;
    return acum + valorCreditoOuDebito;
  }, 0);

  saldo.innerText = formatarValorBRL(total).slice(3);
}
