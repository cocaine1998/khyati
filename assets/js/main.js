// Get the CURRENT file's directory depth
const depth = window.location.pathname.split("/").length - 2;

// Build relative path based on depth
let relativePath = "";
for (let i = 0; i < depth; i++) {
  relativePath += "../";
}

// Final header path (go to root, then to assets/partials)
const headerPath = relativePath + "assets/partials/header.html";

// Load header
fetch(headerPath)
  .then(res => res.text())
  .then(html => {
    document.getElementById("site-header").innerHTML = html;
  })
  .catch(err => console.error("Header load failed:", err));
