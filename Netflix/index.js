document.addEventListener('DOMContentLoaded', () => {
    const moreInfoButton = document.getElementById('more-info');
    const featuredDescription = document.getElementById('featured-description');
    const searchInput = document.getElementById('search');
    const gridItems = document.querySelectorAll('.grid-item');

    moreInfoButton.addEventListener('click', () => {
        alert('This is more information about the featured show.');
        featuredDescription.innerHTML = 'The series centers around Wednesday Addams (played by Jenna Ortega), a teenage girl with a sharp intellect, deadpan humor, and a penchant for the macabre. She enrolls at Nevermore Academy, a peculiar boarding school that has been home to many outcasts and misfits over the years. As she navigates the complex social dynamics of the academy, Wednesday discovers she has psychic abilities.';
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        gridItems.forEach(item => {
            const info = item.getAttribute('data-info').toLowerCase();
            if (info.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    gridItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const info = item.getAttribute('data-info');
            item.setAttribute('title', info);
        });
    });
});
