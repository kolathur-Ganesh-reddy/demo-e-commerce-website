document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navlist');
    const cancelBtn = document.getElementById('cancel-btn');

    // Toggle menu visibility when the menu icon is clicked
    menuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close the menu when the cancel button is clicked
    cancelBtn.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

console.log(menuIcon, navList);
menuIcon.addEventListener('click', () => {
    console.log('Menu icon clicked!');
});


