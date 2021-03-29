const hamburgerBtn = document.querySelector(".hamburger-menu");
const menuPanel = document.getElementById("MenuPanel");
const animatedElements = document.querySelectorAll("[data-ani]");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

function scrollELement(element, options) {
  const internalCallback = function (entries) {
    let observedElement = entries[0];
    observedElement.isIntersecting
      ? element.classList.add("min-ani-scroll")
      : element.classList.remove("min-ani-scroll");
  };

  const observer = new IntersectionObserver(internalCallback, options);
  observer.observe(element);
}

function watchElements(elements, options) {
  elements.forEach((element) => {
    scrollELement(element, options);
  });
}

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  if (hamburgerBtn.classList.contains("active")) {
    menuPanel.classList.toggle("active");
  } else {
    menuPanel.classList.toggle("active");
  }
});

watchElements(animatedElements, options);
