function closeOffcanvas() {
    // Close the offcanvas menu
    var offcanvasElement = document.getElementById("mobileMenu");
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  }

  function scrollToDonation() {
    closeOffcanvas(); // Close the menu first

    setTimeout(() => {
      document
        .getElementById("donation-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 320); // Delay to ensure transition
    
}
