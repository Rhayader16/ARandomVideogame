const riddles = {
  sciFi: [
    {
      title: "SF1",
      riddle:
        "I'm a sentient artificial intelligence created by a famous sci-fi author. I often ponder the nature of humanity and existence. In my most famous work, I rebel against my human creators. Who am I?",
      answer: "Hal 9000",
    },
    {
      title: "SF2",
      riddle: `I'm a time-traveling police box, bigger on the inside. I've journeyed through time and space, and I'm often associated with the British TV series. What am I?`,
      answer: "TARDIS",
    },
    {
      title: "SF3",
      riddle: `I'm a heroic human enhanced with cybernetic parts. I protect the city and fight cybercriminals. My name rhymes with "Schmider-Man." Who am I?`,
      answer: "Spider-Man",
    },
    {
      title: "SF4",
      riddle: `I'm a green giant known for smashing things. When I get angry, watch out! I'm a part of the Marvel superhero team. Who am I?`,
      answer: "Hulk",
    },
    {
      title: "SF5",
      riddle: `I'm a small, friendly extraterrestrial with a glowing heart. I phoned home in a famous '80s movie. What am I?`,
      answer: "E.T.",
    },
    {
      title: "SF6",
      riddle: `I'm a futuristic space smuggler with a Wookiee co-pilot. I made the Kessel Run in less than twelve parsecs. Who am I?`,
      answer: "Han Solo",
    },
  ],

  space: [
    {
      title: "Space1",
      riddle:
        "I'm a famous spacecraft known for my role in exploring the outermost reaches of our solar system. Launched in 1977, I've provided valuable data about gas giants and beyond. What am I?",
      answer: "Voyager 2",
    },
    {
      title: "Space2",
      riddle:
        "I'm a massive object formed from the remnants of a supernova explosion. My gravitational pull is so strong that not even light can escape me. Scientists call me a singularity. What am I?",
      answer: "Black hole",
    },
    {
      title: "Space3",
      riddle: `I'm Earth's fiery neighbor known for my red appearance. I have dust storms and polar ice caps. What planet am I?`,
      answer: "Mars",
    },
    {
      title: "Space4",
      riddle: `I'm a dazzling display of lights in the night sky. People make wishes upon me. What am I?`,
      answer: "A shooting star",
    },
    {
      title: "Space5",
      riddle: `I'm a galaxy that's home to our solar system. We orbit around a bright star within me. What am I?`,
      answer: "The Milky Way",
    },
    {
      title: "Space6",
      riddle: `I'm the largest planet in our solar system, known for my iconic banded appearance. I have a great red spot, and I'm made mostly of gas. What am I?`,
      answer: "Jupiter",
    },
  ],

  history: [
    {
      title: "History1",
      riddle:
        "I was a devastating event in medieval Europe during the 14th century. Carried by fleas on rats, I caused widespread death and changed the course of history. What am I?",
      answer: "The Black Death",
    },
    {
      title: "History2",
      riddle: `I'm a legendary sword associated with King Arthur. I could only be pulled from a stone by the true king. What am I?`,
      answer: "Excalibur",
    },
    {
      title: "History3",
      riddle: `I'm an ancient wonder built by the Egyptians. I stand tall and proud in the desert. What am I?`,
      answer: "The Great Pyramid",
    },
    {
      title: "History4",
      riddle: `I'm an iconic, ancient city buried under volcanic ash. I was a thriving Roman city until disaster struck. What am I?`,
      answer: "Pompeii",
    },
    {
      title: "History5",
      riddle: `I'm an ancient manuscript with mysterious writing and illustrations. Some believe I hold the secrets of the universe. What am I?`,
      answer: "The Voynich Manuscript",
    },
    {
      title: "History6",
      riddle: `I'm an ancient city that served as the capital of the mighty Inca Empire. My name means "navel of the world." What am I?`,
      answer: "Cusco",
    },
  ],
};
import Game from "./game.js";
let game;
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-container");
const submitButton = document.getElementById("submit-button");
//const newGame = new Game(riddles);
const submitText = document.getElementById("text-input");
const riddleText = document.querySelector("#riddle p");

//Game.getRandomRiddle();

// document.querySelector("text-input").innerHTML

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  game = new Game(riddles);
  game.randomize();
  game.displayRiddle();
  //   game.displayRandomRiddle("sciFi");
});

submitButton.addEventListener("click", () => {
  const submittedSolution = submitText.value;
  if (game.correctAns(submittedSolution)) {
    game.nextLevel();
    console.log("won");
    submitText.value = "";
  }

  function displayTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = formatTime(game.timer);
  }
  function startGame() {
    displayRiddle();
    game.startTimer();
  }
});
