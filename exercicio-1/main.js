async function IMC(peso, altura) {
  try {
    console.log('calculando...');
    const resultado = await calcularIMC(peso, altura);
    console.log(resultado);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

async function calcularIMC(peso, altura) {
  if (typeof peso === 'number' && typeof altura === 'number') {
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
  } else {
    return Promise.reject('Valor informado precisa ser um numero.');
  }
}

IMC('80', 1.75);

IMC(80, 1.75);

IMC(55.1, 1.61);

IMC(65, 1.58);
