class DropdownManager {
  constructor() {
    this.dropdowns = document.querySelectorAll(".dropdown-container");
  }

  addFunctionality() {
    this.dropdowns.forEach((dropdown) => {
      console.log(dropdown);
      const btnNav = dropdown.querySelector(".btn-nav");
      const navUl = dropdown.querySelector(".nav-ul");

      console.log(btnNav);
      console.log(navUl);

      btnNav.addEventListener("click", () => {
        this.updateVisibility(navUl);
      });
    });

    document.addEventListener("click", (event) => {
      this.dropdowns.forEach((dropdown) => {
        const btnNav = dropdown.querySelector(".btn-nav");
        const navUl = dropdown.querySelector(".nav-ul");

        const clicked =
          btnNav.contains(event.target) || navUl.contains(event.target);

        if (!clicked) {
          navUl.classList.add("hidden");
        }
      });
    });
  }

  getDropdowns() {
    return this.dropdowns;
  }

  updateVisibility(navUl) {
    navUl.classList.toggle("hidden");
  }
}

export { DropdownManager };
