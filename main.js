// Variáveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const cookie = document.querySelector('.screen1 img');
const btnOpenAnoter = document.querySelector('#btnOpenAnother');

const lukeList = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
];

cookie.addEventListener('click', handleClick);
btnOpenAnoter.addEventListener('click', handleClick);
document.addEventListener('keydown', handleEnterClick);

function handleClick() {
  changeLuke();
  toggleScreen();
}

function handleEnterClick(e) {
  if (e.key == 'Enter') {
    changeLuke();
    toggleScreen();
  }
}

function changeLuke() {
  let randomNumber = Math.floor(Math.random() * 10);

  screen2.querySelector('.screen2 p').innerText = lukeList[randomNumber];
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}
