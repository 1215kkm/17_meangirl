// Mean Girls - Main Script
document.addEventListener('DOMContentLoaded', function() {
    // View Toggle (All Films Page)
    const btnGridView = document.getElementById('btn-grid-view');
    const btnListView = document.getElementById('btn-list-view');
    const viewGrid = document.getElementById('view-grid');
    const viewList = document.getElementById('view-list');

    if (btnGridView && btnListView) {
        btnGridView.addEventListener('click', function() {
            viewGrid.classList.remove('hidden');
            viewList.classList.add('hidden');
            btnGridView.querySelector('.view-icon').classList.add('active');
            btnListView.querySelector('.view-icon').classList.remove('active');
        });

        btnListView.addEventListener('click', function() {
            viewGrid.classList.add('hidden');
            viewList.classList.remove('hidden');
            btnListView.querySelector('.view-icon').classList.add('active');
            btnGridView.querySelector('.view-icon').classList.remove('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
