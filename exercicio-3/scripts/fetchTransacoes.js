export default async function fetchTransacoes() {
  return await fetch('http://localhost:3000/transacoes').then((r) => r.json());
}
