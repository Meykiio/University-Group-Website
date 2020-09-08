import displayCourses from "/utils/displayCourses.js";

const filterBtns = document.querySelectorAll(".filter-btn");

function filterCourses (courses) {
  filterBtns.forEach(function(btn){

    btn.addEventListener("click",function(e){
      // toggle active class
      const current = document.getElementsByClassName("active");
      if(current.length > 0){
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";

      // Filter Courses
      const category = e.currentTarget.dataset.module;
      const courseCategory = courses.filter(function(course){
        if (course.module === category) {
          return course;
        }
      });
        if (category === "all"){
          displayCourses(courses);
        }
        else{
          displayCourses(courseCategory);
        }
    })
  })
}

export default filterCourses;
