const coursesContainer = document.querySelector(".courses-container");

function displayCourses (courses) {
  let displayCourses = courses.map(course =>{
    return `<div class="course">
              <h3 id="course-title">${course.title}</h3>
              <p>Teacher : <span id="course-teacher">${course.teacher}</span></p>
              <p>Module: <span id="course-module">${course.module}</span></p>
              <a href="${course.link}" id="course-link" target="_blank">Download Course</a>
            </div>`
  }).join("");
  coursesContainer.innerHTML = displayCourses;
};

export default displayCourses;
