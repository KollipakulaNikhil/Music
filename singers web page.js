// Select all images and audio elements
const images = document.querySelectorAll('.image img');
const audios = document.querySelectorAll('audio');

// Function to highlight the currently playing audio
function highlightPlayingAudio(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.border = '5px solid green'; // Highlight the image
    } else {
      img.style.border = 'none';
    }
  });
}

// Add event listeners to images
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Stop other audios before playing the selected one
    audios.forEach((audio, i) => {
      if (i === index) {
        audio.play();
        highlightPlayingAudio(index);
      } else {
        audio.pause();
        audio.currentTime = 0; // Reset other audio tracks
      }
    });
  });
});

// Reset highlighting when audio ends
audios.forEach((audio, index) => {
  audio.addEventListener('ended', () => {
    highlightPlayingAudio(-1); // Remove highlight when song ends
  });
});