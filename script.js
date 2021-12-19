let section = document.querySelector("section"),
  icons = document.querySelector(".icons");

  icons.onclick = ()=>{
    section.classList.toggle("dark");
  }
  // creating a function and calling it in every seconds
  setInterval(()=>{

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

}, 1000); // 1000 milliseconds = 1s