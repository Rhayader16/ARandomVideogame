const riddles = [
  {
    title: "Space1",
    riddle:
      "I'm a massive object formed from the remnants of a supernova explosion. My gravitational pull is so strong that not even light can escape me. Scientists call me a singularity. What am I?",
    answer: "Black hole",
  },
  {
    title: "SF1",
    riddle:
      "I'm a sentient artificial intelligence created by a famous sci-fi author. I often ponder the nature of humanity and existence. In my most famous work, I rebel against my human creators. Who am I?",
    answer: "Hal 9000",
  },
  {
    title: "Space2",
    riddle:
      "I'm a famous spacecraft known for my role in exploring the outermost reaches of our solar system. Launched in 1977, I've provided valuable data about gas giants and beyond. What am I?",
    answer: "Voyager 2",
  },
  {
    title: "History1",
    riddle:
      "I was a devastating event in medieval Europe during the 14th century. Carried by fleas on rats, I caused widespread death and changed the course of history. What am I?",
    answer: "The Black Death",
  },
];

const submitButton = document.getElementById("submit-button");

class Game {
  getRandomRiddle() {} //shuffles the riddles

  displayRiddle() {} //gives back a riddle

  noRepeatCounter() {} //counter to prevent repetitions

  correctAns() {} //if you guess right you get a cookie

  wrongAns() {} //if you guess wrong you'll die a terrible death for real!!
}
