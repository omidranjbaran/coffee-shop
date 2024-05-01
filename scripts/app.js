const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".navCloseBtn");
const nav = document.querySelector(".nav");
const cartOpenBtn = document.querySelector(".cart-icon")
const cartCloseBtn = document.querySelector(".cartCloseBtn")
const cart = document.querySelector(".cart") 
const overlay = document.querySelector(".overlay")
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }


toggleThemeBtns.forEach(btn => {
  btn.addEventListener("click",() =>{
    if(localStorage.theme === "dark"){
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
  }else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
  }
  })
})


submenuOpenBtn.addEventListener("click",(e)=>{
  e.currentTarget.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("hidden")
})

navOpenBtn.addEventListener("click",() => {
  nav.classList.remove("-right-64")
  nav.classList.add("right-0")
  overlay.classList.toggle("invisible")
})

navCloseBtn.addEventListener("click",() =>{
  nav.classList.add("-right-64")
  nav.classList.remove("right-0")
  overlay.classList.add("invisible")
})

overlay.addEventListener("click",() =>{
  nav.classList.add("-right-64")
  nav.classList.remove("right-0")
  cart.classList.add("-left-64")
  cart.classList.remove("left-0")
  overlay.classList.add("invisible")
})

cartOpenBtn.addEventListener("click",() =>{
  cart.classList.remove("-left-64")
  cart.classList.add("left-0")
  overlay.classList.toggle("invisible")
})

cartCloseBtn.addEventListener("click",() => {
  cart.classList.add("-left-64")
  cart.classList.remove("left-0")
  overlay.classList.add("invisible")
})