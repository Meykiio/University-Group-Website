import displayRecentCourses from "/utils/displayRecentCourses.js";
import backTop from "/utils/backToTop.js";
import toggle from "/utils/toggleNavbar.js";

// Code

const url = "https://meykiio.github.io/courses_data/data.json";
window.addEventListener("load", async() => {
  const data = await fetch(url);
  const response = await data.json();
  const results = [response[0], response[1], response[2], response[4]];
  displayRecentCourses(results)
})

