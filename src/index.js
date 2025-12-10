import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const btnNav = document.getElementById("btn-nav");
  const navUl = document.getElementById("nav-ul");

  btnNav.addEventListener("click", () => {
    updateVisibilityNavBar(navUl);
  });

  document.addEventListener("click", (event) => {
    const isClickInside =
      btnNav.contains(event.target) || navUl.contains(event.target);
    console.log(isClickInside);
    if (!isClickInside) {
      hideNavBar(navUl);
    }
  });
});

function updateVisibilityNavBar(navUl) {
  navUl.classList.toggle("hidden");
}

function hideNavBar(navUl) {
  console.log(navUl.classList.contains("hidden"));
  if (navUl.classList.contains("hidden")) return;
  navUl.classList.add("hidden");
}
