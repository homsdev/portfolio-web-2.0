const hamburgerBtn= document.querySelector(".hamburger-menu");
const menuPanel= document.getElementById("MenuPanel");

hamburgerBtn.addEventListener("click",()=>{
    hamburgerBtn.classList.toggle("active");
    if(hamburgerBtn.classList.contains("active")){
       menuPanel.classList.toggle("show-menu");
    }else{
        menuPanel.classList.toggle("show-menu");
    }
});
