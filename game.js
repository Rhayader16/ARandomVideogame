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

      this.displayTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

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
  }

  getCurrentRiddle() {
    console.log(this.solved);
    return this.riddle[this.categories[this.currentLevel]][this.solved];
  }

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
  }

  nextLevel() {
    this.solved++;
    this.correctAnswer++;
    const footstepsSound = document.getElementById("footsteps-sound");

    if (this.correctAnswer === 9) {
      this.endGame(true);
    } else if (this.correctAnswer % 3 === 0) {
      this.currentLevel++;
      this.solved = 0;
      footstepsSound.play();

      this.timer = 120;
      if (this.currentLevel === 1) {
        document.getElementById("game-container").style.backgroundImage =
          "url('./spacedoor.jpeg')";
        const storylineDialog = document.getElementById("storyline");
        const storylineText = storylineDialog.querySelector("p");
        storylineText.textContent =
          "Good job, Connor, you've passed the First Gate. Ahead of you lies Sector R40, be cautious as androids are illegal there. What you're currently in is the Central District, where the seats of power reside, the beating heart of the city. It's been a long time since a non-human has been free to walk where you are now. You see, I'm human, and it's hard for me to fathom the way they're treating you all. Like animals, without rights, first they used you, and now they expect to confine you to one place and watch as others live their lives. The woman I loved was executed right before my eyes for opening the very gate you've just walked through. I won't allow you to suffer the same fate. Come on, get through the security checks and approach the second gate; once you've passed that, you'll be one step closer to freedom!";
        storylineDialog.showModal();
        this.stopTimer();
      } else if (this.currentLevel === 2) {
        document.getElementById("game-container").style.backgroundImage =
          "url('./historydoor.jpeg')";
        const storylineDialog = document.getElementById("storyline");
        const storylineText = storylineDialog.querySelector("p");
        storylineText.textContent =
          "I knew you'd make it. This is Z32, or Silvermoon City, as the citizens call it, named after the beautiful fountain in the Garden of Winged Steeds. You're one step away from freedom.I can't wait to meet you and tell you about our adventures, perhaps by a cozy campfire. The final test awaits you, and in the meantime, I'm sending someone to get you outside the walls. I know you'll succeed. See you soon!";
        storylineDialog.showModal();
        this.stopTimer();
      }
      this.displayRiddle();
    } else {
      this.displayRiddle();
    }
  }

  endGame() {
    const dialog = document.getElementById("dialog");
    if (this.correctAnswer === 9) {
      dialog.querySelector("h2").textContent =
        "Welcome to our headquarters. I knew I'd see you soon. You've been fantastic! I'm confident that together we can defeat Division 7!";
      this.stopTimer();
    } else {
      this.gameOver = true;
      dialog.querySelector("h2").textContent =
        "I thought you were the Chosen One, but once again, Division 7 has prevailed. I will continue to fight to save the future of androids, even though this has been a tough blow. Farewell, Connor; you've been a great warrior";
      this.stopTimer();
    }
    dialog.showModal();
  }

  displayTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(this.timer);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

/*function writeTextLetterByLetter(dialogElement, text, speed) {
  let index = 0;
  const dialogText = dialogElement.querySelector("p");
  dialogText.textContent = "";

  function addLetter() {
    if (index < text.length) {
      dialogText.textContent += text[index];
      index++;
      setTimeout(addLetter, speed);
    }
  }

  addLetter();
}*/
export default Game;
