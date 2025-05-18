const horDropdown = document.querySelector(".horDropdown");
const setButton = document.querySelector(".setButton");
const horDropdown__container = document.querySelector(".horDropdown__container");

setButton.addEventListener("click", () => {
    horDropdown__container.classList.toggle("horDropdown__container_active");
});