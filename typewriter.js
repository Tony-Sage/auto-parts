// typewriter.js
export function typeWriterEffect(element, words, delay = 150) {
  let i = 0; // character index
  let j = 0; // word index
  let isDeleting = false;

  function type() {
    const currentWord = words[j];
    element.textContent = currentWord.substring(0, i);

    if (!isDeleting && i < currentWord.length) {
      i++;
      setTimeout(type, delay);
    } else if (isDeleting && i > 0) {
      i--;
      setTimeout(type, delay / 2);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1000); // pause before deleting
      } else {
        isDeleting = false;
        j = (j + 1) % words.length;
        setTimeout(type, 300);
      }
    }
  }

  type();
}

export function typeWriterPlaceholder(element, words, speed = 100, delay = 2000) {
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const word = words[wordIndex];
    const displayText = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);

    element.setAttribute("placeholder", displayText + (deleting ? "" : "|")); // blinking cursor

    if (!deleting && charIndex === word.length) {
      setTimeout(() => deleting = true, delay);
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    const typingSpeed = deleting ? speed / 2 : speed;
    setTimeout(type, typingSpeed);
  }

  type();
}