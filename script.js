// Create the emoji div dynamically when the page loads
window.onload = function() {
    const emojiContainer = document.getElementById("emoji-container");
    const emojiDiv = document.createElement("div");
    emojiDiv.id = "emoji";  // Set the id for styling
    emojiDiv.innerHTML = "🤔";  // Initial emoji
    emojiDiv.style.fontSize = "100px";  // Set initial font size
    emojiDiv.style.margin = "30px";  // Add margin
    emojiContainer.appendChild(emojiDiv);
};

// Function to change the mood when a button is clicked
function changeMood(mood) {
    const emojiDiv = document.getElementById("emoji");

    let emoji = "🤔";  // Default emoji
    let backgroundColor = "white";  // Default background color

    const moodSettings = {
        happy: { emoji: "😊", backgroundColor: "yellow" },
        sad: { emoji: "😢", backgroundColor: "blue" },
        angry: { emoji: "😠", backgroundColor: "red" },
        surprised: { emoji: "😲", backgroundColor: "pink" },
        confused: { emoji: "😕", backgroundColor: "gray" },
        excited: { emoji: "🤩", backgroundColor: "orange" },
    };

    // Check if the mood is valid and update the emoji and background
    if (moodSettings[mood]) {
        emoji = moodSettings[mood].emoji;
        backgroundColor = moodSettings[mood].backgroundColor;
    }

    // Apply changes: change background and update emoji
    document.body.style.background = backgroundColor;
    emojiDiv.innerHTML = emoji;  // Update the emoji in the div
}
