// prompt("What's your age?");
// if (prompt>=18) {
//     alert("Bitch You can access this website.")

    
// } else {
//     alert("Bitch you are a kid. Go back")
    
// }


const mobile_nav = document.querySelector(".fa-bars");
const nav_navbar = document.querySelector(".navbar");
const toggleNavbar = ()=>{
    nav_navbar.classList.toggle('.fa-bars');

}

mobile_nav.addEventListener("click",()=>toggleNavbar);

