const hamburgerBtn = document.querySelector(".hamburger-menu");
const menuPanel = document.getElementById("MenuPanel");
// Sections
const mainPage = document.getElementById("mainPage");
const skillsPage = document.getElementById("skillsPage");

// Menu Options
const navHome = document.getElementById("nav-home");
const navSkills = document.getElementById("nav-skills");
const navWork = document.getElementById("nav-work");
const navAbout = document.getElementById("nav-about");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  if (hamburgerBtn.classList.contains("active")) {
    menuPanel.classList.toggle("active");
    mainPage.classList.toggle("flip-view");
  } else {
    menuPanel.classList.toggle("active");
    mainPage.classList.toggle("flip-view");
  }
});

function navigationMenu(menuItem, pageSection) {
  menuItem.addEventListener("click", () => {
    let active = document.querySelector(".flip-view");
    if (active.id != pageSection.id) {
      active.classList.toggle("hidden");
    } else {
      if (pageSection.classList.contains("hidden")) {
        pageSection.classList.toggle("hidden");
      } else {
        console.log(`${pageSection} no contiene hidden`);
      }
    }
  });
}

navigationMenu(navHome, mainPage);
navigationMenu(navSkills, skillsPage);
