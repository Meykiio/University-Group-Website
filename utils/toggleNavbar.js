const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");

toggle.addEventListener("click", () => {
  // Toggle Navbar
  let linksHeight = links.getBoundingClientRect().height;
  let containerHeight = linksContainer.getBoundingClientRect().height;

  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }
  else{
    linksContainer.style.height = 0;
  }

  // hide navbar when link is clicked
  scrollLinks.forEach(link => {
    link.addEventListener("click", function(){
      linksContainer.style.height = 0;
    })
  })
})

export default toggle;
