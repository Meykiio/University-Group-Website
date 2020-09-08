const topLink = document.querySelector(".topLink");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 350){
    topLink.classList.add("showLink");
  }else{
    topLink.classList.remove("showLink");
  }
})

export default window;

