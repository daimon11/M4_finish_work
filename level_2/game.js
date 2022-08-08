(() => {
  const game = () => {
    const quantityBalls = {
      player: 5,
      computer: 5,
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return function start() {

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


      const evenOdd = Math.round(Math.random());
      console.log('Бот загадал ' + evenOdd + ' Примечание: (если 1 - неченое, если 0 - четное)');

      const endOrContinuation = () => {
        if (quantityBalls.player <= 0 || quantityBalls.computer <= 0) {
          return checkingRemainingBalls();
        } else {
          return start();
        };
      }
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
            return;
          case (quantityBalls.computer >= 10 && quantityBalls.player <= 0):
            alert(values.compWin);
            return;
          default:
            return gameProcessBot();
        };
      };

      const gameProcess = (a, b) => {
        if (a === undefined) {
          return;
        } else {
          switch (true) {
            case (quantityBalls.player < newUserData):
              alert(values.playerManyBalls);
              return start();
            case (a % 2 === 0 && b % 2 !== 0 || a % 2 !== 0 && b % 2 === 0):
              quantityBalls.player += a;
              quantityBalls.computer -= a;
              alert(values.playerWinBalls + newUserData + `\n` +
                values.playerRemains + `${quantityBalls.player}\n` +
                values.compRemains + `${quantityBalls.computer}`);
              return checkingRemainingBalls();
            default:
              quantityBalls.player -= a;
              quantityBalls.computer += a;
              alert(values.compWinBalls + newUserData + `\n` +
                values.playerRemains + `${quantityBalls.player}\n` +
                values.compRemains + `${quantityBalls.computer}`);
              return checkingRemainingBalls();
          }

        };
      };
      return gameProcess(newUserData, evenOdd);
    };
  };
  window.Marbles = game;
})();