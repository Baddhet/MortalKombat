const SCORPIONS = {
  name: 'Scorpions',
  hp: 1,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['sword'], 
  attack: function attack() {
    console.log(this.name + 'Fight...');
  },
}

const KITANA = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['sword'], 
  attack: function attack() {
    console.log(this.name + 'Fight...');
  },
}

function createPlayer(player, pers) {
  const PLAYER1 = document.createElement('div');
  PLAYER1.classList.add(player);

  const PROGRESS_BAR = document.createElement('div');
  PROGRESS_BAR.classList.add('progressbar');

  const CHARACTER = document.createElement('div');
  CHARACTER.classList.add('character');

  const LIFE = document.createElement('div');
  LIFE.classList.add('life');
  LIFE.style.width = '100%';

  const NAME = document.createElement('div');
  NAME.classList.add('name');
  NAME.innerHTML = pers.name;

  const IMG = document.createElement('img');
  IMG.src = pers.img;

  const ARENAS = document.querySelector('.arenas');
  ARENAS.appendChild(PLAYER1);
  PLAYER1.appendChild(PROGRESS_BAR);
  PLAYER1.appendChild(CHARACTER);
  PROGRESS_BAR.appendChild(LIFE);
  PROGRESS_BAR.appendChild(NAME);
  CHARACTER.appendChild(IMG);
}

createPlayer('player1', SCORPIONS);
createPlayer('player2', KITANA);