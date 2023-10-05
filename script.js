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
    {
      title: "SF7",
      riddle:
        "I'm a time-traveling doctor with the ability to regenerate. My adventures through time and space are a British TV sensation. Who am I?",
      answer: "Doctor Who",
    },
    // {
    //   title: "SF8",
    //   riddle: `I'm a space smuggler who shot first. I'm known for my ship, the Millennium Falcon, and my loyal Wookiee co-pilot. Who am I?`,
    //   answer: "Han Solo",
    // },
    {
      title: "SF9",
      riddle: `I'm a cybernetic organism sent back in time to assassinate key figures in human history. My mission is to change the future. Who am I?`,
      answer: "The Terminator",
    },
    {
      title: "SF10",
      riddle: `I'm a popular sci-fi TV series set in the 24th century. I explore space, seek out new life and new civilizations, and boldly go where no one has gone before. What am I?`,
      answer: "Star Trek: The Next Generation",
    },
    {
      title: "SF11",
      riddle: `I'm a sci-fi film series set in a galaxy far, far away. The Force is strong with me, and I feature Jedi, Sith, and epic space battles. What am I?`,
      answer: "Star Wars",
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
    {
      title: "Space7",
      riddle:
        "I'm a celestial body that orbits the Earth. I'm Earth's only natural satellite. What am I?",
      answer: "The Moon",
    },
    {
      title: "Space8",
      riddle:
        "I'm a spacecraft that first landed humans on the Moon. My command module was named Columbia, and I had two astronauts walk on the lunar surface. What am I?",
      answer: "Apollo 11",
    },
    {
      title: "Space9",
      riddle: `I'm a space telescope launched by NASA in 1990. I've provided stunning images of distant galaxies and nebulae. What am I?`,
      answer: "Hubble Space Telescope",
    },
    {
      title: "Space10",
      riddle: `I'm a gas giant known for my beautiful ring system. I have dozens of moons, including Titan, and I'm the second-largest planet in our solar system. What am I?`,
      answer: "Saturn",
    },
    {
      title: "Space11",
      riddle: `I'm a small, icy dwarf planet located in the Kuiper Belt. I was once considered the ninth planet in our solar system but got reclassified. What am I?`,
      answer: "Pluto",
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
    {
      title: "History7",
      riddle:
        "I'm an ancient civilization known for my pyramids, hieroglyphs, and pharaohs. I once thrived along the banks of the Nile River. What am I?",
      answer: "Ancient Egypt",
    },
    {
      title: "History8",
      riddle:
        "I'm an important document signed in 1215. I limited the power of the English monarch and influenced the development of constitutional law. What am I?",
      answer: "The Magna Carta",
    },
    {
      title: "History9",
      riddle: `I'm an iconic landmark in the United States. I was a gift from France and stand in New York Harbor. What am I?`,
      answer: "The Statue of Liberty",
    },
    {
      title: "History10",
      riddle: `I'm an ancient wonder of the world, a colossal statue located on the island of Rhodes. I'm known for guarding the harbor. What am I?`,
      answer: "The Colossus of Rhodes",
    },
    {
      title: "History11",
      riddle: `I'm an influential leader who led a non-violent movement for civil rights. My "I Have a Dream" speech is famous. Who am I?`,
      answer: "Martin Luther King Jr.",
    },
  ],
};

import Game from "./game.js";

let game;
const backgroundAudio = document.getElementById("background-audio");
const buttonSound = document.getElementById("button-sound");
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-container");
const submitButton = document.getElementById("submit-button");
const submitText = document.getElementById("text-input");
const riddleText = document.querySelector("#riddle p");

startButton.addEventListener("click", () => {
  backgroundAudio.volume = 1;
  backgroundAudio.play();
  buttonSound.play();
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  game = new Game(riddles);
  game.randomize();
  game.displayRiddle();
  game.startGame();
  const storylineDialog = document.getElementById("storyline");
  const storylineText = storylineDialog.querySelector("p");
  storylineText.textContent =
    "Earth - Year 2466 - Following the Third Industrial Revolution, a single world power has emerged: Division 7. After seizing power with the help of androids, the regime later decided to decommission them. This decision was made because some of these androids, nicknamed " +
    '"Dreamers"' +
    ", began to experience emotions and live among humans. Equipped with organic exoskeletons, it is impossible to distinguish them from humans. Thus, in major cities like New Katonia, a method was devised to prevent them from escaping, confining them and preventing them from organizing on a global scale. The cities have three gates for exit, each with questions to answer. Android minds do not retain information about human culture, so a simple quiz is enough to keep them imprisoned. You are Connor, a T-800 model android. You have been contacted by the rebellion, which has managed to establish an outpost just outside the borders of New Katonia. Through neural connection, Luke, a rebel, will guide you to freedom. Good luck...";
  storylineDialog.showModal();
  game.stopTimer();
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  buttonSound.play();

  const storylineDialog = document.getElementById("storyline");
  storylineDialog.close();
  game.startTimer();
});

submitButton.addEventListener("click", () => {
  const submittedSolution = submitText.value;
  buttonSound.play();
  if (game.correctAns(submittedSolution)) {
    game.nextLevel();
    submitText.value = "";
  } else {
    const dialog = document.getElementById("dialog");
    game.gameOver = true;
    dialog.querySelector("h2").textContent =
      "I thought you were the Chosen One, but once again, Division 7 has prevailed. I will continue to fight to save the future of androids, even though this has been a tough blow. Farewell, Connor; you've been a great warrior";
    game.stopTimer();
  }
});

function displayTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.textContent = formatTime(game.timer);
}

function startGame() {
  displayRiddle();
  game.startTimer();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

const inputElement = document.getElementById("text-input");
inputElement.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    buttonSound.play();
    event.preventDefault();
    const submittedSolution = inputElement.value;
    if (game.correctAns(submittedSolution)) {
      game.nextLevel();
      inputElement.value = "";
    }
  }
});
