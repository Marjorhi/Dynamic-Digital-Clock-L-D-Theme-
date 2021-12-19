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

    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    
}, 1000); // 1000 milliseconds = 1s