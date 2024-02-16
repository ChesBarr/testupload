document.addEventListener('DOMContentLoaded', function() {
    const toggleTheme = document.getElementById('toggleTheme');
    const customStyles = document.getElementById('customStyles');

    toggleTheme.addEventListener('click', function() {
        // Change the value of --background-color
        customStyles.style.setProperty('--theme', '#ff0000');
    });
});