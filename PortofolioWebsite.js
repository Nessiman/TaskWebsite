function loadSection(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading section:', file, error));
}


loadSection("navbar", "section/navbar.html");
loadSection("about", "section/about.html");
loadSection("projects", "section/projects.html");
loadSection("frameworks", "section/frameworks.html");
loadSection("footer", "section/footer.html");
