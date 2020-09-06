// Code

//  Display recents posts/courses

window.addEventListener("DOMContentLoaded", function(){
  displayRecentCourses(url);
})

const url = "https://meykiio.github.io/courses_data/data.json";
const recentCoursesContainer = document.querySelector(".recentCourses-container");


//  Get Data and display only 4 posts
function displayRecentCourses(url){
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200 ){
      const data = JSON.parse(xhr.responseText);
      const recentPosts = [data[0],data[1],data[2],data[3]];
      displayPosts (recentPosts)
    }
    else{
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      })
    }
  }
}

//  Display Posts
function displayPosts (posts) {
  let displayPosts = posts.map(post =>{
    return `<div class="course">
              <h3 id="course-title">${post.title}</h3>
              <p>Teacher : <span id="course-teacher">${post.teacher}</span></p>
              <p>Module: <span id="course-module">${post.module}</span></p>
              <a href="${post.link}" id="course-link" target="_blank">Download Course</a>
            </div>`
  });
  displayPosts = displayPosts.join("");
  recentCoursesContainer.innerHTML = displayPosts;
};
