function IMC(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso === 'number' && typeof altura === 'number') {
      const resultado = calcularIMC(peso, altura);
      return resolve(resultado);
    } else reject('Valor informado precisa ser um numero.');
  });
}
