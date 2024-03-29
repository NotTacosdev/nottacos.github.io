document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        "I pray for the better days"
        // Add more sentences as needed
    ];

    let currentSentence = 0;
    let currentChar = 0;
    let isDeleting = false;
    const typingSpeed = 150; // Milliseconds per character
    const deleteSpeed = 100; // Milliseconds per character
    const pauseTime = 2000; // Pause time at end of sentence
    const textElement = document.getElementById('typing-text');

    function type() {
        const fullSentence = sentences[currentSentence];
        if (isDeleting) {
            currentChar--;
        } else {
            currentChar++;
        }

        textElement.textContent = fullSentence.substring(0, currentChar);

        if (!isDeleting && currentChar === fullSentence.length) {
            setTimeout(() => isDeleting = true, pauseTime);
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentSentence = (currentSentence + 1) % sentences.length;
        }

        const delay = isDeleting ? deleteSpeed : typingSpeed;
        setTimeout(type, delay);
    }

    type();
});
