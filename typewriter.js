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
