function IMC(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso === 'number' && typeof altura === 'number') {
      const resultado = calcularIMC(peso, altura);
      return resolve(resultado);
    } else reject('Valor informado precisa ser um numero.');
  });
}

function calcularIMC(peso, altura) {
  const calculoImc = peso / (altura * altura);
  let situacao = '';
  switch (true) {
    case calculoImc < 18.5:
      situacao = 'magreza';
      break;
    case calculoImc >= 18.5 && calculoImc <= 24.9:
      situacao = 'normal';
      break;
    case calculoImc >= 25 && calculoImc <= 29.9:
      situacao = 'sobrepeso';
      break;
    case calculoImc >= 30 && calculoImc <= 39.9:
      situacao = 'obesidade';
      break;
    case calculoImc >= 40:
      situacao = 'obesidade grave';
      break;
  }

  return `IMC: ${calculoImc.toFixed(2)} | Situação: ${situacao}`;
}
