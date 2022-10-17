function modal(){
  const modalTrigger = document.querySelectorAll("[data-modal]");
  const modals = document.querySelectorAll(".modal");
  modalTrigger.forEach((btn) => {
    const idModal = btn.getAttribute("data-modal");
    const modal = document.querySelector(`.modal-${idModal}`);
    btn.addEventListener("click", (evt) => {
      if (evt.target.tagName === "A") {
        return;
      }
      openModal(modal);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.getAttribute("data-close") == "") {
        closeModal(modal);
      }
    });
  });
}

// modal window
function openModal(modal) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.style.display = "none";
  document.body.style.overflow = "";
}

export default modal;
// export {openModal, closeModal};
