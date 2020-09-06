
export const url = "https://meykiio.github.io/courses_data/data.json";
export const coursesContainer = document.querySelector(".courses-container");
export const filterBtns = document.querySelectorAll(".filter-btn");

//  Get Data
export function getData(url){
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){

      //  Display data
      const data = JSON.parse(xhr.responseText);
      displayCourses(data);

      // filter data
      filterBtns.forEach(function(btn){

        btn.addEventListener("click",function(e){
          const category = e.currentTarget.dataset.module;
          const courseCategory = data.filter(function(data){
            if (data.module === category) {
              return data;
            }
          });
            if (category === "all"){
              displayCourses(data);
            }
            else{
              displayCourses(courseCategory);
            }
        })
      })
    }
    else{
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  }
};

export function displayCourses (courses) {
  let displayCourses = courses.map(course =>{
    return `<div class="course">
              <h3 id="course-title">${course.title}</h3>
              <p>Teacher : <span id="course-teacher">${course.teacher}</span></p>
              <p>Module: <span id="course-module">${course.module}</span></p>
              <a href="${course.link}" id="course-link" target="_blank">Download Course</a>
            </div>`
  });

  displayCourses = displayCourses.join("");
  coursesContainer.innerHTML = displayCourses;
};
