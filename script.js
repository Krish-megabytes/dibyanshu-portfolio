function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
/* for show more button in project section */
const showMoreBtn = document.getElementById("showMoreBtn");
const hiddenProjects = document.querySelectorAll(".hidden-project");

showMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.style.display = project.style.display === "block" ? "none" : "block";
  });

  // Toggle button text
  showMoreBtn.textContent =
    showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
});

/* for contact us */
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_nibl9oj", "template_7rb6g0l", this).then(
      () => {
        alert("Message sent successfully ✅");
        this.reset();
      },
      (error) => {
        alert("Failed to send message ❌ " + JSON.stringify(error));
      }
    );
  });


 /*  for nav bar */
  document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // adjust 60px if navbar height
        behavior: "smooth"
      });
    }
  });
});

