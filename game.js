class Game {
  constructor(riddles) {
    this.riddle = riddles;
    this.currentLevel = 0;
    this.solved = 0; //contatore locale
    this.correctAnswer = 0; //contatore totale
    this.answer = "";
    this.riddleText = document.querySelector("#riddle p");
    this.category = riddles.category;
    this.timer = 120;
    this.timeInterval = null;
    this.categories = ["sciFi", "space", "history"];
    this.gameOver = false;
    //this.consecAns = 0;
    console.log(this.riddle[this.categories[this.currentLevel]][this.solved]);
  }

  startGame() {
    this.displayRiddle();
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer--;

      if (this.timer === 0) {
        this.endGame();
      }

      document.getElementById("timer").textContent = formatTime(this.timer);
    }, 1000);
  }

  //   displayRandomRiddle(category) {
  //     const randomIndex = Math.floor(
  //       Math.random() * this.riddle[category].length
  //     );
  //     const randomRiddle = this.riddle[category][randomIndex];
  //     this.riddleText.textContent = randomRiddle.riddle;
  //     this.answer = randomRiddle.answer;
  //   }
  displayRiddle() {
    const riddle = this.getCurrentRiddle();
    this.riddleText.textContent = riddle.riddle;
  }

  randomize() {
    if (!this.riddle) return undefined;

    for (const category in this.riddle) {
      this.riddle[category].sort(() => Math.random() - 0.5);
    }
    console.log(this.riddle);
  } //shuffles the riddles

  getCurrentRiddle() {
    console.log(this.solved);
    return this.riddle[this.categories[this.currentLevel]][this.solved];
  } //gives back a riddle

  correctAns(userInput) {
    this.answer = this.getCurrentRiddle().answer;
    console.log(this.answer, userInput);
    if (
      this.answer.localeCompare(userInput, undefined, {
        sensitivity: "base",
      }) === 0
    ) {
      return true;
    } else return false;
  } //if you guess right you get a cookie

  nextLevel() {
    this.solved++;
    this.correctAnswer++;
    if (this.correctAnswer === 9) {
      this.endGame(true);
    } else if (this.correctAnswer % 3 === 0) {
      this.currentLevel++;
      this.solved = 0;
      //   this.correctAnswer = 0;

      this.timer = 120;
      clearInterval(this.timerInterval);

      this.displayRiddle();
      this.startTimer();
    } else {
      this.displayRiddle();
    }
  }
  endGame() {
    if (this.correctAnswer === 9) {
      console.log("You won, here's a cookie (because the cake is a lie)");
    } else {
      this.gameOver = true;
      console.log("You lost, GLaDOS got you!");
    }
  }

  theEasterEgg() {} //I'm probably not gonna do this!
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default Game;
