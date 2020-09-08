import displayCourses from "../utils/displayCourses.js";
import filterCourses from "../utils/filterCourses.js";
import backTop from "/utils/backToTop.js";
import toggle from "/utils/toggleNavbar.js";

// Load Courses

const url = "https://meykiio.github.io/courses_data/data.json";

window.addEventListener("load", async() => {
  const data = await fetch(url);
  const response = await data.json();
  displayCourses(response);
  filterCourses(response);
})


