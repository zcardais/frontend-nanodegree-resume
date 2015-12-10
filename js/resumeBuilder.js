/* BIO
----------------------------------- */
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
	"welcomeMessage": "Thanks for visiting my online resume site, a project that I completed in December 2015 to illustrate my proficiency in JavaScript and jQuery, both very useful in my line of work as a data scientist and web analytics expert. Everything you see on this page was coded in JavaScript and jQuery. Get in touch if you want to talk to me about analytics for your business.",
	"skills": [
		"Google Analytics",
		"Web Analytics",
		"Data Science",
		"Analytics Workshops & On-site Training"
	],
	"biopic": "images/zjc.jpg"
}

/* bio.display
----------------------------------- */
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts, #footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts, #footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedLocation);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
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
}
$("#header").append(bio.display);


/* WORK
----------------------------------- */
var work = {
	"jobs":[
		{
			"employer": "Zeffective",
			"title": "President",
			"location": "Charlotte, NC",
			"dates": "January 2015",
			"description": "Web analytics and Google Analytics expert consultant and training."
		},
		{
			"employer": "Sweet Relish",
			"title": "VP Operations",
			"location": "Huntersville, NC",
			"dates": "April 2012 - July 2014",
			"description": "Content Marketing platform for product companies. I was in charge of internal operations inlcluding online advertising and web analytics. I was responsible for creating dashboards and reporting to our team."
		}
	]
}

/* work.display
----------------------------------- */
work.display = function() {
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
$("#workExperience").append(work.display);


/* PROJECTS
----------------------------------- */
var projects = {
	"projects": [{
		"title": "Online Resume",
		"dates": "December 2015",
		"description": "Online resume site using JavaScript, JSON and jQuery",
		"images": ["images/resume.png", "images/resume2.png"]
	}, {
		"title": "Portfolio site",
		"dates": "November 2015",
		"description": "Portfolio site to display my Udacity projects using HTML, CSS, JavaScript, JSON and jQuery",
		"images": ["images/portfolio.png", "images/portfolio2.png"]
	}]
}

/* projects.display
----------------------------------- */
projects.display = function() {
	// display code goes here
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
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


/* EDUCATION
----------------------------------- */
var education = {
	"schools": [{
		"name": "Virginia Tech",
		"location": "Blacksburg, VA",
		"degree": "BS",
		"major": ["Finance"],
		"dates": 2005,
		"url": "http://www.vt.edu/"
	}, {
		"name": "University of Lugano",
		"location": "Lugano, Switzerland",
		"degree": "BS",
		"major": ["Marketing"],
		"dates": "2005",
		"url": "http://www.usi.ch/en"
	}, {
		"name": "Providence Day School",
		"location": "Charlotte, NC",
		"degree": "n/a",
		"major": ["n/a"],
		"dates": "1988 - 2001",
		"url": "http://www.providenceday.org/"
	}],
	"onlineCourses": [{
		"title": "Nanodegree Front-end Web Development",
		"school": "Udacity",
		"date": 2016,
		"url": "http://www.udacity.com/nanodegree"
	}]
}

/* education.display
----------------------------------- */
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
}
$("#education").append(education.display);


/* MAP
----------------------------------- */
$("#mapDiv").append(googleMap);


/* internationalizeButton
----------------------------------- */
// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	finalName = names.join(" ");

// 	return name[0] +" "+name[1];
// }

// $("#main").append(internationalizeButton);



/* NOTES FROM QUIZZES
----------------------------------- */

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
