function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}

let themeButton = document.querySelector("#theme-btn");
themeButton.addEventListener("click", changeTheme);
