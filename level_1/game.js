(() => {
  alert('Привет! У Вас и Бота по 5 шариков. Вы ставите любое число шариков от 1 до 5, а Бот должен угадать четное или нечетное это число. Играем?');
  const game = () => {
    const quantityBalls = {
      player: 5,
      computer: 5,
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
        return 10;
      } else if (x < 0) {
        return 0;
      } else {
        return x;
      }
    };

    return function start() {

      const userDateTransform = (string) => {
        switch (true) {
          case (string === null):
            return exit();
          case (string === NaN || string === '' || string > 5 || string <= 0):
            return start();
          case (string > quantityBalls.player):
            alert(values.playerManyBalls);
            return start();
          default:
            return +string;
        };
      };

      const userData = () => {
        const data = prompt('Ваша ставка: ', '');
        return userDateTransform(data);
      };
      const newUserData = userData();

      const values = {
        playerWin: 'Игра кончена! Вы выиграли!',
        compWin: 'Игра кончена! Сожалею. Вы проиграли!',
        playerManyBalls: 'У Вас нету такого количества шариков! Введите меньшее число!',
        playerWinBalls: `Вы выиграли шарики в количестве ${newUserData} штук!\n`,
        compWinBalls: `Вы проиграли шарики в количестве ${newUserData} штук!\n`,
        playerRemains: `Ваше количество шариков = `,
        compRemains: `У Бота количество шариков = `,
      };


      const evenOdd = Math.round(Math.random());
      console.log('Бот загадал ' + evenOdd + ' Примечание: (если 1 - неченое, если 0 - четное)');

      const checkingRemainingBalls = () => {
        switch (true) {
          case (quantityBalls.player >= 10 && quantityBalls.computer <= 0):
            alert(values.playerWin);
            return;
          case (quantityBalls.computer >= 10 && quantityBalls.player <= 0):
            alert(values.compWin);
            return;
          default:
            start();
        };
      };

      const gameProcess = (a, b) => {
        if (a === undefined) {
          return;
        } else {
          switch (true) {
            case (a % 2 === 0 && b % 2 !== 0 || a % 2 !== 0 && b % 2 === 0):
              quantityBalls.player += a;
              quantityBalls.computer -= a;
              alert(values.playerWinBalls + values.playerRemains + `${quantityBallsALL(quantityBalls.player)}\n` +
                values.compRemains + `${quantityBallsALL(newUserData)}`);
              return checkingRemainingBalls();
            default:
              quantityBalls.player -= a;
              quantityBalls.computer += a;
              alert(values.compWinBalls + values.playerRemains + `${quantityBallsALL(quantityBalls.player)}\n` +
                values.compRemains + `${quantityBallsALL(quantityBalls.computer)}`);
              return checkingRemainingBalls();
          }

        };
      };
      return gameProcess(newUserData, evenOdd);
    };
  };
  window.Marbles = game;
})();

