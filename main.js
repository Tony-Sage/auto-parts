// main.js
import { typeWriterEffect } from './typewriter.js';
import { autoParts } from './data.js';

// Run typing animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typing, .typing-alt').forEach(span => {
    const words = JSON.parse(span.getAttribute('data-words'));
    typeWriterEffect(span, words);
  });

  console.log('Auto parts loaded:', autoParts.length);
});
