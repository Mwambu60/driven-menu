// Function to display the section based on button clicked
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(sec => sec.style.display = 'none');
  
    // Show the clicked section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Display the personal details section by default
  document.addEventListener('DOMContentLoaded', () => {
    showSection('personal');
  });
  