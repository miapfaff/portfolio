document.addEventListener('DOMContentLoaded', () => {
    const projectsLink = document.getElementById('projects-link')!;
    const projectsSection = document.getElementById('projects')!;

    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default anchor behavior
        projectsSection.classList.toggle('hidden');
    });
});