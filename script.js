// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Add event listener to the toggle button
document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
