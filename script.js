// Typing Effect
const headerText = "👩‍💻 Muskan Pandey";
let index = 0;
const typingSpeed = 100;
const titleElement = document.querySelector("header h1");

function typeHeader() {
  if (index < headerText.length) {
    titleElement.textContent += headerText.charAt(index);
    index++;
    setTimeout(typeHeader, typingSpeed);
  }
}
titleElement.textContent = "";
typeHeader();

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth Scroll (Optional for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
