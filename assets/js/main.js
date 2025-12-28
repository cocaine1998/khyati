document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;
    });
});
