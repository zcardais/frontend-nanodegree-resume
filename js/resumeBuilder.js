/********** BIO **********
*************************/
var bio = {
	"name":"Zach Cardais",
	"role":"Data Scientist",
	"contacts": {
		"mobile": "704-996-5783",
		"email": "zach@zeffective.com",
		"github": "zcardais",
		"twitter": "@zeffective",
		"location": "Charlotte, NC"
	},
	"welcomeMessage": "Hi! This is a JavaScript-heavy site that I coded in November 2015. Thanks for visiting.",
	"skills": [
		"Google Analytics",
		"Programming",
		"Workshops and Training",
		"Web Analytics"
	],
	"bioPic": "images/zjc.jpg"
}

/********** WORK **********
**************************/
var work = {
	"jobs":[
		{
			"employer": "Zeffective",
			"title": "President",
			"location": "Charlotte, NC",
			"dates": "January 2015",
			"description": "Web analytics and Google Analytics expert consultant and training."
		}
	]
}

/********** PROJECTS **********
******************************/
var projects = {
	"projects": [{
		"title": "Online Resume",
		"dates": "December 2015",
		"description": "Online resume site using JavaScript, JSON and jQuery",
		"images": ["images/online-resume.png", "images/portfolio.png"]
	}, {
		"title": "Portfolio site",
		"dates": "November 2015",
		"description": "Portfolio site to display my Udacity projects using HTML, CSS, JavaScript, JSON and jQuery",

	}]
}

/********** EDUCATION **********
*******************************/
var education = {
	"schools": [{
		"name": "Virginia Tech",
		"location": "Blacksburg, VA, US",
		"degree": "BS",
		"major": ["Finance", "Marketing"],
		"dates": 2005,
		"url": "http://www.vt.edu/"
	}],
	"onlineCourses": [{
		"title": "Nanodegree Front-end Web Development",
		"school": "Udacity",
		"date": 2016,
		"url": "http://www.udacity.com/nanodegree"
	}]
}

/********** displayHeader **********
*************************/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts, #footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts, #footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts, #footerContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts, #footerContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedLocation);

var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBiopic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


/********** displayWork **********
*************************/
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


/********** displayProjects **********
*************************************/
projects.display = function() {
	// display code goes here
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				console.log(image);
				console.log(projects.projects[project].images[image]);
			}
		}
	}
}
$("#projects").append(projects.display);


/********** displayEducation **********
*******************************/
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry").append(formattedNameDegree);
	}
}
$("#education").append(education.display);


/********** internationalizeButon **********
*******************************************/
// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	finalName = names.join(" ");

// 	return name[0] +" "+name[1];
// }

// $("#main").append(internationalizeButton);





/********** NOTES FROM QUIZZES **********
****************************************/

// $("#main").append("Zach Cardais");

// [string].replace([old], [new]);

// var name = "Zach Cardais"
// var age = 32
// console.log(firstName);

// var awesomeThoughts = "My name is Zach and I am AWESOME!"
// console.log(awesomeThoughts);

// var email = "zach@zeffective.com"
// var newEmail = email.replace("zeffective", "gmail");
// console.log(email);
// console.log(newEmail);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);
// $("#main").append(funThoughts);

// var word = "audacity";
// var newWord = s.replace("au", "U");
// console.log(newWord);

// var skills = ["Google Analytics", "Programming", "Workshops and Training", "Web Analytics"];
// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.length);
// console.log(skills.length);


// var numbers = [2,4,6,8];
// var newNumbers = numbers.push(-1);
// console.log(newNumbers[-1]);
