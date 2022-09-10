/* --------------- Query Selectors --------------- */

let quiz = document.querySelector("#quiz");
let intro = document.querySelector("#introduction");
let assesFT = document.querySelector("#assess-ft");
let progressBar = document.querySelector(".progress");
let startBtn = document.querySelector("#startBtn");
let timeSpan = document.querySelector("#timeSpan");
let questionH5 = document.querySelector("#question");
let answersDiv = document.querySelector("#answers");
let allDone = document.querySelector("#allDone");
let finalScore = document.querySelector("#finalScore");
let audioCorrect = document.querySelector("#audioCorrect");
let audioIncorrect = document.querySelector("#audioIncorrect");
let audioApplause = document.querySelector("#audioApplause");
let audioTollingBell = document.querySelector("#audioTollingBell");
let audioThunder = document.querySelector("#audioThunder");
let submit = document.querySelector("#submit");
let highScoresList = document.querySelector("#highScoresList");
let initials = document.querySelector("#initials");
let clearHighscoresBtn = document.querySelector("#clearHighscoresBtn");
let image_area = document.querySelector("#image_area");

/* ------- Global Variable Declarations ------- */

let totalSeconds = 250;
let timeRemining = totalSeconds;
let secondsElapsed = 0;
let discountSeconds = 0;
let currentQuestion = 0;
let progress = 0;
let correctAnswers = 0;
let correctScore = 0;
var localHighscoresArray = [];
let time = setInterval(timer, 1000);
let justRegistered = false;
clearInterval(time);

/* --------------- Quiz Array --------------- */

// Questions based on: laffgaff "DISNEY TRIVIA QUESTIONS AND ANSWERS": https://laffgaff.com/disney-trivia-questions-answers/
let quizArray = [
  {
    question:
      "In The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
    options: ["Baloo", "Shere Khan", "Kaa", "King Louie", "Bagheera"],
    correct: 0,
    image: "./assets/Disney_Trivia/jungle_book.jpeg",
  },
  {
    question: "Cruella de Vil is the villain in which Disney movie?",
    options: [
      "101 Dalmatians",
      "The Little Mermaid",
      "Mulan",
      "The Lion King",
      "Aladdin",
      "Hercules",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/101_dalmatas.jpeg",
  },
  {
    question:
      "What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?",
    options: [
      "Andy",
      "Jessie",
      "Forkie",
      "Sheriff Woody",
      "Sid",
      "Bonnie",
      "Ryan",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/toy_story.jpeg",
  },
  {
    question: "Which Disney princess has a raccoon as a sidekick?",
    options: [
      "Pocahontas",
      "Ariel",
      "Jasmine",
      "Belle",
      "Merida",
      "Rapunzel",
      "Cinderella",
      "Snow White",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/princesses.jpeg",
  },
  {
    question:
      "In the movie Frozen, which song does Elsa sing as she builds the castle?",
    options: [
      "Let It Go",
      "A Whole New World",
      "Part Of Your World",
      "Colors Of the Wind",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/frozen.jpeg",
  },
  {
    question:
      "In the movie Finding Nemo, which country has Nemo been taken to?",
    options: [
      "Australia",
      "Mexico",
      "United States",
      "China",
      "Japan",
      "Sweden",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/nemo.jpeg",
  },
  {
    question: "What is the name of Bambi’s rabbit friend?",
    options: ["Thumper", "Faline", "Flower", "Friend Owl"],
    correct: 0,
    image: "./assets/Disney_Trivia/bambi.jpeg",
  },
  {
    question: "What does the crocodile swallow in Peter Pan?",
    options: ["A clock", "A bottle", "A coin", "A bracelet"],
    correct: 0,
    image: "./assets/Disney_Trivia/peter_pan.jpeg",
  },
  {
    question:
      "In Peter Pan, did Captain Hook have a hook for his left hand or his right hand?",
    options: ["His left hand", "His right hand"],
    correct: 0,
    image: "./assets/Disney_Trivia/peter_pan.jpeg",
  },
  {
    question:
      "In the movie Dumbo, what type of animal were Dandy Fat Glasses Preacher and Straw Hat??",
    options: ["Crows", "Eagles", "Cats", "Horses", "Dogs"],
    correct: 0,
    image: "./assets/Disney_Trivia/dumbo.jpeg",
  },
  {
    question: "What is the name of Donald Duck’s sister?",
    options: ["Dumbella", "Daisy", "Louie"],
    correct: 0,
    image: "./assets/Disney_Trivia/donald_duck.jpeg",
  },
  {
    question: "What does Cinderella’s fairy godmother turn into a carriage?",
    options: ["A pumpkin", "A cake", "A watermelon", "An apple"],
    correct: 0,
    image: "./assets/Disney_Trivia/cinderella.jpeg",
  },
  {
    question:
      "Which was the first Disney movie to receive an Oscar nomination for Best Picture?",
    options: [
      "Beauty and the Beast",
      "Tron",
      "Pinocchio",
      "Lady and the Tramp",
      "Treasure Planet",
      "Robin Hood",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What type of animal does Jasmine have for a pet in Aladdin?",
    options: ["A tiger", "A pig", "A cat", "A hampster"],
    correct: 0,
    image: "./assets/Disney_Trivia/aladdin.jpeg",
  },
  {
    question: "What is the name of The Lion King?",
    options: [
      "Simba",
      "Scar",
      "Nala",
      "Mufasa",
      "Zazu",
      "Timon",
      "Pumbaa",
      "Sarabi",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/lion_king.jpeg",
  },
  {
    question: "What type of animal is Bernard in The Rescuers?",
    options: ["A mouse", "A cat", "A dog", "A horse", "An eagle"],
    correct: 0,
    image: "./assets/Disney_Trivia/rescuers.jpeg",
  },
  {
    question: "The song “You Can Fly” is from which Disney movie?",
    options: [
      "Peter Pan",
      "Robin Hood",
      "Lolo & Stitch",
      "The Aristocats",
      "Cinderella",
      "Mulan",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What color are Mickey Mouse’s shorts?",
    options: ["Red", "Green", "Blue", "Yellow"],
    correct: 0,
    image: "./assets/Disney_Trivia/mickey_mouse.jpeg",
  },
  {
    question: "What is the wizard’s name in the movie The Sword in the Stone?",
    options: ["Merlin", "Arthur", "Archimedes", "Sir Kay"],
    correct: 0,
    image: "./assets/Disney_Trivia/sword_stone.jpeg",
  },
  {
    question: "What does Dumbo use to fly?",
    options: ["A feather", "A hat", "A botle", "A lamp"],
    correct: 0,
    image: "./assets/Disney_Trivia/dumbo.jpeg",
  },
  {
    question:
      "Which was the first full-length animated movie to be released by Disney?",
    options: [
      "Snow White and the Seven Dwarfs",
      "The Lottle Mermaid",
      "Mickey Mouse",
      "Donald Duck",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "In which city is the Disney movie Ratatouille based?",
    options: ["Paris", "Tokio", "Brussels", "Tallinn", "New York"],
    correct: 0,
    image: "./assets/Disney_Trivia/ratatouille.jpeg",
  },
  {
    question: "Scar is a villain in which Disney movie?",
    options: ["The Lion King", "Beauty and the Best", "Hercules", "Aladdin"],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What is Cinderella’s slipper made of?",
    options: ["Glass", "Plastic", "Rubber", "leather", "Wood"],
    correct: 0,
    image: "./assets/Disney_Trivia/cinderella.jpeg",
  },
  {
    question: "In The Jungle Book, what kind of animal is Shere Khan?",
    options: [
      "A tiger",
      "A panda",
      "A snake",
      "A cocodrile",
      "A hipo",
      "A panther",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/jungle_book.jpeg",
  },
];

/* ------------- Event Management ------------- */

startBtn.addEventListener("click", startQuiz);
answersDiv.addEventListener("click", assesSelection);
submit.addEventListener("click", addToHighscores);
clearHighscoresBtn.addEventListener("click", clearHighscores);
$("#staticBackdrop").on("shown.bs.modal", function (e) {
  loadHighScores();
});
$("#staticBackdrop").on("hidden.bs.modal", function (e) {
  if (justRegistered) {
    init();
  }
});

init();

/* ------------- Functions Declaration ------------- */

function init() {
  timeSpan.textContent = timeRemining;
  quiz.style.display = "none";
  allDone.style.display = "none";
  assesFT.style.display = "none";
  intro.style.display = "block";
  startBtn.style.display = "block";
  progressBar.style.display = "none";

  totalSeconds = 250;
  timeRemining = totalSeconds;
  secondsElapsed = 0;
  discountSeconds = 0;
  currentQuestion = 0;
  progress = 0;
  correctAnswers = 0;
  correctScore = 0;
  justRegistered = false;
  timeSpan.textContent = timeRemining;

  if (localStorage.getItem("highscore")) {
    localHighscoresArray = localStorage.getItem("highscore").split(",");
  }
  clearInterval(time);
  updateProgress();

  allDone.firstElementChild.setAttribute("class", "alert alert-info mt-0 mb-0");
  submit.setAttribute("class", "btn btn-info");
  progressBar.firstElementChild.setAttribute(
    "class",
    "progress-bar bg-info progress-bar-striped progress-bar-animated"
  );
}

function startQuiz() {
  intro.style.display = "none";
  startBtn.style.display = "none";
  quiz.style.display = "block";
  time = setInterval(timer, 1000);
  progressBar.style.display = "block";
  showQuestion();
}

function timer() {
  timeRemining = totalSeconds - secondsElapsed - 1 - discountSeconds;
  timeSpan.textContent = timeRemining;
  secondsElapsed++;
  if (timeRemining <= 0) {
    clearInterval(time);
    disableQuestions();
    gameOver("time_out");
  }
}

function showQuestion() {
  questionH5.textContent = quizArray[currentQuestion].question;
  var optionsBtnsArray = [];
  var indexArray = [];
  var image = document.createElement("img");
  image.setAttribute("src", quizArray[currentQuestion].image);
  image.setAttribute("class", "movie-image rounded");
  image_area.append(image);

  for (i = 0; i < quizArray[currentQuestion].options.length; i++) {
    var questionBtn = document.createElement("button");
    questionBtn.setAttribute("type", "button");
    questionBtn.setAttribute(
      "class",
      "list-group-item list-group-item-action list-group-item-info mt-1 answerButton"
    );
    questionBtn.setAttribute("data-index", i);
    if (i === 0) {
      questionBtn.setAttribute("correct", "yes");
    } else {
      questionBtn.setAttribute("correct", "no");
    }
    questionBtn.textContent = quizArray[currentQuestion].options[i];
    answersDiv.append(questionBtn);
    indexArray.push(i);
  }

  answersDiv.childNodes.forEach(function (child) {
    var rndIndex = Math.floor(Math.random() * indexArray.length);
    answersDiv.append(answersDiv.children[rndIndex]);
    indexArray.splice(rndIndex, 1);
  });
}

function disableQuestions() {
  let questionsAssed = document.querySelectorAll(".answerButton");
  questionsAssed.forEach((element) => {
    element.setAttribute(
      "class",
      "list-group-item list-group-item-action list-group-item-danger mt-1 answerButton disabled"
    );
    if (
      parseInt(element.getAttribute("data-index")) ===
      quizArray[currentQuestion].correct
    ) {
      element.setAttribute(
        "class",
        "list-group-item list-group-item-action list-group-item-success mt-1 answerButton disabled"
      );
    }
  });
}

function assesSelection(event) {
  if (event.target.matches("button")) {
    var index = parseInt(event.target.getAttribute("data-index"));
    var timeInterval = 1000;
    disableQuestions();
    if (event.target.getAttribute("correct") === "yes") {
      displayFTAlert(true);
      correctAnswers++;
    } else {
      discountSeconds += 3;
      clearInterval(time);
      time = setInterval(timer, 1000);
      displayFTAlert(false);
    }
    currentQuestion++;
    updateProgress();

    if (currentQuestion === quizArray.length) {
      timeInterval = 5000;
      gameOver("questions_done");
    } else {
      setTimeout(removeQuestionsButtons, 1000);
      setTimeout(showQuestion, 1001);
    }

    setTimeout(function () {
      assesFT.style.display = "none";
    }, timeInterval);
  }
}

function updateProgress() {
  progress = Math.floor((currentQuestion / quizArray.length) * 100);
  var styleStr = String("width: " + progress + "%; height: 100%;");
  progressBar.firstElementChild.setAttribute("style", styleStr);
  progressBar.firstElementChild.textContent = progress + " %";
  correctScore = Math.floor((correctAnswers / quizArray.length) * 100);
}

function displayFTAlert(correct) {
  if (correct) {
    audioCorrect.play();
    assesFT.setAttribute(
      "class",
      "alert alert-success mt-0 mb-0 pt-0 pb-0 text-center"
    );
    assesFT.innerHTML = "<strong>Correct</strong>";
    assesFT.style.display = "block";
  } else {
    audioIncorrect.play();
    assesFT.setAttribute(
      "class",
      "alert alert-danger mt-0 mb-0 pt-0 pb-0 text-center"
    );
    assesFT.innerHTML =
      "<strong>Incorrect. </strong> 3 secs. discounted. Keep trying!!";
    assesFT.style.display = "block";
    timeSpan.style.color = "red";
    setTimeout(function () {
      timeSpan.style.color = "black";
    }, 1000);
  }
}

function removeQuestionsButtons() {
  questionH5.textContent = "";
  var child = answersDiv.lastElementChild;
  while (child) {
    answersDiv.removeChild(child);
    child = answersDiv.lastElementChild;
  }
  while (image_area.hasChildNodes()) {
    image_area.removeChild(image_area.childNodes[0]);
  }
}

function gameOver(cause) {
  if (cause === "questions_done") {
    console.log("QUESTIONS DONE");
    setTimeout(() => {
      assesFT.setAttribute(
        "class",
        "alert alert-dark mt-0 mb-0 pt-0 pb-0 text-center"
      );
      assesFT.innerHTML = "<strong>Quiz finished</strong> Good luck!";
    }, 1500);
    clearInterval(time);
  } else if (cause === "time_out") {
    console.log("TIME OUT");
    disableQuestions();
    audioTollingBell.play();
    setTimeout(() => {
      audioTollingBell.pause();
    }, 4000);
    assesFT.setAttribute(
      "class",
      "alert alert-info mt-0 mb-0 pt-0 pb-0 text-center"
    );
    assesFT.innerHTML = "<strong>Time finished</strong> Good luck!";
  } else {
    return false;
  }
  assesFT.style.display = "block";
  if (correctScore >= 70) {
    setTimeout(() => {
      audioApplause.play();
    }, 5000);
  } else {
    setTimeout(() => {
      audioThunder.play();
      allDone.firstElementChild.setAttribute(
        "class",
        "alert alert-danger mt-0 mb-0"
      );
      progressBar.firstElementChild.setAttribute(
        "class",
        "progress-bar bg-danger progress-bar-striped progress-bar-animated"
      );
      submit.setAttribute("class", "btn btn-danger");
    }, 5000);
  }
  setTimeout(function () {
    finalScore.textContent = correctScore;
    quiz.style.display = "none";
    allDone.style.display = "block";
    assesFT.style.display = "none";
    removeQuestionsButtons();
  }, 5000);
}

function addToHighscores() {
  var highScoreElement = document.createElement("li");
  var highscoreStr = initials.value + " - " + correctScore;
  localHighscoresArray.push(highscoreStr);
  var highscoreArrayStr = localHighscoresArray.toString();
  highScoreElement.textContent = highscoreStr;
  highScoresList.append(highScoreElement);
  localStorage.setItem("highscore", localHighscoresArray);
  justRegistered = true;
  initials.value = "";
  // Modal
  $("#staticBackdrop").modal("show");
}

function loadHighScores() {
  var tempHighscoresArray = [];
  var tempHighscoresObject = {};
  var tempHighscoresObjectsArray = [];
  var tempLocalSCoreArray = [];
  while (highScoresList.hasChildNodes()) {
    highScoresList.removeChild(highScoresList.childNodes[0]);
  }
  var lastPos;
  var lastChar = "";
  var localScore = 0;
  var localStrScore = "";
  var tempHighscore = "";
  for (i = 0; i < localHighscoresArray.length; i++) {
    for (j = localHighscoresArray[i].length - 1; j >= 0; j--) {
      lastPos = localHighscoresArray[i].length - 1;
      lastChar = localHighscoresArray[i][lastPos - j];
      if (lastChar && lastChar >= 0 && lastChar <= 9) {
        localScore += lastChar;
      }
      if (j > 1) {
        if (j === 2 && lastChar === "1") {
        }
        localStrScore += lastChar;
      }

      localScore = parseInt(localScore);
    }

    tempHighscore = localScore + localStrScore;
    tempHighscoresArray.push(tempHighscore);
    tempHighscoresObject.score = localScore;
    tempHighscoresObject.scoreStr = localStrScore;

    tempHighscoresObjectsArray.push(tempHighscoresObject);
    tempLocalSCoreArray.push(localScore);
    localScore = 0;
    localStrScore = "";
    tempHighscoresObject = {};
  }
  tempLocalSCoreArray.sort(function (a, b) {
    return b - a;
  });
  var sortedScoresCompleteArray = [];
  var flagged = [];
  tempLocalSCoreArray.forEach(function (element) {
    tempHighscoresObjectsArray.forEach(function (object, index) {
      if (element === object.score && !flagged.includes(index)) {
        flagged.push(index);

        var tempScoreString = object.scoreStr + " " + object.score;
        sortedScoresCompleteArray.push(tempScoreString);
      }
    });
  });
  for (i = 0; i < sortedScoresCompleteArray.length; i++) {
    var highScoreElement = document.createElement("li");
    highScoreElement.textContent = sortedScoresCompleteArray[i];
    for (j = sortedScoresCompleteArray[i].length - 1; j >= 0; j--) {
      lastPos = sortedScoresCompleteArray[i].length - 1;
      lastChar = sortedScoresCompleteArray[i][lastPos - j];
      if (lastChar && lastChar >= 0 && lastChar <= 9) {
        localScore += lastChar;
      }
      if (j > 1) {
        localStrScore += lastChar;
      }

      localScore = parseInt(localScore);
    }

    tempHighscore = localScore + localStrScore;

    if (localScore > 80 && localScore <= 100) {
      highScoreElement.setAttribute(
        "class",
        "list-group-item list-group-item-success"
      );
    } else if (localScore > 70 && localScore <= 80) {
      highScoreElement.setAttribute(
        "class",
        "list-group-item list-group-item-info"
      );
    } else if (localScore > 60 && localScore <= 70) {
      highScoreElement.setAttribute(
        "class",
        "list-group-item list-group-item-primary"
      );
    } else if (localScore > 50 && localScore <= 60) {
      highScoreElement.setAttribute(
        "class",
        "list-group-item list-group-item-warning"
      );
    } else if (localScore <= 50) {
      highScoreElement.setAttribute(
        "class",
        "list-group-item list-group-item-danger"
      );
    }

    highScoresList.append(highScoreElement);
    tempHighscoresArray.push(tempHighscore);
    tempHighscoresObject.score = localScore;
    tempHighscoresObject.scoreStr = localStrScore;
    tempHighscoresObjectsArray.push(tempHighscoresObject);
    tempLocalSCoreArray.push(localScore);
    localScore = 0;
    localStrScore = "";
    tempHighscoresObject = {};
  }
}

function clearHighscores() {
  localHighscoresArray = [];
  localStorage.setItem("highscore", localHighscoresArray);
  loadHighScores();
}
