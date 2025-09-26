let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

botao.addEventListener('click', function () {
  let n1 = Number(numero1.value);
  let n2 = Number(numero2.value);

  res.innerHTML = `Resultado: ${calcular(n1, n2)}`;
});
