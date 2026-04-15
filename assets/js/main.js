console.log("JS CONNECTED");

window.openModal = function(type, file) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const pdf = document.getElementById("modal-pdf");

  modal.style.display = "block";

  if (type === "img") {
    img.src = "assets/img/" + file;
    img.style.display = "block";
    pdf.style.display = "none";
  }

  if (type === "pdf") {
    pdf.src = "assets/pdf/" + file;
    pdf.style.display = "block";
    img.style.display = "none";
  }
};

window.closeModal = function() {
  document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
