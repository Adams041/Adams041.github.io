// Show/hide button based on scroll position
  window.onscroll = function () {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // Scroll to top on click
  document.getElementById("scrollToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
