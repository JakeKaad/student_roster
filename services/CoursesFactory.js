courseRoster.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [];
  factory.addCourse = function() {
    factory.courses.push({ name: factory.courseName,
                           id: factory.courses.length + 1,
                           students: [],
                           show: false
                         });
  factory.courseName = null;
  };

  factory.toggle = function(item) {
    factory.courses.forEach(function(course) {
      course.show = false;
    });
    item.show = true;
  }

  return factory;
});
