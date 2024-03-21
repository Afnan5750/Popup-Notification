let popup = document.getElementById("popup");
let form = document.getElementById("form");
let btn = document.getElementById("btn");

function openPopup() {
    popup.classList.add("open-popup");
    form.classList.add("open-form");
    btn.style.display = "none";
}

function closePopup() {
    popup.classList.remove("open-popup");
    form.classList.remove("open-form");
    btn.style.display = "block";
}
