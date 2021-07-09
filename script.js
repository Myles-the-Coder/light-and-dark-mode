const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = getElement("nav");
const toggleIcon = getElement("toggle-icon");
const img1 = getElement("image1");
const img2 = getElement("image2");
const img3 = getElement("image3");
const textBox = getElement("text-box");

//Get Element by ID
function getElement(element) {
  return document.getElementById(element)
}

//Change image color
function changeImage(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(input) {
  nav.style.backgroundColor =
    input === "dark" ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    input === "dark" ? "rgb(255 255 255 / 80%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].innerText = `${capitalize(input)} Mode`;
  input === "dark"
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  changeImage(input);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

//Dark Mode Styles
// function darkMode() {
//   toggleIcon.children[0].innerText = 'Dark Mode'
//   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
//   changeImage('dark')
// }

//Light Mode Styles
// function lightMode() {
//   toggleIcon.children[0].innerText = 'Light Mode'
//   toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
//   changeImage('light')
// }

//Change theme
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode("dark");
  } else {
    document.documentElement.removeAttribute("data-theme", "dark");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode("light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
