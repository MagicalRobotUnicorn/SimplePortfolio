var projectArray = [];
var completedHTML = [];

function createProject(title, description, github, website = null) {
  var project = {}
  project.title = title;
  project.description = description;
  project.github = github;
  this.website = website;

  return project;
}

function createProjectHtml(project) {
  var $blankproject = $('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title"></h3></div><div class="panel-body"><p id="introparagraph"></p><div class="gallery"><a href="" id="githubLink"><div class="desc"><b>Check Out the Github!</b></div><img src="./octocat.png" class="octocat"></a></div><div class="gallery"><a href="" id="internetLink"><div class="desc"><b>Visit the Website!</b></div><img src="./internet.png" class="internet"></a></div></div></div>');

  $blankproject.find('h3.panel-title').append(project.title);
  $blankproject.find('p#introparagraph').append(project.description);
  $blankproject.find('a#githubLink').attr('href', project.github);

  if (project.website !== null) {
    $blankproject.find('a#internetLink').attr('href', project.website);
  }
  else {
    $blankproject.find('div.galleryInternetGallery').remove();
  }
  return $blankproject;
}

projectArray.push(createProject("My First Portfoilio", "My First Portfolio project utilized a simple layout to introduce myself as a programmer to the world. Highlights include the 'pen-and paper' style heading, as well as custom css on the introductory photo, as well as  a card layout with a hover mechanic in the sample future project section. The technologies employed during the develoment include HTML, CSS, and Bootstrap.", "https://github.com/MagicalRobotUnicorn/Basic-Portfolio", "https://magicalrobotunicorn.github.io/Basic-Portfolio/"));

for (var i = 0; i < projectArray.length; i++){
  completedHTML.push(createProjectHtml(projectArray[i]));
}

for (var i = 0; i < completedHTML.length; i++){
  $('#putHere').append(completedHTML[i]);
}

// var newDiv = createProjectHtml(projectArray[0]);

// console.log(newDiv);

// console.log(projectArray[0].description);

// $('#putHere').html(createProjectHtml(projectArray[0]));
