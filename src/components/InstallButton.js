// installButton.js
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can install the PWA
  const installButton = document.getElementById('installApp');
  if (installButton) {
    installButton.style.display = 'block';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const installButton = document.getElementById('installApp');
  if (installButton) {
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);
        // We've used the prompt, and can't use it again, throw it away
        deferredPrompt = null;
        // Hide the install button
        installButton.style.display = 'none';
      }
    });
  }
});
