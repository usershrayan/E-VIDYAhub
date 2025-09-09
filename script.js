document.addEventListener('DOMContentLoaded', () => {

    // Basic search functionality for the home page
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const filter = searchInput.value.toLowerCase();
            const classCards = document.querySelectorAll('.class-card');
            
            classCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Scroll to section for navigation links
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle active class for subject navigation (on a subject page)
    const subjectNav = document.querySelector('.subject-nav');
    if (subjectNav) {
        const subjectLinks = subjectNav.querySelectorAll('a');
        subjectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                subjectLinks.forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                // In a full application, you would load content dynamically here
            });
        });
    }
});
