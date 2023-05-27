export default function formatarValorBRL(valor) {
  const valorFormatado = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency',
  }).format(valor);
  return valorFormatado;
}
