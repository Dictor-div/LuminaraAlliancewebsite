const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nv_links");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLinks.forEach((li) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
};