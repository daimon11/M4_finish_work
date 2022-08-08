'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const marblesGame = (x) => {
    const quantityBalls = {
      player: 5,
      computer: 5,
    };

    const firstGame = x === 'player' ?
      'user' : 'bot';

    return function start() {

      const endOrStart = () => {
        const startGame = confirm("Хотите сыграть еще?");
        if (startGame === true) {
          return newGame();
        } else {
          return;
        }
      }

      const first = () => {
        if (firstGame === 'bot') {
          return gameProcessBot();
        } else {
          return gameProcess();
        };
      };

      const exit = () => {
        const choice = confirm('Точно ли Вы хотите выйти?');
        if (choice === true) {
          alert(`Конец игры!`);
          return;
        } else {
          return start();
        };
      };

      const quantityBallsALL = (x) => {
        if (x > 10) {
          return x = 10;
        } else if (x < 0) {
          return x = 0;
        } else {
          return x;
        }
      };

      const values = {
        compEvenNumber: 'Бот загадал число, оно четное?',
        playerWin: 'Игра кончена! Вы выиграли!',
        compWin: 'Игра кончена! Сожалею. Вы проиграли!',
        playerManyBalls: 'У Вас нету такого количества шариков! Введите меньшее число!',
        playerWinBotgame: `Вы угадали! `,
        compWinBotgame: `Вы не угадали! `,
        playerWinBalls: `Вы выиграли шарики в количестве `,
        compWinBalls: `Вы проиграли шарики в количестве `,
        playerRemains: `Ваше количество шариков = `,
        compRemains: `У Бота количество шариков = `,
        compDataNum: `Бот загадывал число `,
      };

      const endOrContinuation = () => {
        if (quantityBalls.player <= 0 || quantityBalls.computer <= 0) {
          return checkingRemainingBalls();
        } else {
          return gameProcess();
        };
      };

      const gameProcessBot = () => {
        const newCompData = getRandomIntInclusive(1, quantityBalls.computer);
        const compDataNum = confirm(values.compEvenNumber);
        if (compDataNum === true && newCompData % 2 === 0 ||
          compDataNum === false && newCompData % 2 !== 0) {
          quantityBalls.player += newCompData;
          quantityBalls.computer -= newCompData;
          alert(values.playerWinBotgame + `\n` +
            values.compDataNum + newCompData + `\n` +
            values.playerRemains + quantityBallsALL(quantityBalls.player) + `\n` +
            values.compRemains + quantityBallsALL(quantityBalls.computer) + `\n`);
          return endOrContinuation();
        } else {
          quantityBalls.player -= newCompData;
          quantityBalls.computer += newCompData;
          alert(values.compWinBotgame + `\n` +
            values.compDataNum + newCompData + `\n` +
            values.playerRemains + quantityBallsALL(quantityBalls.player) + `\n` +
            values.compRemains + quantityBallsALL(quantityBalls.computer) + `\n`);
          return endOrContinuation();
        };
      }

      const checkingRemainingBalls = () => {
        switch (true) {
          case (quantityBalls.player >= 10 && quantityBalls.computer <= 0):
            alert(values.playerWin);
            return endOrStart();
          case (quantityBalls.computer >= 10 && quantityBalls.player <= 0):
            alert(values.compWin);
            return endOrStart();
          default:
            return gameProcessBot();
        };
      };

      const gameProcess = () => {
        const evenOdd = Math.round(Math.random());
        const inputUserData = () => {
          const data = prompt('Ваша ставка: ', '');
          switch (true) {
            case (data === null):
              return exit();
            case (isNaN(data) || data === NaN || data === '' ||
              data > quantityBalls.player || data <= 0):
              return inputUserData();
            default:
              return +data;
          };
        };

        const newUserData = inputUserData();
        console.log('Бот загадал ' + evenOdd + ' Примечание: (если 1 - неченое, если 0 - четное)');
        if (newUserData === undefined) {
          return;
        } else {
          switch (true) {
            case (quantityBalls.player < newUserData):
              alert(values.playerManyBalls);
              return start();
            case (newUserData % 2 === 0 && evenOdd % 2 !== 0 ||
              newUserData % 2 !== 0 && evenOdd % 2 === 0):
              quantityBalls.player += newUserData;
              quantityBalls.computer -= newUserData;
              alert(values.playerWinBalls + newUserData + `\n` +
                values.playerRemains + quantityBallsALL(quantityBalls.player) + `\n` +
                values.compRemains + quantityBallsALL(quantityBalls.computer));
              return checkingRemainingBalls();
            default:
              quantityBalls.player -= newUserData;
              quantityBalls.computer += newUserData;
              alert(values.compWinBalls + newUserData + `\n` +
                values.playerRemains + quantityBallsALL(quantityBalls.player) + `\n` +
                values.compRemains + quantityBallsALL(quantityBalls.computer));
              return checkingRemainingBalls();
          };
        };
      };
      return first();
    };
  };
  window.marbles = marblesGame;
})();
