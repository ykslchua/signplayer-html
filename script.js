let currentText = '';

function fetchAndUpdateText() {
  fetch('data.json?' + new Date().getTime()) // Prevent caching
    .then(response => response.json())
    .then(data => {
      if (data.overlayText !== currentText) {
        currentText = data.overlayText;
        document.getElementById('overlayText').innerText = currentText;
      }
    })
    .catch(error => {
      console.error('Error fetching JSON:', error);
    });
}

// Initial fetch
fetchAndUpdateText();

// Poll every 5 seconds
setInterval(fetchAndUpdateText, 1000);
