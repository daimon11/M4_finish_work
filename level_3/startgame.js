'use strict';

(() => {
  const FIGURES_RUS = {
    values: ['камень', 'ножницы', 'бумага'],
    playerWin: 'Вы выиграли!',
    computerWin: 'Компьютер выиграл!',
    playerMarbl: 'Вы первым загадываете число, а Бот дожен угадать четное или нечетное.',
    computerMarbl: 'Бот первым загадываете число, а Вы дожены угадать четное или нечетное.',
    draw: 'Ничья',
    resultPlayer: `Вы: `,
    resultComputer: `Компьютер: `,
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {

    return function start() {

      const exit = () => {
        const choice = confirm('Точно ли Вы хотите выйти?');
        if (choice === true) {
          alert(`Конец игры!`);
          return;
        } else {
          return start();
        }
      };

      const userData = () => {
        const data = prompt(FIGURES_RUS.values, '');
        switch (true) {
          case (data === null):
            return exit();
          case (FIGURES_RUS.values.indexOf(data) === -1):
            return userData();
          default:
            return FIGURES_RUS.values.indexOf(data);
        };
      };
      const newUserData = userData();
      const computerDate = getRandomIntInclusive(0, (FIGURES_RUS.values.length - 1));

      const gameProcess = (a, b) => {
        switch (true) {
          case (a === b):
            alert(`Вы: ${FIGURES_RUS.values[a]}\nКомпьютер: ${FIGURES_RUS.values[b]}
            ${FIGURES_RUS.draw}`);
            return start();
          case (a === 0 && b === 1 ||
            a === 1 && b === 2 || a === 2 && b === 0):
            alert(`Вы: ${FIGURES_RUS.values[a]}\nКомпьютер: ${FIGURES_RUS.values[b]}
            ${FIGURES_RUS.playerWin}\n${FIGURES_RUS.playerMarbl}`);
            const MarblsUser = window.marbles('player');
            return MarblsUser();
          case (a === undefined):
            break;
          default:
            alert(`Вы: ${FIGURES_RUS.values[a]}\nКомпьютер: ${FIGURES_RUS.values[b]}
            ${FIGURES_RUS.computerWin}\n${FIGURES_RUS.computerMarbl}`);
            const MarblsBot = window.marbles('comp');
            return MarblsBot();
        }
      };
      return gameProcess(newUserData, computerDate);
    };
  };

  window.RPS = game;
})();
