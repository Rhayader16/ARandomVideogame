class Game {
  constructor(riddles) {
    this.riddle = riddles;
    this.solved = 0;
    this.answer = "";
    this.riddleText = document.querySelector("#riddle p");
  }

  displayRiddle() {
    const riddle = this.getCurrentRiddle();
    this.riddleText.textContent = riddle.riddle;
  }

  randomize() {
    if (!this.riddle) return undefined;

    this.riddle.sort(() => Math.random() - 0.5);
  } //shuffles the riddles

  getCurrentRiddle() {
    return this.riddle[this.solved];
  } //gives back a riddle

  correctAns(userInput) {
    this.answer = this.getCurrentRiddle().answer;
    if (
      this.answer.localeCompare(userInput, undefined, {
        sensitivity: "base",
      }) === 0
    ) {
      return true;
    } else return false;
  } //if you guess right you get a cookie

  theEasterEgg() {} //I'm probably not gonna do this!
}

export default Game;
