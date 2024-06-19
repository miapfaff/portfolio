document.addEventListener('DOMContentLoaded', function () {
    var projectsLink = document.getElementById('projects-link');
    var projectsSection = document.getElementById('projects');
    projectsLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        projectsSection.classList.toggle('hidden');
    });
});
