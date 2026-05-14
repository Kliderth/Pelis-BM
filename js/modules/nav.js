/*============================
  nav responsive
=============================*/
export function initNavMenu(){

const showMenu = (toggleid, navID) => {
const toggleBtn = document.getElementById(toggleid)
const navMenu = document.getElementById(navID)

if(toggleBtn && navMenu){

toggleBtn.addEventListener("click", ()=>{

navMenu.classList.toggle("show-menu")

})

}}
 showMenu("menu-toggle", "nav-menu")
}
