document.addEventListener("DOMContentLoaded", function() {
    const mainNav = document.querySelector('.main-nav');
    const profileCard = document.querySelector('.profile-card');
    const menuToggleBtn = document.getElementById('menu-toggle');
    const body = document.body;

    // Mobile menu toggle
    function toggleMobileLayout() {
        if (mainNav) {
            mainNav.classList.toggle('is-open');
        }
        if (profileCard) {
            profileCard.classList.toggle('is-open');
        }
        body.classList.toggle('mobile-view-active');
    }

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', toggleMobileLayout);
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('is-open')) {
            if (!mainNav.contains(event.target) && !menuToggleBtn.contains(event.target)) {
                toggleMobileLayout();
            }
        }
    });

    // Portfolio filter functionality
    const filterItems = document.querySelectorAll('.filter-item');
    const projectItems = document.querySelectorAll('.project-item');

    filterItems.forEach(filter => {
        filter.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // Update active state
            filterItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            projectItems.forEach(project => {
                if (filterValue === 'all') {
                    project.style.display = 'block';
                } else {
                    const categories = project.getAttribute('data-category');
                    if (categories && categories.includes(filterValue)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav && mainNav.classList.contains('is-open')) {
                toggleMobileLayout();
            }
        });
    });
});