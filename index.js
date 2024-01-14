function updateEmoji() {
  // Loop through each input element with type "range"
  document.querySelectorAll('input[type="range"]').forEach((slider) => {
    const emojiContainer = slider.parentElement.querySelector(".emoji");
    const value = slider.value;
    let emoji;

    if (value <= 20) {
      emoji = "😠"; // Sad emoji
    } else if (value <= 40) {
      emoji = "😢"; // Sad emoji
    } else if (value <= 60) {
      emoji = "😐"; // Neutral emoji
    } else if (value <= 80) {
      emoji = "😊"; // Happy emoji
    } else {
      emoji = "😄"; // Very happy emoji
    }

    emojiContainer.textContent = emoji;
  });
}

function message() {
  let username = document.getElementById("name").value;
  window.alert("Hi " + username + ", Your form has been submitted. Hurray!!!!!");
}
