bioPattern = {'name' : ["string"],
								'role' : ["string"],
								'biopic' : ["string"],
								'contacts' : ["object", {
									"mobile" : ["string"],
									"email" : ["string"],
									"github" : ["string"],
									"location" : ["string"]
								}],
								'welcomeMessage' : ["string"],
								'skills' : ["array"],
								'biopic' : ["string"],
								'display' : ["function"]}

eductionPattern = {
	'schools': ["arrayObject", {
		"name": ["string"],
		"location": ["string"],
		"degree": ["string"],
		"majors": ["array"],
		"dates": ["string"],
		"url": ["string"]
	}],
	'onlineCourses': ["arrayObject", {
		"title": ["string"],
		"school": ["string"],
		"dates": ["string"],
		"url": ["string"]
	}],
	'display': ["function"]
};

workPattern = {
	'jobs': ["arrayObject", {
		'employer': ['string'],
		'title': ['string'],
		'location': ['string'],
		'dates': ['string'],
		'description': ['string']
	}],
	'display': ['function']
}

projectsPattern = {
	'projects': ["arrayObject", {
		'title': ['string'],
		'dates': ['string'],
		'description': ['string'],
		'images': ['array']
	}],
 'display': ['function']
}

function checkPattern(pattern, objectToCheck) {
	Object.keys(pattern).forEach(function(key) {
		if (!objectToCheck.hasOwnProperty(key)) {
			console.log('object do not have %s key', key);
		} else {
			if (pattern[key][0] == 'object') {
				checkPattern(pattern[key][1], bio[key])
			} else if (pattern[key][0] == 'arrayObject') {
				if ($.type(objectToCheck[key]) === 'array'){
					objectToCheck[key].forEach(function (object){
						checkPattern(pattern[key][1], object);
					});			
				};
			} else {
				checkType(objectToCheck[key], pattern[key][0]);
			}
		}
	});
}

function checkType(value, type) {
	if ($.type(value) !== type) {
		console.log("%s should be typeof %s", value, type);
	}
}

checkPattern(bioPattern, bio);
checkPattern(eductionPattern, education);
checkPattern(workPattern, work);
checkPattern(projectsPattern, projects);