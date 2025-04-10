document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("confirmationMessage").classList.remove("hidden");
    this.reset();
  });
  