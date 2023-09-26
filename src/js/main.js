function toggleModal(modalID) {
  const modal = document.getElementById(modalID);
  const backdrop = document.getElementById(`${modalID}-backdrop`);
  const body = document.body;

  if (body.style.overflow === "hidden") {
    body.style.overflow = "auto";
  } else {
    body.style.overflow = "hidden";
  }
  modal.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
  modal.classList.toggle("flex");
  backdrop.classList.toggle("flex");
}
