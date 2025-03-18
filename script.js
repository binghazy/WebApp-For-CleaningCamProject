let timerInterval;
let secondsPassed = 0;

function playGif() {
  let img = document.getElementById("cleaningGif");
  let timerDisplay = document.getElementById("timer");

  // Fade out before changing to GIF
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = "Assets/cleaning.gif"; // Switch to GIF
    img.style.opacity = 1; // Fade in
  });

  // After 5 seconds, switch back to PNG
  setTimeout(() => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = "Assets/cleaning_static.png"; // Switch back to PNG
      img.style.opacity = 1;
    });
  }, 5000);

  // Reset the timer
  clearInterval(timerInterval);
  secondsPassed = 0;
  timerDisplay.textContent = "Last time Since last cleaning: 0s";

  // Start counting
  timerInterval = setInterval(() => {
    secondsPassed++;
    timerDisplay.textContent = `Last time Since last cleaning: ${secondsPassed}s`;
  }, 1000);
}
