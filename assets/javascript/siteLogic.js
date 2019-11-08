var rawProjectArray = [];
var completedProjects = [];

function createProject(title, description, github, website = null) {
  var project = {}
  project.title = title;
  project.description = description;
  project.github = github;
  project.website = website;

  return project;
}

function createProjectHtml(project) {
  var $blankproject = $('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title"></h3></div><div class="panel-body"><p id="introparagraph"></p><div class="gallery"><a href="" id="githubLink"><div class="desc"><b>Check Out the Github!</b></div><img src="./assets/images/octocat.png" class="octocat"></a></div><div class="gallery internetGallery"><a href="http://google.com" id="internetLink"><div class="desc"><b>Visit the Website!</b></div><img src="./assets/images/internet.png" class="internet"></a></div></div></div>');

  console.log(project.website);

  $blankproject.find('h3.panel-title').append(project.title);
  $blankproject.find('p#introparagraph').append(project.description);
  $blankproject.find('#internetLink').attr('href', project.website);
  $blankproject.find('a#githubLink').attr('href', project.github);

  if (project.website === null) {
    $blankproject.find('div.internetGallery').remove();
  }

  return $blankproject;
}

function createTotalHtml(htmlArray){
  var $totalHtml = $('<div class="container">');
  var rowCounter = 0;
  var $newRow = $('<div class="row">');

  for (var i = 0; i < htmlArray.length; i++){
    var $newCol = $('<div class="col-4">');
    $newCol.append(htmlArray[i]);
    $newRow.append($newCol);
    rowCounter++;

    if (rowCounter === 2){
      $totalHtml.append($newRow);
      $newRow = $('<div class="row">');
      rowCounter = 0;
    }
  }

  if (htmlArray.length % 2 === 1){
    $totalHtml.append($newRow);
  }

  return $totalHtml;
}

rawProjectArray.push(createProject("Lord of the Rings Quiz Game", "Test your Lord of Rings knowledge in a quiz game fit for the King of Gondor! The questions for this project were taken from the LOTR Wikipedia page and scraped from the website using the Node JS package Cheerio. After each question, a random positive or negative LOTR GIF is shown to the user delivered via the Giphy REST API. Notable features on this website include custom LOTR themed font effects intended to emulate the lettering present on the One Ring, as well as a custom countdown timer object CSS and jQuery. <br /><b>The technologies employed in this project include HTML, CSS, Javascript, jQuery, and REST APIs.</b>", "https://github.com/MagicalRobotUnicorn/quiz-game/", "https://magicalrobotunicorn.github.io/quiz-game/"));
rawProjectArray.push(createProject("My First Portfoilio", "My first Portfolio utilized a simple layout to introduce myself as a programmer to the world. Highlights include the 'pen-and-paper' style attributed the heading through Google Web Font, the CSS applied to the cover photo as well as a drop shadow hover mechanic applied to the project headings. <br /><b>The technologies utilized include HTML, CSS, and Bootstrap.</b>", "https://github.com/MagicalRobotUnicorn/Basic-Portfolio", "https://magicalrobotunicorn.github.io/Basic-Portfolio/"));
rawProjectArray.push(createProject("Star Wars jQuery Game", "The Star Wars jQuery game was a project that developed along a strict set of rules The player chooses a character, and after each successful round the player's attack is doubled. The site features a 'Star Wars' themed design, complete with custom logos, and an introductory video poking fun at out professor and our classes swift pace of development. Make sure to turn pop-ups on! <br /> <b>Technologies employed include HTML, CSS, Javascript, as well as jQuery.</b>", "https://github.com/MagicalRobotUnicorn/unit-4-game", "https://magicalrobotunicorn.github.io/unit-4-game/ "));
rawProjectArray.push(createProject("Heavy Metal Word Guess Game", "Do you like heavy metal? Do you like quiz games? Well then, this website is for you! The website track keypress events and allows the user to play a hangman style game where the answers are all metal music artists. Upon completion, the user is shown a photo and an audio sample from the artist in question. This website features a 'metal' themed logo and asset either, all of which are either my own design or drawn from material in the public domain. The Google Font faces were chosen to match the aesthetic as well. <br /><b>The technologies employed include HTML, CSS, Javascript, and jQuery.</b>", "https://github.com/MagicalRobotUnicorn/Word-Guess-Game", "https://magicalrobotunicorn.github.io/Word-Guess-Game/"));
rawProjectArray.push(createProject("Giftastic: Harry Potter", "There is a new course being offered at Hogwarts School of Witchcraft and Wizardry... Magical GIFs! This site utilizes REST APIs in order to provide the user a unique experience. After the user “prepares” a spell, they can then use it display an assortment of GIFs from Giphy's Rest API. The user  can then “sort” themselves using information drawn from both the Harry Potter API and Giphy. The site features  Harry Potter theme, with logos of my own design, as well as a series of font faces the fit the overall design goal. <br /><b>The technologies utilized include HTML, CSS, Javascript, jQuery, and REST APIs.</b>", "https://github.com/MagicalRobotUnicorn/giftastic", "https://magicalrobotunicorn.github.io/giftastic/"));
rawProjectArray.push(createProject("Train Scheduler", "Hop aboard Magical railways to reach your ultimate destination! This assignment utilizes a cloud based database, Google Firestore, in order to provide the user a fictional schedule. The next train arrival time is calculated with MomentJS, a Javascript library that allows for the easy manipulation of datetime objects. Each train stop relates to the location in the children's game Candyland, but feel free to add your own! Once a train is added, the database will update in real time and the information will be accessible by every visitor to the site <br /> <b>The technologies employed include HTML, CSS, Javascript, jQuery, the MomentJS NPM Package, and Google Firebase.</b>", "https://github.com/MagicalRobotUnicorn/trainScheduler", "https://magicalrobotunicorn.github.io/trainScheduler/"));
rawProjectArray.push(createProject("NiteOut", "The NiteOut application was my first group project developed in conjunction with a team of students at the University of Oregon Coding Bootcamp. The application utilizes two APIs, Yelp and Songkick, to deliver to the user near by places to eat and drink near any event in their area. After selecting the event and the establishment, the user adds it to the calendar, currently residing in the user's local storage. One of the more notable experiences of coding the application was abiding by the licenses to use the APIs. Another was the deployment to Heroku. <br /> <b>The technologies employed in this project include HTML, CSS, Javascript, jQuery, and Heroku.</b>", "https://github.com/MagicalRobotUnicorn/NiteOut/tree/connectingClicks", "https://nite-out-app.herokuapp.com"));
rawProjectArray.push(createProject("Quark's Bamazon", "Welcome to Quark's! Quark's Bamazon is your source for the finest legally sourced items from around the Federation. As a customer, the user is able to order products from the database. On confirmation, the quantity of these items are deducted from the database. As a manager, the user can view items that are running low in stock, add inventory, as well as add new items. As a supervisor, a user can view the financial report for each department, as well as create new departments. The department overhead cost is set on creation. Have fun, just don't ask him where he came across the photon torpedos, they just fell off a starship!<br /><b>The technologies in this project are NodeJS, and MySQL. Libraries include cli-table and inquirer.<br />Please note that the website for item is a video of the CLI in action</b>", "https://github.com/MagicalRobotUnicorn/bamazon", "https://magicalrobotunicorn.github.io/bamazon/"));
rawProjectArray.push(createProject("Age of Conflict", "Age of Conflict is a collectable card game in the spirit of Magic the Gathering or Heathstone, and was the second group project developed in the University of Oregon coding bootcamp. The site uses a group of cards created specifically for the project which contained art assets licensed by our group for potential commerical distribution. The project utilizes the 'Socket' javascript library to create a connection between two clients, and a front end designed in Canvas to provide the user with an authentic card playing experience. Please note: if there are no other players looking for a game, open two windows and the server will create a connection between those two instances.<br /><b>Technologies used include Heroku, MySQL, NodeJS, HTML, CSS, and the Socket and Canvas javascript libraries.", "https://github.com/NoahSylwester/Project2", "https://project-2-nwh.herokuapp.com/"));
for (var i = 0; i < rawProjectArray.length; i++){
  completedProjects.push(createProjectHtml(rawProjectArray[i]));
}

console.log(completedProjects.length);

$('#projectContents').append(createTotalHtml(completedProjects));