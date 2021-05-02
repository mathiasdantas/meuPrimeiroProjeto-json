//Informações - meu primeiro projeto no github

let pessoa = {
  nome: 'Mathias Sammer',
  idade: 23,
  ensino_medio: true,
  ensino_superior: true,
  profissão: 'Programador Júnior',
  Estudante: 'Digital House Brasil',
  Curso: 'Web full stack',
  assuntos_abordados: ['javascript', 'html5', 'css3', 'json', 'nodejs', 'express', 'mysql', 'react', 'npm', 'git', 'github'],
  objetivo: 'Me tornar um excelente programador sênior.'
}

const info = JSON.stringify(pessoa);
console.log(info);