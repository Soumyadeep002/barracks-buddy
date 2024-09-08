const mobnav = document.querySelector('#mob-nav');
document.querySelector("#open-btn").addEventListener("click", () => {
    mobnav.classList.remove('-translate-x-[50rem]');
})
document.querySelector("#close-btn").addEventListener("click", () => {
    mobnav.classList.add('-translate-x-[50rem]');
})