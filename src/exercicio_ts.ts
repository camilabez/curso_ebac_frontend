function multiplicaNumeros(n1: number, n2: number): number {
  return n1 * n2;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicaNumeros(6, 8);
console.log(`Resultado da Multiplicação é: ${resultadoMultiplicacao}`);

const dizOla = saudacao("Joana");
console.log(dizOla);
