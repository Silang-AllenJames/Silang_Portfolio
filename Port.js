// Scroll to specific section smoothly
function scrollToSection(sectionId) {
  const sectionElement = document.getElementById(sectionId);
  
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.warn(`Section with ID "${sectionId}" not found.`);
  }
}
// Handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  const form = document.getElementById('contact-form');

  // Extract values from the inputs
  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate message sending
  console.log('--- Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('-----------------------');

  // Show success message
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Clear the form fields
  form.reset();
}

// Email format validation
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Initialize everything after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmission);
  } else {
    console.error('Contact form not found!');
  }

  // Optional: log that the script has loaded
  console.log('Portfolio script loaded and ready.');
});