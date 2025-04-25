document.getElementById('foodForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Create a success message
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  successMessage.innerHTML = `
    <h2>Thank You!</h2>
    <p>Your food listing has been submitted successfully. We will notify you when it's shared.</p>
  `;
  document.body.appendChild(successMessage);

  // Add some styling for the success message dynamically
  successMessage.style.position = 'fixed';
  successMessage.style.top = '50%';
  successMessage.style.left = '50%';
  successMessage.style.transform = 'translate(-50%, -50%)';
  successMessage.style.padding = '2rem';
  successMessage.style.backgroundColor = '#fff';
  successMessage.style.borderRadius = '12px';
  successMessage.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
  successMessage.style.textAlign = 'center';
  successMessage.style.zIndex = '9999';
  successMessage.style.opacity = '0';
  successMessage.style.transition = 'opacity 0.5s ease-in-out';

  // Fade in success message
  setTimeout(() => {
    successMessage.style.opacity = '1';
  }, 100);

  // Hide success message after a few seconds
  setTimeout(() => {
    successMessage.style.opacity = '0';
    setTimeout(() => {
      successMessage.remove();
    }, 500);
  }, 4000);

  // Reset the form
  this.reset();
});
