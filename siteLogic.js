// Procedurally generated project divs
// each project should have a title, description, github link, and website link


function createProject(title, description, github, website = null){
  var project = {}
  project.title = title;
  project.description = description;
  project.github = github;
  this.website = website;
}

// .panel-heading.panel-title : h3 element associated with the panel heading
// 
var $blankproject = $('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title"></h3></div><div class="panel-collapse collapse" id="panel-3"><div class="panel-body"><p id="introparagraph"></p><div class="gallery githubGallery"><a href="" id="githubLink"><div class="desc"><b>Check Out the Github!</b></div><img src="./octocat.png" class="octocat"></a></div><div class="galleryInternetGallery"><a href="" id="internetLink"><div class="desc"><b>Visit the Website!</b></div><img src="./internet.png" class="internet"></a></div></div></div></div>');

$blankproject.find('h3.panel-title').append("This is a title");
$blankproject.find('p#introparagraph').append("This is a description.");
$blankproject.find('a#githubLink').attr('href', 'http://google.com');
$blankproject.find('a#internetLink').attr('href', 'http://google.com');

$('#putHere').html($blankproject);

