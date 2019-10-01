var rawProjectArray = [];
var completedProjects = [];
var completedHTML;

function createProject(title, description, github, website = null) {
  var project = {}
  project.title = title;
  project.description = description;
  project.github = github;
  project.website = website;

  return project;
}

function createProjectHtml(project) {
  var $blankproject = $('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title"></h3></div><div class="panel-body"><p id="introparagraph"></p><div class="gallery"><a href="" id="githubLink"><div class="desc"><b>Check Out the Github!</b></div><img src="./octocat.png" class="octocat"></a></div><div class="gallery"><a href="http://google.com" id="internetLink"><div class="desc"><b>Visit the Website!</b></div><img src="./internet.png" class="internet"></a></div></div></div>');

  console.log(project.website);

  $blankproject.find('h3.panel-title').append(project.title);
  $blankproject.find('p#introparagraph').append(project.description);
  $blankproject.find('#internetLink').attr('href', project.website);
  $blankproject.find('a#githubLink').attr('href', project.github);

  if (project.website === null) {
    $blankproject.find('div.galleryInternetGallery').remove();
  }

  return $blankproject;
}

function createTotalHtml(htmlArray){
  var $totalHtml = $('<div>');
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

rawProjectArray.push(createProject("My First Portfoilio", "My First Portfolio project utilized a simple layout to introduce myself as a programmer to the world. Highlights include the 'pen-and paper' style heading, as well as custom css on the introductory photo, as well as  a card layout with a hover mechanic in the sample future project section. The technologies employed during the develoment include HTML, CSS, and Bootstrap.", "https://github.com/MagicalRobotUnicorn/Basic-Portfolio", "https://magicalrobotunicorn.github.io/Basic-Portfolio/"));

for (var i = 0; i < rawProjectArray.length; i++){
  completedProjects.push(createProjectHtml(rawProjectArray[i]));
}

console.log(completedProjects.length);

$('#putHere').append(createTotalHtml(completedProjects));