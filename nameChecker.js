//JSON 的模板
bioPattern = {
  'name': ["string"],
  'role': ["string"],
  'biopic': ["string"],
  'contacts': ["object", {
    "mobile": ["string"],
    "email": ["string"],
    "github": ["string"],
    "location": ["string"]
  }],
  'welcomeMessage': ["string"],
  'skills': ["array"],
  'biopic': ["string"],
  'display': ["function"]
}

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

//检查模板的函数
var DO_NOT_HAVE_KEY_MESSAGE = '缺失： %s 没有含有 %s 键值';
var DO_NOT_MATCH_TYPE = '类型错误： %s 键值的类型应为 %s '

function checkPattern(name, pattern, objectToCheck) {
  Object.keys(pattern).forEach(function(key) {
    if (!objectToCheck.hasOwnProperty(key)) {
      console.log(DO_NOT_HAVE_KEY_MESSAGE, name , key);
    } else {

      if (pattern[key][0] == 'object') {
        positionMsg = name + ' --> ' + key;
        checkPattern(positionMsg, pattern[key][1], bio[key]);
      } else if (pattern[key][0] == 'arrayObject') {
        if ($.type(objectToCheck[key]) === 'array') {
          for (var i = 0; i < objectToCheck[key].length; i++) {
            positionMsg = name + ' --> ' + key;
          	var currentPositionMsg = positionMsg + "第" + i + "个";
          	checkPattern(currentPositionMsg, pattern[key][1], objectToCheck[key][i]);
          };
        };
      } else {
        positionMsg = name + ' --> ' + key;
        checkType(positionMsg, objectToCheck[key], pattern[key][0]);
      }
    }
  });
}

function checkType(position, value, type) {
  if ($.type(value) !== type) {
    console.log(DO_NOT_MATCH_TYPE, position, type);
  }
}

//检查对象是否存在
var DO_NOT_HAVE_OBJECT = '对象 %s 并不存在'
if (typeof bio === 'undefined') {
   console.log(DO_NOT_HAVE_OBJECT, 'bio');
} 
if (typeof education === 'undefined') {
   console.log(DO_NOT_HAVE_OBJECT, 'education');
}
if (typeof work === 'undefined') {
   console.log(DO_NOT_HAVE_OBJECT, 'work');
}
if (typeof projects === 'undefined') {
   console.log(DO_NOT_HAVE_OBJECT, 'projects');
}

checkPattern('bio', bioPattern, bio);
checkPattern('education', eductionPattern, education);
checkPattern('work', workPattern, work);
checkPattern('projects', projectsPattern, projects);