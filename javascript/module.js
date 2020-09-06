import {url, coursesContainer, getData, displayCourses, filterBtns} from "../utils/displayCourses.js";

// Load Courses

window.addEventListener("load", () => {
  getData(url)
})


filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    // toggle active class
    const current = document.getElementsByClassName("active");
    if(current.length > 0){
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  })
})

