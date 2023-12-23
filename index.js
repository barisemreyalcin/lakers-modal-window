"use strict";

const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function(index) {
    modals[index].classList.remove("hidden");
    overlay.classList.remove("hidden");
    closeModalBtn.classList.remove("hidden");
}

const closeModal = function(index) {
    modals[index].classList.add("hidden");
    overlay.classList.add("hidden");
    closeModalBtn.classList.add("hidden");
}

for(let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener("click", () => openModal(i));
    closeModalBtn.addEventListener("click", () => closeModal(i));
    overlay.addEventListener("click", () => closeModal(i));
    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && !modals[i].classList.contains("hidden")) {
            closeModal(i);
        }
    })
}