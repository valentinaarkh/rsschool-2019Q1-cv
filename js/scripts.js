//Find useful elements

let menu = document.querySelector(".main-menu");
let burger = document.querySelector(".burger-menu");
let top_button = document.querySelector(".top-button");


//Add animation to burger menu for 50px min-width devices

burger.addEventListener("click", openMenu);

function openMenu(){
  menu.classList.toggle("visible");
  burger.classList.toggle("is-open");
}

//Show and hide button top

document.addEventListener("scroll", showButton);

function showButton(){
  if ( document.documentElement.scrollTop >= 300 ){
    top_button.classList.add("visible");
  }else{
    top_button.classList.remove("visible");
  }
}
