// Set the date for the countdown (format: "YYYY-MM-DDTHH:MM:SS")
const countdownDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the timer values in the HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown ends, stop the timer and display a message
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".container").innerHTML = `<h2 class="text-3xl font-bold">The wait is over!</h2>`;
  }
}, 1000);
